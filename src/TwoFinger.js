import {Finger,FingerCurl,FingerDirection,GestureDescription} from 'fingerpose';

export const twoFinger = new GestureDescription('2');

twoFinger.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
//twoFinger.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
//twoFinger.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

twoFinger.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
//twoFinger.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.75);
//twoFinger.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

for(let finger of [Finger.Ring, Finger.Pinky]) {
    twoFinger.addCurl(finger, FingerCurl.FullCurl, 0.8);
   // closedHand.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
   // closedHand.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  }

  twoFinger.addCurl(Finger.Thumb, FingerCurl.Full, 0.8);
  //twoFinger.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.5);
