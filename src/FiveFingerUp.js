import {Finger,FingerCurl,FingerDirection,GestureDescription} from 'fingerpose';

export const fiveFinger = new GestureDescription('5');

fiveFinger.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
//fiveFinger.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.5);
//fiveFinger.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

fiveFinger.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
//fiveFinger.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
//fiveFinger.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

fiveFinger.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
//fiveFinger.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.5);
//fiveFinger.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);


fiveFinger.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
//fiveFinger.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.5);
// closedHand.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
// closedHand.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  
fiveFinger.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
//fiveFinger.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.75);
//fiveFinger.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.75);
