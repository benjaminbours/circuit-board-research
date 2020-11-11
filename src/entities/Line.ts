import { Direction, Coordinates, Segment } from "../types";
import { getRndInteger } from "../utils";
import Builder from "@rob10e/svg-path-js";

export class Line {
  constructor(private startPoint: Coordinates) {}

  public generatePath() {
    let { x, y } = this.startPoint;
    let lengthCount = getRndInteger(100, 800);
    const builder = new Builder();
    const path = builder.moveTo(x, y);
    const minLengthCount = 50;
    const segments: Segment[] = [];

    while (lengthCount > minLengthCount) {
      const segmentLength = getRndInteger(25, 200);
      const previousSegment = segments[segments.length - 1];

      const segmentDirection = this.generateSegmentDirection(previousSegment);
      const segment = this.applyDirection(segmentLength, segmentDirection);

      segments.push({
        ...segment,
        // direction: segmentDirection,
        // distanceFromEndPoint,
      });

      path.lineToRel(segment.x, segment.y);
      x += segment.x;
      y += segment.y;

      lengthCount -= segmentLength;
    }

    return path.end();
  }

  private applyDirection(segmentLength: number, direction: Direction): Segment {
    let coordinates: Coordinates;
    switch (direction) {
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
    return {
      ...coordinates,
      direction,
    };
  }

  private generateSegmentDirection(
    previousSegment: Segment | undefined
  ): Direction {
    if (!previousSegment) {
      // if no previous segment return of the direction randomly
      return getRndInteger(0, 7);
    }

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
}
