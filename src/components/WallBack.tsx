import {Box, Title} from "@mantine/core";
import React from "react";
import {VideoBox} from "./VideoBox/VideoBox";

export const WallBack = () => {
  return <Box mt={32} maw={500} ml="auto" mr="auto">
    <Title order={2}>Wall Back</Title>
    <Box mt={32}>
      <VideoBox path="/TrainStrengthToPrepare/WallBack/wall_kicks.mp4" label="wall_kicks" />
      <VideoBox path="/TrainStrengthToPrepare/WallBack/jumps_on_hands.mp4" label="jumps_on_hands" />
      <VideoBox path="/TrainStrengthToPrepare/WallBack/wall_handstands.mp4" label="wall_handstands" />
    </Box>
  </Box>
} 