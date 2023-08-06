"use client";
import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const StyledPlayer = styled(ReactPlayer)`
  margin: 0 auto;
`;

const VideoPlayer = ({ url }) => {
  return <ReactPlayer url={url} width="100%" height="auto" />;
};

export default VideoPlayer;
