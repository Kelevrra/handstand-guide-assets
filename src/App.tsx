import React from 'react';
import './App.css';
import {TrainStrengthToPrepare} from "./components/TrainStrengthToPrepare";
import {JuniorWorkout} from "./components/JuniorWorkout";
import {MiddleWorkout} from "./components/MiddleWorkout";
import {SeniorWorkout} from "./components/SeniorWorkout";
import {OtherWorkout} from "./components/OtherWorkout";
import {WallBack} from "./components/WallBack";
import {Pike} from "./components/Pike";
import {TrainStrengthOther} from "./components/TrainStrengthOther";

function App() {
  return (
    <div className="App">
      <TrainStrengthToPrepare/>

      <JuniorWorkout/>
      <MiddleWorkout/>
      <SeniorWorkout/>
      <OtherWorkout/>
    </div>
  );
}

export default App;
