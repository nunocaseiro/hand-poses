import {Finger,FingerCurl,FingerDirection,GestureDescription} from 'fingerpose';

export const threeFingerAlt = new GestureDescription('3');

threeFingerAlt.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
//threeFingerAlt.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
//threeFingerAlt.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

threeFingerAlt.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
//threeFingerAlt.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
//threeFingerAlt.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

threeFingerAlt.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
//threeFingerAlt.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
//threeFingerAlt.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);


threeFingerAlt.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
// closedHand.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
// closedHand.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  
threeFingerAlt.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.75);
//threeFingerAlt.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

