import React, { useEffect } from "react";
import { image } from "./image";
import "./App.css";
import { SVG } from "@svgdotjs/svg.js";

const nestedSVGWidth = 1319;
const nestedSVGHeight = 1289;

function App() {
  useEffect(() => {
    const draw = SVG()
      .addTo(".App")
      .size(window.innerWidth, window.innerHeight)
      .viewbox(0, 0, window.innerWidth, window.innerHeight);

    const backgroundOrange = draw.rect().size("100%", "100%").fill("#FF9425");
    const radialGradient = draw.svg(`<defs>
    <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50.376939%" id="radialGradient-1">
    <stop stop-color="#D70303" stop-opacity="0" offset="0%"></stop>
    <stop stop-color="#FAFB00" stop-opacity="0" offset="42.6916174%"></stop>
    <stop stop-color="#FAFB00" offset="57.5459248%"></stop>
    <stop stop-color="#FAFB00" offset="66.4511191%"></stop>
    <stop stop-color="#FAFB00" stop-opacity="0" offset="100%"></stop>
</radialGradient>
</defs>`);
    const wave = draw
      .circle(200)
      .fill("url(#radialGradient-1)")
      .attr({
        id: "wave",
      })
      .center(window.innerWidth / 2, window.innerHeight / 2);
    // const wave2 = draw
    //   .circle(200)
    //   .fill("url(#radialGradient-1)")
    //   .attr({
    //     id: "wave2",
    //   })
    //   .center(window.innerWidth / 2, window.innerHeight / 2);
    draw.svg(`
    <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" r="50.376939%" id="radialGradient-2">
      <stop stop-color="#3A4A66" offset="0%"></stop>
      <stop stop-color="#293448" offset="100%"></stop>
    </radialGradient>
    `);
    const background = draw.rect().size("100%", "100%").fill(("url(#radialGradient-2)"));

    const inside = draw.nested();
    inside.svg(image);
    const x = window.innerWidth / 2 - nestedSVGWidth / 2;
    const y = window.innerHeight / 2 - nestedSVGHeight / 2;
    inside.move(x, y);

    const combinedShape = SVG("#Combined-Shape");
    combinedShape.fill("black");
    combinedShape.center(window.innerWidth / 2, window.innerHeight / 2);

    const mask = draw
      .mask()
      .add(draw.rect().size("100%", "100%").fill("white"))
      .add(combinedShape);
    background.maskWith(mask);

    // wave.scale(30);
  }, []);

  return (
    <div
      className="App"
      style={{
        // background: "#293448",
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
