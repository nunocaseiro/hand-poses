import {Finger,FingerCurl,FingerDirection,GestureDescription} from 'fingerpose';

export const indexFingerUp = new GestureDescription('1');

//thumb
//indexFingerUp.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
indexFingerUp.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
//indexFingerUp.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
//indexFingerUp.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)

// index:
indexFingerUp.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
indexFingerUp.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
indexFingerUp.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5);
indexFingerUp.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);

// middle:
indexFingerUp.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
// indexFingerUp.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.2);
// indexFingerUp.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
// indexFingerUp.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.2);

// ring:
indexFingerUp.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
// indexFingerUp.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
// indexFingerUp.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
// indexFingerUp.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
indexFingerUp.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
// indexFingerUp.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
// indexFingerUp.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
// indexFingerUp.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
//indexFingerUp.setWeight(Finger.Index, 2);



