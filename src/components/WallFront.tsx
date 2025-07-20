import {Box, Title} from "@mantine/core";
import React from "react";
import {VideoBox} from "./VideoBox/VideoBox";

export const WallFront = () => {
  return <Box mt={32} maw={500} ml="auto" mr="auto">
    <Title order={2}>Wall Front</Title>
    <Box mt={32}>
      <VideoBox path="/TrainStrengthToPrepare/WallFront/wall_jump.mp4" label="wall_jump"/>
      <VideoBox path="/TrainStrengthToPrepare/WallFront/scorpion_jump.mp4" label="scorpion_jump"/>
      <VideoBox path="/TrainStrengthToPrepare/WallFront/one_leg_jump.mp4" label="one_leg_jump"/>
      <VideoBox path="/TrainStrengthToPrepare/WallFront/jump_on_second_floor.mp4" label="jump_on_second_floor"/>
    </Box>
  </Box>
}