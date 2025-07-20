import React from 'react';
import './App.css';
import {TrainStrengthToPrepare} from "./components/TrainStrengthToPrepare";
import {JuniorWorkout} from "./components/JuniorWorkout";
import {MiddleWorkout} from "./components/MiddleWorkout";
import {SeniorWorkout} from "./components/SeniorWorkout";
import {OtherWorkout} from "./components/OtherWorkout";
import {Wheel} from "./components/Wheel";
import {VideoBox} from "./components/VideoBox/VideoBox";

function App() {
  return (
    <div className="App">

      <VideoBox path="/bg_1_cut.mp4" label="bg_1_cut" />
      <VideoBox path="/cover_video.mp4" label="cover_video" />

      <TrainStrengthToPrepare/>
      <JuniorWorkout/>
      <MiddleWorkout/>
      <SeniorWorkout/>
      <OtherWorkout/>
      <Wheel />
    </div>
  );
}

export default App;
