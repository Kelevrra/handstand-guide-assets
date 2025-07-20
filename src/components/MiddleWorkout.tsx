import {Box, Title} from "@mantine/core";
import React from "react";
import {VideoBox} from "./VideoBox/VideoBox";

export const MiddleWorkout = () => {
  return <Box mt={32} maw={500} ml="auto" mr="auto">
    <Title>Middle Workout</Title>
    <Box mt={32}>
      <VideoBox path="/Workout/Middle/1-burpies.mp4" label="1-burpies" />
      <VideoBox path="/Workout/Middle/2-pike-pushups.mp4" label="2-pike-pushups" />
      <VideoBox path="/Workout/Middle/3-single-leg-pushups.mp4" label="3-single-leg-pushups" />
      <VideoBox path="/Workout/Middle/4-arms-puuls.mp4" label="4-arms-puuls" />
      <VideoBox path="/Workout/Middle/5-mountain-climber.mp4" label="5-mountain-climber" />
      <VideoBox path="/Workout/Middle/6-legs-raises.mp4" label="6-legs-raises" />
      <VideoBox path="/Workout/Middle/7-abs-rollings.mp4" label="7-abs-rollings" />
      <VideoBox path="/Workout/Middle/8-inversed-lounges-jump.mp4" label="8-inversed-lounges-jump" />
      <VideoBox path="/Workout/Middle/9-jumps.mp4" label="9-jumps" />
      <VideoBox path="/Workout/Middle/10-plank-pushup.mp4" label="10-plank-pushup" />
    </Box>
  </Box>
} 