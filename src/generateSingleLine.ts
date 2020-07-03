import { Direction, Coordinates } from "./types";
import { getRndInteger } from "./utils";
import { generateSegmentDirection } from "./generateSegmentDirection";

export function generateSingleLine(start: Coordinates, lengthRatio: number) {
  const startingPoint = {
    x: window.innerWidth / 2 + start.x,
    y: window.innerHeight / 2 + start.y,
  };

  let lengthCount = startingPoint.y * lengthRatio;
  const segments = [];
  while (lengthCount > 50) {
    const segmentLength = getRndInteger(25, 200);
    const previousSegment = segments[segments.length - 1];

    let segmentDirection = generateSegmentDirection(previousSegment);

    const applyDirection = () => {
      let coordinates: Coordinates;
      switch (segmentDirection) {
        case Direction.TOP:
          coordinates = { x: 0, y: -segmentLength };
          break;
        case Direction.TOP_LEFT:
          coordinates = { x: -segmentLength, y: -segmentLength };
          break;
        case Direction.TOP_RIGHT:
          coordinates = { x: segmentLength, y: -segmentLength };
          break;
        case Direction.RIGHT:
          coordinates = { x: segmentLength, y: 0 };
          break;
        case Direction.LEFT:
          coordinates = { x: -segmentLength, y: 0 };
          break;
        case Direction.BOTTOM_LEFT:
          coordinates = { x: -segmentLength, y: segmentLength };
          break;
        case Direction.BOTTOM_RIGHT:
          coordinates = { x: segmentLength, y: segmentLength };
          break;
        case Direction.BOTTOM:
          coordinates = { x: 0, y: segmentLength };
          break;
      }
      return coordinates;
    };

    segments.push({
      ...applyDirection(),
      direction: segmentDirection,
    });

    lengthCount -= segmentLength;
  }
  console.log(segments);

  return {
    start: startingPoint,
    segments,
    width: getRndInteger(1, 3),
    circleIsFill: getRndInteger(0, 1) ? true : false,
  };
}
