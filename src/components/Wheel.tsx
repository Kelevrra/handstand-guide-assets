import {Box, Title} from "@mantine/core";
import React from "react";
import {VideoBox} from "./VideoBox/VideoBox";

export const Wheel = () => {
  return <Box mt={32} maw={500} ml="auto" mr="auto">
    <Title order={2}>Wheel</Title>
    <Box mt={32}>
      <VideoBox path="/Wheel/wheel.mp4" label="wheel" />
      <VideoBox path="/Wheel/wheel_1.mp4" label="wheel_1" />
      <VideoBox path="/Wheel/wheel_2.mp4" label="wheel_2" />
      <VideoBox path="/Wheel/wheel_3.mp4" label="wheel_3" />
      <VideoBox path="/Wheel/return_from_handstand.mp4" label="return_from_handstand" />
      <VideoBox path="/Wheel/handstand_wheel.mp4" label="handstand_wheel" />
    </Box>
  </Box>
} 