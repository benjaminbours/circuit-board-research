import React, { useEffect } from "react";
import { image } from "./image";
import "./App.css";
import { SVG, Timeline } from "@svgdotjs/svg.js";
import "@svgdotjs/svg.filter.js";
import Builder from "@rob10e/svg-path-js";
import * as cpu from "./cpu";
import { generateAllLines } from "./generateAllLines";
import { Direction } from "./types";

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const cpuColor = "#212733";
const ORANGE = "#FF9425";

function App() {
  useEffect(() => {
    // window.addEventListener('mousemove', (e) => {
    //   console.log(e.x, e.y);
    // });

    const timeline = new Timeline();

    const draw = SVG()
      .addTo(".App")
      .size(window.innerWidth, window.innerHeight)
      .viewbox(0, 0, window.innerWidth, window.innerHeight);

    const backgroundGradient = draw.gradient("radial", (add) => {
      const s1 = add.stop(0, cpuColor);
      add.stop(1, cpuColor);

      s1.timeline(timeline);
      s1.animate({
        duration: 2000,
        delay: 1000,
        ease: "<",
        when: "absolute",
      } as any).update(0, "#3A4A66" as any, 1);
    });

    const background = draw
      .rect()
      .size("100%", "100%")
      .fill(backgroundGradient);

    // draw.svg(`<defs>

    //   <!-- a glow that takes on the stroke color of the object it's applied to -->
    //   <filter id="strokeGlow" y="-10" x="-10" width="100" height="100">

    //     <feOffset in="StrokePaint" dx="0" dy="0" result="centeredOffset"></feOffset>

    //     <feGaussianBlur in="centeredOffset" stdDeviation="2" result="blur1"></feGaussianBlur>
    //     <feGaussianBlur in="centeredOffset" stdDeviation="5" result="blur2"></feGaussianBlur>
    //     <feGaussianBlur in="centeredOffset" stdDeviation="15" result="blur3"></feGaussianBlur>

    //     <feMerge>
    //       <!-- this contains the offset blurred image -->
    //       <feMergeNode in="blur1"></feMergeNode>
    //       <feMergeNode in="blur2"></feMergeNode>
    //       <feMergeNode in="blur3"></feMergeNode>

    //       <!-- this contains the element that the filter is applied to -->
    //       <feMergeNode in="SourceGraphic"></feMergeNode>
    //     </feMerge>
    //   </filter>

    // </defs>`);

    const allLines = [
      ...generateAllLines(0, 0.5),
      ...generateAllLines(90, 1),
      ...generateAllLines(180, 0.5),
      ...generateAllLines(-90, 1),
    ];

    allLines.forEach(({ start, segments, width, circleIsFill, rotation }) => {
      let { x, y } = start;
      const builder = new Builder();
      const path = builder.moveTo(x, y);

      segments.forEach((segment) => {
        path.lineToRel(segment.x, segment.y);
        x += segment.x;
        y += segment.y;
      });

      const svgLine = draw.path(path.end()).fill("none").stroke("#FF9425");
      svgLine.attr({
        "stroke-width": width,
        "stroke-dasharray": svgLine.length(),
        "stroke-dashoffset": svgLine.length(),
      });

      svgLine.rotate(rotation, window.innerWidth / 2, window.innerHeight / 2);

      const drawAnimDuration = getRndInteger(6000, 10000);
      svgLine.timeline(timeline);
      svgLine
        .animate({
          ease: ">",
          duration: drawAnimDuration,
          when: "absolute",
          delay: 1500,
        } as any)
        .attr({
          "stroke-dashoffset": 0,
        });

      // setTimeout(() => {
      //   svgLine.attr({
      //     filter: 'url("#strokeGlow")',
      //   });
      // }, 5000);

      // TODO: center non fill circle with segments depending last direction
      // const lastDirection = segments[segments.length -1].direction;
      // console.log(lastDirection);
      // const circleSize = width * 4 + 5;
      // const circle = draw
      //   .circle(circleIsFill ? 0 : circleSize)
      //   .center(x, circleIsFill ? y : y - circleSize / 2)
      //   .rotate(rotation, window.innerWidth / 2, window.innerHeight / 2)
      //   .fill(circleIsFill ? ORANGE : "none")
      //   .stroke(circleIsFill ? "none" : ORANGE)
      //   .attr({
      //     "stroke-width": width,
      //     ...(!circleIsFill
      //       ? {
      //           "stroke-dasharray": 50,
      //           "stroke-dashoffset": 50,
      //         }
      //       : {}),
      //   });

      // circle
      //   .animate({
      //     ease: "<",
      //     duration: 500,
      //     when: "now",
      //     delay: 1300 + drawAnimDuration,
      //   } as any)
      //   .attr({
      //     ...(circleIsFill
      //       ? {
      //           r: circleSize / 2,
      //         }
      //       : {
      //           "stroke-dashoffset": 0,
      //         }),
      //   });
    });

    draw.svg(cpu.svg);
    const cpuSvg = SVG("#cpu");
    cpuSvg.move(
      window.innerWidth / 2 - cpu.width / 2,
      window.innerHeight / 2 - cpu.height / 2
    );

    const cpuPolygon = SVG("#path-1");

    cpuPolygon.filterWith((add) => {
      add
        .attr({
          x: "-14.2%",
          y: "-13.1%",
          width: "128.4%",
          height: "128.4%",
          filterUnits: "objectBoundingBox",
        })
        .morphology("dilate", 1.5)
        .in("SourceAlpha")
        .result("shadowSpreadOuter1")
        .offset(0, 2)
        .in("shadowSpreadOuter1");
      const gaussianBlurEffect = add
        .gaussianBlur(0, 0)
        .in("shadowSpreadOuter1")
        .result("shadowBlurOuter1");

      gaussianBlurEffect.timeline(timeline);

      gaussianBlurEffect
        .animate({
          ease: "<",
          duration: 1000,
          when: "absolute",
          // delay: 1000,
        } as any)
        .attr({
          stdDeviation: "6.5",
        });

      add
        .colorMatrix("matrix", "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0")
        .in("shadowBlurOuter1");
    });

    const cpuBorders = [
      SVG("#cpu #right"),
      SVG("#cpu #top"),
      SVG("#cpu #left"),
      SVG("#cpu #bottom"),
    ];

    const displacementMap = {
      right: {
        x: -20,
        y: 0,
      },
      left: {
        x: 20,
        y: 0,
      },
      top: {
        x: 0,
        y: 20,
      },
      bottom: {
        x: 0,
        y: -20,
      },
    };

    cpuBorders.forEach((border) => {
      const id = border.id() as keyof typeof displacementMap;
      const { translateX, translateY } = border.transform();
      border.transform({
        translateX: translateX! + displacementMap[id].x,
        translateY: translateY! + displacementMap[id].y,
      });

      border
        .animate({
          duration: 1000,
          delay: 1000,
          ease: "<",
          when: "absolute",
        } as any)
        .transform({
          translateX: translateX!,
          translateY: translateY!,
        });
    });
  }, []);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></div>
  );
}

export default App;

// const nestedSVGWidth = 1319;
// const nestedSVGHeight = 1289;

//     const backgroundOrange = draw.rect().size("100%", "100%").fill("#FF9425");
//     const radialGradient = draw.svg(`<defs>
//     <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50.376939%" id="radialGradient-1">
//     <stop stop-color="#D70303" stop-opacity="0" offset="0%"></stop>
//     <stop stop-color="#FAFB00" stop-opacity="0" offset="42.6916174%"></stop>
//     <stop stop-color="#FAFB00" offset="57.5459248%"></stop>
//     <stop stop-color="#FAFB00" offset="66.4511191%"></stop>
//     <stop stop-color="#FAFB00" stop-opacity="0" offset="100%"></stop>
// </radialGradient>
// </defs>`);
//     const wave = draw
//       .circle(200)
//       .fill("url(#radialGradient-1)")
//       .attr({
//         id: "wave",
//       })
//       .center(window.innerWidth / 2, window.innerHeight / 2);
// const wave2 = draw
//   .circle(200)
//   .fill("url(#radialGradient-1)")
//   .attr({
//     id: "wave2",
//   })
//   .center(window.innerWidth / 2, window.innerHeight / 2);
// draw.svg(`
// <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50.376939%" id="radialGradient-2">
//   <stop stop-color="#3A4A66" offset="0%"></stop>
//   <stop stop-color="#293448" offset="100%"></stop>
// </radialGradient>
// `);

// const inside = draw.nested();
// // inside.svg(image);
// const x = window.innerWidth / 2 - nestedSVGWidth / 2;
// const y = window.innerHeight / 2 - nestedSVGHeight / 2;
// inside.move(x, y);

// const combinedShape = SVG("#Combined-Shape");
// combinedShape.fill("black");
// combinedShape.center(window.innerWidth / 2, window.innerHeight / 2);

// const mask = draw
//   .mask()
//   .add(draw.rect().size("100%", "100%").fill("white"))
//   .add(combinedShape);
// background.maskWith(mask);

// wave.scale(30);
