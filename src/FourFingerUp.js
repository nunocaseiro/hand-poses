import {Finger,FingerCurl,FingerDirection,GestureDescription} from 'fingerpose';

export const fourFinger = new GestureDescription('4');

fourFinger.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
//fourFinger.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.5);
//fourFinger.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

fourFinger.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
//fourFinger.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
//fourFinger.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

fourFinger.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
//fourFinger.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
//fourFinger.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);


fourFinger.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
//fourFinger.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.5);
// closedHand.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
// closedHand.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  
//fourFinger.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
fourFinger.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1);
//fourFinger.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.75);
//fourFinger.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.75);

