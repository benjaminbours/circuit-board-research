import { generateSingleLine } from "./generateSingleLine";

export function generateAllLines(rotation: number, lengthRatio: number) {
  return [
    {
      ...generateSingleLine({ x: -66, y: -60 }, lengthRatio),
      rotation,
    },
    // {
    //   ...generateSingleLine({ x: -53, y: -60 }, lengthRatio),
    //   rotation,
    // },
    // {
    //   ...generateSingleLine({ x: -42, y: -60 }, lengthRatio),
    //   rotation,
    // },
    // {
    //   ...generateSingleLine({ x: -30, y: -60 }, lengthRatio),
    //   rotation,
    // },
    // {
    //   ...generateSingleLine({ x: -18, y: -60 }, lengthRatio),
    //   rotation,
    // },
    // {
    //   ...generateSingleLine({ x: -6, y: -60 }, lengthRatio),
    //   rotation,
    // },
    // {
    //   ...generateSingleLine({ x: 6, y: -60 }, lengthRatio),
    //   rotation,
    // },
    // {
    //   ...generateSingleLine({ x: 18, y: -60 }, lengthRatio),
    //   rotation,
    // },
    // {
    //   ...generateSingleLine({ x: 30, y: -60 }, lengthRatio),
    //   rotation,
    // },
    // {
    //   ...generateSingleLine({ x: 42, y: -60 }, lengthRatio),
    //   rotation,
    // },
    // {
    //   ...generateSingleLine({ x: 54, y: -60 }, lengthRatio),
    //   rotation,
    // },
    // {
    //   ...generateSingleLine({ x: 66, y: -60 }, lengthRatio),
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + -66,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 1,
    //     segments: [
    //       { x: 0, y: -75 },
    //       { x: -100, y: -100 },
    //       { x: 0, y: -50 },
    //     ],
    //   // segments,
    //   circleIsFill: false,
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + -53,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 2,
    //   segments: [
    //     { x: 0, y: -100 },
    //     { x: -80, y: -80 },
    //     { x: 0, y: -80 },
    //   ],
    //   circleIsFill: false,
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + -42,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 1,
    //   segments: [
    //     { x: 0, y: -100 },
    //     { x: 100, y: -100 },
    //     { x: 0, y: -80 },
    //   ],
    //   circleIsFill: false,
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + -30,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 3,
    //   segments: [{ x: 0, y: -400 }],
    //   circleIsFill: true,
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + -18,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 2,
    //   segments: [
    //     { x: 0, y: -200 },
    //     { x: -100, y: -100 },
    //   ],
    //   circleIsFill: true,
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + -6,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 2,
    //   segments: [{ x: 0, y: -250 }],
    //   circleIsFill: true,
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + 6,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 1,
    //   segments: [
    //     { x: 0, y: -100 },
    //     { x: 150, y: -150 },
    //     { x: 100, y: 0 },
    //   ],
    //   circleIsFill: true,
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + 18,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 1,
    //   segments: [
    //     { x: 0, y: -105 },
    //     { x: -80, y: -80 },
    //     { x: -40, y: 0 },
    //   ],
    //   circleIsFill: true,
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + 18,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 1,
    //   segments: [
    //     { x: 0, y: -105 },
    //     { x: -80, y: -80 },
    //     { x: -40, y: 0 },
    //   ],
    //   circleIsFill: true,
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + 30,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 2,
    //   segments: [
    //     { x: 0, y: -80 },
    //     { x: 60, y: -60 },
    //     { x: 0, y: -150 },
    //     { x: 60, y: -60 },
    //   ],
    //   circleIsFill: true,
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + 42,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 2,
    //   segments: [
    //     { x: 0, y: -80 },
    //     { x: 60, y: -60 },
    //     { x: 0, y: -120 },
    //     { x: 60, y: -60 },
    //   ],
    //   circleIsFill: true,
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + 54,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 2,
    //   segments: [
    //     { x: 0, y: -80 },
    //     { x: 60, y: -60 },
    //     { x: 0, y: -150 },
    //     { x: -80, y: -80 },
    //   ],
    //   circleIsFill: true,
    //   rotation,
    // },
    // {
    //   start: {
    //     x: window.innerWidth / 2 + 66,
    //     y: window.innerHeight / 2 + -60,
    //   },
    //   width: 2,
    //   segments: [
    //     { x: 0, y: -80 },
    //     { x: 60, y: -60 },
    //     { x: 0, y: -60 },
    //     { x: 100, y: -100 },
    //     { x: 100, y: 0 },
    //   ],
    //   circleIsFill: true,
    //   rotation,
    // },
  ];
}
