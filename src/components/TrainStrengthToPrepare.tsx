import {Box, Flex, Title} from "@mantine/core";
import React from "react";
import {VideoBox} from "./VideoBox/VideoBox";

export const TrainStrengthToPrepare = () => {
  return <Box mt={32} maw={500} ml="auto" mr="auto">
    <Title>Train Strength</Title>
    <Box mt={32}>
      <Title order={2}>Other</Title>

      <VideoBox path="/TrainStrengthToPrepare/crow.mp4" label="crow" />
      <VideoBox path="/TrainStrengthToPrepare/low-crow.mp4" label="low-crow" />
      <VideoBox path="/TrainStrengthToPrepare/left-crow.mp4" label="left-crow" />
      <VideoBox path="/TrainStrengthToPrepare/right-crow.mp4" label="right-crow" />
      <VideoBox path="/TrainStrengthToPrepare/crow-switch.mp4" label="crow-switch" />
    </Box>
  </Box>
}