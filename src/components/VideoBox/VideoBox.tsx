import React, {FC} from "react";
import {Box} from "@mantine/core";

export const VideoBox: FC<{ path: string; label: string }> = ({path, label}) => {
  return <Box mt={32} mb={32}>
    <Box fz={16}>{label}</Box>
    <video className="video"  muted playsInline>
      <source src={path} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  </Box>
}