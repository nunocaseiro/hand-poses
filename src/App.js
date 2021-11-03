import React, { useRef, useState, useEffect } from "react";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";
import mqtt from "mqtt";


import * as fp from "fingerpose";
import { thumbsup } from "./ThumbsUp";
import { spiderman } from "./SpiderMan";
import { closedHand } from "./ZeroHand";
import { indexFingerUp } from "./IndexFingerUp";
import { threeFingerAlt } from "./ThreeFingerUpAlt";
import { twoFinger } from "./TwoFinger";
import { threeFinger } from "./ThreeFingerUp";
import { thumbsdown } from "./ThumbsDown";
import { fourFinger} from "./FourFingerUp";
import { fiveFinger } from "./FiveFingerUp";
import victory from "./victory.png";
import thumbs_up from "./thumbs_up.png";
import { last, random } from "lodash";


function App() {
  
  var client;
  var connectStatus;
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up, victory: victory };
  
  var alarmLed = 1029;
  var alarmBuzz = 1030;
  var led1 = 1031;
  var led2 = 1032;
  var led3 = 1033;
  var led4 = 1034;
  var led5 = 1035;
  var count = 0;
  var actualGesture;
  var previousGesture;
  const numbers = ["1","2","3","4","5"]
  const devices = new Map()
  devices.set("1",led1)
  devices.set("2",led2)
  devices.set("3",led3)
  devices.set("4",led4)
  devices.set("5",led5)

 

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const publish = (context) => {
    if (client) {
      const { topic, payload } = context;
      client.publish(topic, payload, error => {
        if (error) {
          console.log('Publish error: ', error);
        }
      });
    }else{
      console.log("NO CLIENT")
    }
  }

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      ///////// NEW STUFF ADDED GESTURE HANDLING

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          //fp.Gestures.VictoryGesture,
          //fp.Gestures.ThumbsUpGesture,
          indexFingerUp,
         // thumbsup,
          thumbsdown,
          twoFinger,
          threeFinger,
          threeFingerAlt,
          fourFinger,
          fiveFinger, 
          closedHand,
          spiderman
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
           

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          console.log(gesture.gestures[maxConfidence].name);
          setEmoji(gesture.gestures[maxConfidence].name);
          
          handleGesture(gesture.gestures[maxConfidence].name)
        }
      }

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  const handleGesture = (name) => {
    
    if(actualGesture == undefined){
      
      actualGesture = name
      //faz algo
    }
    

    console.log("ACTUAL: " + actualGesture)
    console.log("Previous: " + previousGesture)

    if(actualGesture != name){
      count = 0
      actualGesture = name
      console.log("MAKE 0")
    }  
     
    
    count++;
    console.log(count)
    if(count > 20 && actualGesture != previousGesture){
      console.log(`ENTROU IF COUNT ${actualGesture}`)

      if(name == "thumbs_down" && numbers.includes(previousGesture)){
        publish({"topic": '/'+ devices.get(previousGesture), "payload": JSON.stringify({"to": "841", "from": "server", "action": "turn", "value": "off"})})
      }
     
      previousGesture = actualGesture
      actualGesture = name
      
      switch(actualGesture){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':  
          console.log(devices.get(actualGesture))
          publish({"topic": '/'+ devices.get(actualGesture), "payload": JSON.stringify({"to": "841", "from": "server", "action": "turn", "value": "on"})})
          //client.publish('/'+ devices.get(actualGesture), JSON.stringify({"to": "841", "from": "server", "action": "turn", "value": "on"}))
          break;
        case 'closed_hand':
          for(let i = 1; i <= 5; i++){
            publish({"topic": '/'+ devices.get(String(i)), "payload": JSON.stringify({"to": "841", "from": "server", "action": "turn", "value": "off"})})
          }
          break;
        case 'spiderman':
          for(let i = 1; i <= 5; i++){
            publish({"topic": '/'+ devices.get(String(i)), "payload": JSON.stringify({"to": "841", "from": "server", "action": "turn", "value": "on"})})
          }
          break;
      }

      //faz alguma coisa
    

    //se name for [1,2,3,4,5] guarda
  //  if (name.in(numbers)){
  //    previousGesture = name
  //  }

   //desliga
  }

    //se name for thumbs dows e o nome anterior for ou 1 2 3 4 5
      //desliga esse numero
    
  }

useEffect(()=>{mqttConnect()},[])

  useEffect(()=>{runHandpose()},[]);
  
  const mqttConnect = () => {
    connectStatus = 'Connecting';
    const mqttOption = {
      username: "smarthome",
      password: "smarthome",
      clientId: "smarthome"+ random(false)
    }

    client = mqtt.connect('ws://161.35.8.148:8083/ws', mqttOption)
  };
  

  useEffect(() => {
    
    if (client) {
      console.log(client)
      client.on('connect', () => {
        console.log('connected')
        connectStatus = 'Connected';
        
     
      });
      client.on('error', (err) => {
        console.error('Connection error: ', err);
        client.end();
      });
      client.on('reconnect', () => {
        connectStatus = 'Reconnecting';
      });
  
    }
  }, [client]);

  const mqttDisconnect = () => {
    if (client) {
      client.end(() => {
        connectStatus = 'Connect';
      });
    }
  }

return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
        {/* NEW STUFF */}
        {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        ) : (
          ""
        )}
      </header>
    </div>
  );
        }
        

export default App;
