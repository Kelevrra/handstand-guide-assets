import {Box, Title} from "@mantine/core";
import React from "react";
import {VideoBox} from "./VideoBox/VideoBox";

export const TrainStrengthOther = () => {
  return <Box mt={32} maw={500} ml="auto" mr="auto">
    <Title order={2}>Train Strength: Other</Title>
    <Box mt={32}>
      <VideoBox path="/TrainStrengthToPrepare/Other/low-crow.mp4" label="low-crow" />
      <VideoBox path="/TrainStrengthToPrepare/Other/crow.mp4" label="crow" />
      <VideoBox path="/TrainStrengthToPrepare/Other/right-crow.mp4" label="right-crow" />
      <VideoBox path="/TrainStrengthToPrepare/Other/left-crow.mp4" label="left-crow" />
      <VideoBox path="/TrainStrengthToPrepare/Other/crow-switch.mp4" label="crow-switch" />
    </Box>
  </Box>
} 