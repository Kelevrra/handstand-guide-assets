import {Box, Title} from "@mantine/core";
import React from "react";
import {VideoBox} from "./VideoBox/VideoBox";

export const SeniorWorkout = () => {
  return <Box mt={32} maw={500} ml="auto" mr="auto">
    <Title>Senior Workout</Title>
    <Box mt={32}>
      <VideoBox path="/Workout/Senior/1-animal-flow.mp4" label="1-animal-flow" />
      <VideoBox path="/Workout/Senior/2-pusups.mp4" label="2-pusups" />
      <VideoBox path="/Workout/Senior/3-triceps.mp4" label="3-triceps" />
      <VideoBox path="/Workout/Senior/4-elevated-pike-pushups.mp4" label="4-elevated-pike-pushups" />
      <VideoBox path="/Workout/Senior/5-side-lounges.mp4" label="5-side-lounges" />
      <VideoBox path="/Workout/Senior/6-inversed-lounges-jump.mp4" label="6-inversed-lounges-jump" />
      <VideoBox path="/Workout/Senior/7-pistol-squats.mp4" label="7-pistol-squats" />
      <VideoBox path="/Workout/Senior/8-abs-kisks.mp4" label="8-abs-kisks" />
      <VideoBox path="/Workout/Senior/9-handstand-arms-kicks.mp4" label="9-handstand-arms-kicks" />
      <VideoBox path="/Workout/Senior/10-handstand.mp4" label="10-handstand" />
    </Box>
  </Box>
} 