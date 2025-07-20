import {Box, Title} from "@mantine/core";
import React from "react";
import {WallBack} from "./WallBack";
import {Pike} from "./Pike";
import {TrainStrengthOther} from "./TrainStrengthOther";
import {WallFront} from "./WallFront";

export const TrainStrengthToPrepare = () => {
  return <Box mt={32} maw={500} ml="auto" mr="auto">
    <Title>Train Strength</Title>

    <Pike/>
    <WallBack/>
    <WallFront />
    <TrainStrengthOther/>
  </Box>
}