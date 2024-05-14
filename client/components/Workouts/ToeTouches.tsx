import * as React from 'react';
import { WrapperStyles } from './WorkoutLayout';
import styled from 'styled-components';

const Div = styled.div`
  .shapes > * {
    opacity: 0;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
  }
  @keyframes toe-touches-1 {
    0% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  #toe-touches-1 {
    animation-name: toe-touches-1;
  }

  @keyframes toe-touches-2 {
    0% {
      opacity: 0;
    }
    50%,
    100% {
      opacity: 1;
    }
  }

  #toe-touches-2 {
    animation-name: toe-touches-2;
  }
`;
export const ToeTouches = ({ isPaused }) => (
  <WrapperStyles isPaused={isPaused}>
    <Div className="illo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 421.6 492.7">
        <g className="shapes">
          <g id="toe-touches-2">
            <path
              fill="var(--shirt)"
              d="M212 334a17 17 0 0 1 0 3c-3 11 0 16 10 19a33 33 0 0 1 21 15c2 3 5 4 9 3s9-1 13 1c2 2 3 0 5-1 4-3 9-4 14-1 3 2 6 0 10 1l-7 24c-5 9-4 19-3 30a28 28 0 0 0 9 18c9 8 15 19 21 30a19 19 0 0 0 11 10c2 0 5 0 7 3-8 1-15 3-22 1a31 31 0 0 0-13 0c-1 1-3 1-3 3h-16c-1-4-5-4-7-4-7-1-14-2-21-1-16 1-33 2-50-2-9-2-17-7-26-10l-9-4a39 39 0 0 1-13-9c-8-9-19-14-28-20-7-5-14-12-15-22a26 26 0 0 1 2-13c4-7 9-13 11-20 12-9 16-22 22-34 1-3 1-6 4-9 3-2 7-4 7-9-1-2 2-4 5-3 5 2 10 1 16 1 5 0 9 1 13 5l4 1c0 3 3 4 5 5 1 0 2 2 2 0 2-5 9-6 12-11Z"
            />
            <path
              fill="var(--pants)"
              d="M308 321a6 6 0 0 0 4 6c20 6 35 18 48 32 7 7 15 8 24 10 6 3 10 8 15 12 5 7 5 13 2 20l-7 12c-3 9-4 18-4 27-1 13-3 25-14 35a53 53 0 0 1-44 14c-2-3-5-3-7-3a19 19 0 0 1-11-10c-6-11-12-22-21-30a28 28 0 0 1-9-18c-1-11-2-21 2-30 4-8 5-16 7-24a19 19 0 0 0 4-11c1-11 5-21 7-32a74 74 0 0 0 2-9l2-1Z"
            />
            <path
              fill="var(--hair)"
              d="M104 289c-5 0-15 9-16 14 0 3 1 5 4 5 4 0 5 2 5 5-1 5 1 9 5 11l13 8c3 2 3 4 2 5-1 2-2 4-5 3a90 90 0 0 0-10-5c-7-2-14 0-16 6s3 12 9 15c14 5 17 8 16 24-7 2-13-1-20-1-15-1-29-7-42-15-10-6-15-22-8-32 7-12 14-23 24-32 8-7 17-14 22-23 3-7 10-6 14 1a28 28 0 0 1 3 11ZM401 74c-3-4-2-8-1-12 2-8-2-13-9-16-6-1-12-1-17 3l-5 3c-6 0-5 4-4 7l1 4c1 2 2 4 0 5a4 4 0 0 1-6-3l-3-6-2-2v3c1 4 2 8 0 12-3 1-3-1-3-3-4-11-11-21-20-29a39 39 0 0 0-13-8 71 71 0 0 1-14-8c-3-1-5-3-4-6s3-4 5-4c2-1 4-1 3-4-2-4 0-8 5-8h20l10 1c8 1 15 4 23 7 17 7 34 15 52 21 2 0 2 1 2 4 0 13-6 23-16 31a5 5 0 0 0-1 4c0 2 0 4-3 4Z"
            />
            <path
              fill="var(--flesh)"
              d="M400 62c2-8-2-13-9-16-6-1-12-1-17 3l-5 3c-6 0-5 4-4 7l1 4c1 2 2 4 0 5a4 4 0 0 1-6-3l-3-6-2-2v3c1 4 2 8 0 12 5 21 2 40-4 60l-12 40c-5 21-11 41-21 60-3 5-6 11-5 18 2 8 1 16 0 24l-5 47a6 6 0 0 0 4 6c20 6 35 18 48 32 7 7 15 8 24 10a179 179 0 0 0-6-52l-13-47c-3-11-3-23 2-33l8-18c2-3 4-6 4-9l3-4c8-20 7-41 9-61 1-16 2-32 5-47l5-24c-3-4-2-8-1-12Z"
            />
            <path
              fill="var(--flesh)"
              d="M180 309v1h-1l1-1c1 0 0 0 0 0ZM193 333h1v1h-1Z"
            />
            <path
              fill="var(--flesh)"
              d="M288 128c-4-1-5 3-7 6-2 2-2 5-6 7l3-15c2-6 5-12 6-19 2-4 1-8 0-13-1-6-4-7-9-7h-1c-3-2-4 0-4 2s-1 6-3 7c-3 2-3 5-3 8-1 11-2 23-7 34-3 7-6 16-13 21-3 1-3 4-3 6l-3 9c-2 5-5 9-6 14l-16 31-2 4-19 27c-3 5-5 11-5 18a32 32 0 0 1-4 16 126 126 0 0 1-8 13c-6 8-10 17-18 25 0-4-3-4-5-5s-3-2-3-5c1-3 0-5-4-5a63 63 0 0 0-12-1 9 9 0 0 1-8-4l-9-6-15-7c-5 0-15 9-16 14 0 3 1 5 4 5 4 0 5 2 5 5-1 5 1 9 5 11l13 8c3 2 3 4 2 5-1 2-2 4-5 3a90 90 0 0 0-10-5c-7-2-14 0-16 6s3 12 9 15c14 5 17 8 16 24l11 8c12-9 16-22 22-34 1-3 1-6 4-9 3-2 7-4 7-9-1-2 2-4 5-3 5 2 10 1 16 1 5 0 9 1 13 5l4 2c0 2 3 3 5 4l2 1c2-6 9-7 12-12l11-25c4-8 7-17 9-26l3-4c10-29 17-60 22-91 2-9 3-18 13-22 4-1 8-4 9-8 2-7 6-13 10-19 3-5 2-10-1-11Zm-95 205h1v1h-1Zm-13-24v1h-1l1-1Z"
            />
          </g>
          <g id="toe-touches-1">
            <path
              fill="var(--hair)"
              d="M0 441c2-5 2-9 2-14v-3c2-9 1-17 0-26-1-6 3-9 9-7a20 20 0 0 1 11 6c-4 6-3 13-3 19 0 4 4 6 7 4 4-3 6-2 8 2 2 2 5 4 8 3l18-3c3-1 4 0 5 3s0 4-3 5a44 44 0 0 0-7 2c-3 1-7 2-9 5s-3 7-1 11c3 5 9 7 14 5l10-3c8-2 17 3 20 11-13 10-26 22-44 25a89 89 0 0 0-9 3c-10 3-18-1-26-7-5-4-5-10-6-16s-1-12-4-17Z"
            />
            <path
              fill="var(--shirt)"
              d="M190 370c3 1 6 3 8 6 5 6 12 8 20 8a112 112 0 0 1 21 3c8 2 16-1 23-1 4-1 6-4 7-6 2-3 4-4 7-3 4 2 7 1 10 0a68 68 0 0 1-1 23 140 140 0 0 0-5 40c1 8 2 16 8 22 6 7 12 14 15 22 1 4 0 5-4 5-8 0-17 1-25-2-5-2-11-2-17-2a94 94 0 0 1-17 0l-25 2-47 3c-15 0-32 1-47-3-10-3-18-8-20-19v-5c0-10 2-19 4-29 1-3 4-5 4-8l1-15c2-10 9-18 16-25 2-3 2-8 3-11 1-4 2-9 8-8l-1 3c-1 1-2 3-1 4a5 5 0 0 0 6 2c7-3 13-1 20-2a6 6 0 0 1 4 2 80 80 0 0 0 10 6c2 1 5 1 6-3l1-3c5 1 6-3 8-6Z"
            />
            <path
              fill="var(--flesh)"
              d="m402 73-3 12c-4 18-6 36-7 55-2 17-2 34-5 51-3 12-10 23-16 35-3 7-6 13-7 20-2 11 1 21 3 31l13 47c3 14 5 29 4 44l-5-2c-7 0-13-3-17-8l-9-7a88 88 0 0 0-35-23c-5-2-9-4-11-9 2-2 1-5 2-8 1-19 6-39 5-58 0-8 0-15 3-21l4-8c7-15 13-31 17-48l14-48c4-13 7-26 6-40l-2-17c2-5-1-10-1-15 3 2 4 5 5 8a5 5 0 0 0 6 2c3-1 1-3 1-4l-2-8 1-3c4 0 7-3 10-5 6-3 15-3 20 1 6 4 6 10 4 16a10 10 0 0 0 2 10Z"
            />
            <path
              fill="var(--pants)"
              d="M307 319c2 5 6 7 11 9 14 4 25 12 35 23l9 7c4 5 10 8 17 8l5 2c6 3 10 7 15 12 6 6 7 13 2 19-8 13-10 27-10 41-1 23-14 37-34 45-12 5-24 3-36 2-6-1-11-4-18-3-3-8-9-15-15-22-6-6-7-14-8-22a140 140 0 0 1 5-40 68 68 0 0 0 1-23c8-1 10-7 11-12 2-16 8-31 10-46Z"
            />
            <path
              fill="var(--flesh)"
              d="m110 411-1 15c0 3-3 5-4 8-2 10-4 19-4 29v5c-2-10-2-10-11-7-4-8-13-13-21-11l-10 3c-5 2-11 0-14-5-2-4-1-7 1-11s6-4 9-5a44 44 0 0 1 7-2c3-1 4-2 3-5s-2-4-5-3l-18 3c-3 1-6-1-8-3-2-4-4-5-8-2-3 2-7 0-7-4 0-6-1-13 3-19 5 0 9-2 14-3a39 39 0 0 1 15-3 10 10 0 0 0 7-3 86 86 0 0 1 8-6c4-3 7-4 9 1 1 3 2 2 4 1 5-2 10-2 14 2 1 2 3 1 5 1 7 0 8 1 8 8 0 4 1 8-1 12l1 5a2 2 0 0 0 2 2c2-1 1-2 2-3Z"
            />
            <path
              fill="var(--hair)"
              d="M402 73a10 10 0 0 1-2-10c2-6 2-12-4-16-5-4-14-4-20-1-3 2-6 5-10 5l-1 3 2 8c0 1 2 3-1 4a5 5 0 0 1-6-2c-1-3-2-6-5-8 0 5 3 10 1 15-3 1-3-1-4-3a73 73 0 0 0-18-28 44 44 0 0 0-15-10 73 73 0 0 1-14-7c-3-2-4-4-4-7 1-3 3-3 6-4 2 0 3 0 2-4-2-4 2-8 7-8 16-1 32 1 47 7 18 8 37 16 56 22 2 1 3 2 3 5-1 12-7 22-16 31a5 5 0 0 0-2 3 4 4 0 0 1-2 5Z"
            />
            <path
              fill="var(--flesh)"
              d="M237 155c-2 0-4 2-5 4s-2 6-5 7c-1-12 3-22 4-34 1-5-3-10-4-14-2-4-5-2-7-1l-1-1c-4-2-5 1-6 4v5c-4 4-3 8-3 12v16c-1 14-3 28-13 39-1 1-2 2-1 3 0 9-4 17-5 25a18 18 0 0 0-2 2c-5 19-12 38-22 55-6 12-10 24-8 37a18 18 0 0 1-2 10l-20 43-1 3c-1 1-2 3-1 4a5 5 0 0 0 6 2c7-3 13-1 20-2a6 6 0 0 1 4 2 80 80 0 0 0 10 6c2 1 5 1 6-3l1-3c5 1 6-3 8-6a5 5 0 0 1 0-3l9-33c3-11 7-23 7-36 2-2 1-4 1-6 4-14 4-28 6-41 2-14 1-29 3-43 1-5 2-8 6-11 4-2 7-5 8-9l11-27a5 5 0 0 0-4-6Z"
            />
          </g>
        </g>
      </svg>
    </Div>
  </WrapperStyles>
);
