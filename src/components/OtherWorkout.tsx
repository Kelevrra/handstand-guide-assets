import {Box, Title} from "@mantine/core";
import React from "react";
import {VideoBox} from "./VideoBox/VideoBox";

export const OtherWorkout = () => {
  return <Box mt={32} maw={500} ml="auto" mr="auto">
    <Title>Other Workout</Title>
    <Box mt={32}>
      <VideoBox path="/Other/wall_balance.mp4" label="wall_balance" />
      <VideoBox path="/Other/wall_balance_front.mp4" label="wall_balance_front" />
      <VideoBox path="/Other/stand_to_position.mp4" label="stand_to_position" />
      <VideoBox path="/Other/handstand_variant_1.mp4" label="handstand_variant_1" />
      <VideoBox path="/Other/handstand_variant_2.mp4" label="handstand_variant_2" />
      <VideoBox path="/Other/handstand_variant_3.mp4" label="handstand_variant_3" />
      <VideoBox path="/Other/balance_wrists.mp4" label="balance_wrists" />
      <VideoBox path="/Other/balance_elbow.mp4" label="balance_elbow" />
    </Box>
  </Box>
} 