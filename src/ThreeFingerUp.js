import {Finger,FingerCurl,FingerDirection,GestureDescription} from 'fingerpose';

export const threeFinger = new GestureDescription('3');

threeFinger.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
//threeFinger.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
//threeFinger.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

threeFinger.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
//threeFinger.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
//threeFinger.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

threeFinger.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
//threeFinger.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
//threeFinger.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);


threeFinger.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.75);
// closedHand.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
// closedHand.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  
threeFinger.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.75);
//threeFinger.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);

