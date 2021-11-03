import {Finger,FingerCurl,FingerDirection,GestureDescription} from 'fingerpose';

export const thumbsup = new GestureDescription('thumbs_up');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
thumbsup.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsup.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
thumbsup.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
thumbsup.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);


// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsup.addCurl(finger, FingerCurl.FullCurl, 1.0);

 //thumbsup.addDirection(finger, FingerCurl.FullCurl, 1.0);
}

thumbsup.setWeight(Finger.Thumb, 2);



