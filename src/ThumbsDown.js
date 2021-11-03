import {Finger,FingerCurl,FingerDirection,GestureDescription} from 'fingerpose';

export const thumbsdown = new GestureDescription('thumbs_down');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
thumbsdown.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsdown.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
thumbsdown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.25);
thumbsdown.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 0.25);


// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsdown.addCurl(finger, FingerCurl.FullCurl, 1.0);

 //thumbsup.addDirection(finger, FingerCurl.FullCurl, 1.0);
}

thumbsdown.setWeight(Finger.Thumb, 2);



