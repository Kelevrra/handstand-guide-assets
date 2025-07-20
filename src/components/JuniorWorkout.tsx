import {Box, Title} from "@mantine/core";
import React from "react";
import {VideoBox} from "./VideoBox/VideoBox";

export const JuniorWorkout = () => {
  return <Box mt={32} maw={500} ml="auto" mr="auto">
    <Title>Junior Workout</Title>
    <Box mt={32}>
      <VideoBox path="/Workout/Junior/1-laydown-from-legs.mp4" label="1-laydown-from-legs" />
      <VideoBox path="/Workout/Junior/2-pike-touches.mp4" label="2-pike-touches" />
      <VideoBox path="/Workout/Junior/3-plank-switches.mp4" label="3-plank-switches" />
      <VideoBox path="/Workout/Junior/4-squats.mp4" label="4-squats" />
      <VideoBox path="/Workout/Junior/5-inversed-lounges.mp4" label="5-inversed-lounges" />
      <VideoBox path="/Workout/Junior/6-inversed-plank.mp4" label="6-inversed-plank" />
      <VideoBox path="/Workout/Junior/6-inversed-plank-engle.mp4" label="6-inversed-plank-engle" />
      <VideoBox path="/Workout/Junior/7-in-and-outs.mp4" label="7-in-and-outs" />
      <VideoBox path="/Workout/Junior/8-russian-twists.mp4" label="8-russian-twists" />
      <VideoBox path="/Workout/Junior/9-pushups.mp4" label="9-pushups" />
      <VideoBox path="/Workout/Junior/10-plank.mp4" label="10-plank" />
    </Box>
  </Box>
} 