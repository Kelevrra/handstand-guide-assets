import {Box, Title} from "@mantine/core";
import React from "react";
import {VideoBox} from "./VideoBox/VideoBox";

export const Pike = () => {
  return <Box mt={32} maw={500} ml="auto" mr="auto">
    <Title order={2}>Pike</Title>
    <Box mt={32}>
      <VideoBox path="/TrainStrengthToPrepare/Pike/pike_wall_hold.mp4" label="pike_wall_hold" />
      <VideoBox path="/TrainStrengthToPrepare/Pike/pike_switch_arms.mp4" label="pike_switch_arms" />
      <VideoBox path="/TrainStrengthToPrepare/Pike/pike_switch_legs.mp4" label="pike_switch_legs" />
      <VideoBox path="/TrainStrengthToPrepare/Pike/pike_on_box.mp4" label="pike_on_box" />
      <VideoBox path="/TrainStrengthToPrepare/Pike/pike_regular.mp4" label="pike_regular" />
    </Box>
  </Box>
} 