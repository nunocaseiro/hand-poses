import {Finger,FingerCurl,FingerDirection,GestureDescription} from 'fingerpose';

export const closedHand = new GestureDescription('closed_hand');

//closedHand.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);
//closedHand.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.8);
//closedHand.addCurl(Finger.Thumb, FingerCurl.FullCurl, 0.8);
//closedHand.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.5);
//closedHand.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.5);
// closedHand.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.4);
// closedHand.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.7);


for(let finger of [ Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    closedHand.addCurl(finger, FingerCurl.HalfCurl, 0.8);
    //closedHand.addDirection(finger, FingerDirection.VerticalDown, 0.8);
   // closedHand.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
   // closedHand.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  }


  //closedHand.setWeight(Finger.Thumb, 2);