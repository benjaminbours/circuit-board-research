export interface Coordinates {
  x: number;
  y: number;
}

export interface Segment extends Coordinates {
  direction: Direction;
  // distanceFromEndPoint: number | undefined;
}

export enum Direction {
  TOP,
  TOP_LEFT,
  TOP_RIGHT,
  RIGHT,
  LEFT,
  BOTTOM,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
}
