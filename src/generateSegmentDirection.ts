import { Direction, Segment } from "./types";
import { getRndInteger } from "./utils";

export function generateSegmentDirection(
  previousSegment: Segment | undefined
): Direction {
  if (!previousSegment) {
    // if no previous segment return of the direction randomly
    return getRndInteger(0, 7);
  }

  // console.log(previousSegment.distanceFromEndPoint);

  // defines the directions in which the segment can go
  let options: Direction[];
  switch (previousSegment.direction) {
    case Direction.TOP:
      options = [Direction.TOP_LEFT, Direction.TOP_RIGHT];
      break;
    case Direction.TOP_LEFT:
      options = [Direction.TOP, Direction.LEFT];
      break;
    case Direction.TOP_RIGHT:
      options = [Direction.TOP, Direction.RIGHT];
      break;
    case Direction.RIGHT:
      options = [Direction.TOP_RIGHT, Direction.BOTTOM_RIGHT];
      break;
    case Direction.LEFT:
      options = [Direction.TOP_LEFT, Direction.BOTTOM_LEFT];
      break;
    case Direction.BOTTOM_LEFT:
      options = [Direction.LEFT, Direction.BOTTOM];
      break;
    case Direction.BOTTOM_RIGHT:
      options = [Direction.RIGHT, Direction.BOTTOM];
      break;
    case Direction.BOTTOM:
      options = [Direction.BOTTOM_RIGHT, Direction.BOTTOM_LEFT];
      break;
  }
  // return randomly one of the possible direction
  return options[getRndInteger(0, options.length - 1)];
}
