import { Direction, Coordinates } from "./types";
import { getRndInteger } from "./utils";
import { generateSegmentDirection } from "./generateSegmentDirection";

export function generateSingleLine() {
  // generate random point in the window height but out of the window width
  const startingPoint = {
    x: [0 - 10, window.innerWidth + 10][getRndInteger(0, 1)],
    y: getRndInteger(0, window.innerHeight),
  };

  const endPoint = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  let lengthCount = getRndInteger(100, 800);
  const minLengthCount = 50;
  const segments = [];
  while (lengthCount > minLengthCount) {
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

    const segment = applyDirection();

    // console.log("PREVIOUS SEGMENT", previousSegment);
    // console.log(difCoordinates);
    const previousDistanceFromEndPoint = (() => {
      if (!previousSegment) {
        return undefined;
      }
      const difCoordinates: Coordinates = {
        x: previousSegment.x - endPoint.x,
        y: previousSegment.y - endPoint.y,
      };
      return Math.sqrt(
        Math.pow(difCoordinates.x, 2) + Math.pow(difCoordinates.y, 2)
      );
    })();

    const distanceFromEndPoint = (() => {
      const difCoordinates: Coordinates = {
        x: segment.x - endPoint.x,
        y: segment.y - endPoint.y,
      };
      return Math.sqrt(
        Math.pow(difCoordinates.x, 2) + Math.pow(difCoordinates.y, 2)
      );
    })();

    console.log("previous", previousDistanceFromEndPoint);
    console.log("current", distanceFromEndPoint);

    segments.push({
      ...segment,
      direction: segmentDirection,
      // distanceFromEndPoint,
    });

    lengthCount -= segmentLength;
  }
  // console.log(segments);

  return {
    start: startingPoint,
    end: endPoint,
    segments,
    width: 1.5,
    circleIsFill: getRndInteger(0, 1) ? true : false,
  };
}
