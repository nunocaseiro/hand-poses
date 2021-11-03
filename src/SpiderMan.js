import {Finger,FingerCurl,FingerDirection,GestureDescription} from 'fingerpose';

export const spiderman = new GestureDescription('spiderman');

// Thumb 
spiderman.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
//spiderman.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.25);
//spiderman.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.25);

// Index
spiderman.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
//spiderman.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.8);

// Pinky
spiderman.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
//spiderman.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.8);

for(let finger of [Finger.Middle, Finger.Ring]){
    spiderman.addCurl(finger, FingerCurl.FullCurl, .75); 
    //spiderman.addDirection(finger, FingerDirection.VerticalDown, 0.8);
}