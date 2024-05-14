import * as React from 'react';
import { WrapperStyles } from './WorkoutLayout';
import styled from 'styled-components';

const Div = styled.div`
  .shapes > * {
    opacity: 0;
    animation-duration: 7s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
  }
  @keyframes diagonal-lunge-1 {
    0%,
    12.5% {
      opacity: 1;
    }
    12.5%,
    50% {
      opacity: 0;
    }
    50%,
    62.5% {
      opacity: 1;
    }
    62.5%,
    100% {
      opacity: 0;
    }
  }
  #diagonal-lunge-1 {
    animation-name: diagonal-lunge-1;
  }

  @keyframes diagonal-lunge-2 {
    0%,
    12.5% {
      opacity: 0;
    }
    12.5%,
    25% {
      opacity: 1;
    }
    25%,
    37.5% {
      opacity: 0;
    }
    37.5%,
    50% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }
  #diagonal-lunge-2 {
    animation-name: diagonal-lunge-2;
  }
  @keyframes diagonal-lunge-3 {
    0%,
    25% {
      opacity: 0;
    }
    25%,
    37.5% {
      opacity: 1;
    }
    37.5%,
    100% {
      opacity: 0;
    }
  }
  #diagonal-lunge-3 {
    animation-name: diagonal-lunge-3;
  }
  @keyframes diagonal-lunge-4 {
    0%,
    62.5% {
      opacity: 0;
    }
    62.5%,
    75% {
      opacity: 1;
    }
    75%,
    87.5% {
      opacity: 0;
    }
    87.5%,
    100% {
      opacity: 1;
    }
  }
  #diagonal-lunge-4 {
    animation-name: diagonal-lunge-4;
  }
  @keyframes diagonal-lunge-5 {
    0%,
    75% {
      opacity: 0;
    }
    75%,
    87.5% {
      opacity: 1;
    }
    87.5%,
    100% {
      opacity: 0;
    }
  }
  #diagonal-lunge-5 {
    animation-name: diagonal-lunge-5;
  }
`;
export const DiagonalLunges = ({ isPaused }) => (
  <WrapperStyles isPaused={isPaused}>
    <Div className="illo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.9 605.1">
        <g className="shapes">
          <g id="diagonal-lunge-3">
            <path
              fill="var(--hair)"
              d="M50 565a66 66 0 0 0 3 15c1 6-1 11-6 15-6 6-14 8-22 9-1 0-3-1-3 1H8c-4-3-5-8-2-12 11-9 14-23 21-35 3 1 6 3 9 2 5-1 6 2 6 6 0 1-2 2 0 3s3 0 5-1c1-1 1-3 3-3ZM275 557c-2 0-2 2-2 3-2 5-5 8-11 7a44 44 0 0 1-8-1c-9-2-10-5-7-13l-1-5c-4-5-6-11-13-12 2-4 4-7 9-6l2-2c4-6 1-11-6-12-3 0-6 0-8-2 3-5 9-5 13-7 11-4 14-2 17 9a7 7 0 0 1 0 3c-1 13 7 23 15 32Z"
            />
            <path
              fill="var(--flesh)"
              d="M76 251c2-4-2-6-3-10-1-5-2-9-5-13-2-2-3-5-3-8-2-4-1-7 3-8 1 4 1 8 6 12l-2-13c-2-5 1-8 4-11a2 2 0 0 0 0-1c2-8 3-9 10-6a26 26 0 0 0 16 0l7-1c5-1 7 3 7 6 0 4 2 7 4 10l2 6v10l4-9c4 2 4 6 1 11l-6 12c-3 7 2 11 6 13 5 3 6 7 8 11-2 3-4 14-2 16 11 10 20 21 33 29h5c4-3 9-2 13-2 3 7 9 12 13 19 3 5 7 10 8 16a25 25 0 0 1-5 23c-4 4-10 5-15 2-7-5-14-9-19-15-3-5-5-10-10-13l-17-20c-7-10-15-20-24-28-2-2-5-3-7-1l-20 17c-13 10-21 23-33 34a9 9 0 0 0-3 1c-7 7-15 11-24 16-14 8-18 5-26-10-3-5-2-11-1-17l11-24c5 0 11-1 16 1 8 3 15 1 23-3l24-13a41 41 0 0 0 12-11c-8-2-12-8-16-13a7 7 0 0 1 2-10c1-1 3-2 3-5Z"
            />
            <path
              fill="var(--shirt)"
              d="M55 339c12-11 20-24 33-34l20-17c2-2 5-1 7 1 9 8 17 18 24 28l17 20c1 8 1 17 6 24 1 2 0 5 2 7a26 26 0 0 0 4 11c0 5 4 9 6 13l5 9c0 2 2 5-1 6-10-2-20-3-29-6-13-5-24-1-35 4-13 7-26 13-40 18-5 0-5-4-5-8 1-15-2-30-6-45l-8-31Z"
            />
            <path
              fill="var(--pants)"
              d="M74 423c14-5 27-11 40-18 11-5 22-9 35-4 9 3 19 4 29 6 2 21-5 39-23 51-2 2-3 3-3 6 2 14 5 27 4 41v6c-9-2-19-5-28-3-4 0-4-4-6-3a29 29 0 0 0-13 6c-3 2 1 5 1 8a15 15 0 0 1 0 2 30 30 0 0 1-5 3c-3 1-5 2-8 0s-3-5-2-8l2-12c3-12 0-23-5-33 5-4 12-4 18-5a8 8 0 0 0 5-5c2-5 2-9-1-13-10-14-23-28-39-22l-1-3Z"
            />
            <path
              fill="var(--flesh)"
              d="M75 426c16-6 29 8 39 22 3 4 3 8 1 13a8 8 0 0 1-5 4c-6 2-13 2-18 6-4-1-8 2-11 3s-3 3-2 5c5 15-1 28-8 40l-17 31c-3 5-3 10-4 15-2 0-2 2-3 3-2 1-3 2-5 1s0-2 0-3c0-4-1-7-6-6-3 1-6-1-9-2a9 9 0 0 1 2-5c9-11 10-23 10-36 1-12 1-23 6-34v-16c0-9 0-18 6-25 4-5 10-8 16-11l8-5ZM110 521a15 15 0 0 0 0-2c0-3-4-6-1-8a29 29 0 0 1 13-6c2-1 2 3 6 3 9-2 19 1 28 3 0 6 3 11 4 16 1 3 3 3 5 2 10-6 21-8 32-8s22-4 33-7c2 2 5 2 8 2 7 1 10 6 6 12l-2 2c-5-1-7 2-9 6-11 1-20 7-30 12a183 183 0 0 1-28 13l-8 4c-5 5-12 6-19 6-8 1-14-4-17-12-5-14-13-26-21-38Z"
            />
            <path
              fill="var(--shirt)"
              d="M76 251c0 3-2 4-3 5a7 7 0 0 0-2 10c4 5 8 11 16 13a41 41 0 0 1-12 11l-24 13c-8 4-15 6-23 3-5-2-11-1-16-1 5-8 4-17 8-25 3-6 16-14 23-14h3c8-6 19-7 26-14l4-1Z"
            />
            <path
              fill="var(--hair)"
              d="m126 215-4 9v-10l-2-6c-2-3-4-6-4-10 0-3-2-7-7-6l-7 1a26 26 0 0 1-16 0c-7-3-8-2-10 6a2 2 0 0 1 0 1c-3 3-6 6-4 11l2 13c-5-4-5-8-6-12v-20a10 10 0 0 0-1-8c-2-3-1-6 2-8 13-7 25-11 40-6 3 1 6 3 7 6l4 3c5 1 7 4 7 10-2 9 1 18-1 26Z"
            />
            <path
              fill="var(--shirt)"
              d="M184 305c-4 0-9-1-13 2h-5c-13-8-22-19-33-29-2-2 0-13 2-16 16 6 33 10 43 26 4 5 6 10 6 17Z"
            />
          </g>
          <g id="diagonal-lunge-1">
            <path
              d="M204 155c-2-1-2-3-1-4l14-40c3-8 9-11 16-14l31-11 9 11c2 1 1 5 4 5a70 70 0 0 0 23 0c7-1 11-6 13-13l37 17c7 3 9 10 11 15l11 31c2 4 3 8-2 10-5-3-9 0-12 3-5 4-12 7-18 9l-3-5-1 21c-1 16-3 31-3 47l2 44c1 6 0 7-5 7a19 19 0 0 0-4 0h-23l-69-5c-3 0-5-1-7 1a1 1 0 0 1-1 0l-1-9 7-53c2-16 0-33 1-49 0-6 2-11 1-18l-4 6c-8-5-17-4-26-6Z"
              fill="var(--shirt)"
            />
            <path
              d="M227 284c2-2 4-1 7-1l69 5h23l1 6c-2 12-4 24-3 37a205 205 0 0 0-2 30c0 3 0 5-3 5s-6 4-9 5c-11 0-21 0-31-6a4 4 0 0 0-3 0c-12 5-24 3-36 1-7 0-9-4-9-11-1-24-5-47-4-71Z"
              fill="var(--pants)"
            />
            <path
              fill="var(--flesh)"
              d="M240 366c12 2 24 4 36-1a4 4 0 0 1 3 0c10 6 20 6 31 6-2 10-4 19-4 29a90 90 0 0 0 0 17c3 18-2 34-7 51-4 15-8 29-8 44a14 14 0 0 1-1 6c-5-4-10-4-16 1v-17c4-13 3-27 2-40-1-11-2-23 0-34 1-7 3-14 2-21a193 193 0 0 1-4-27c-2 15-6 30-4 46 2 9 3 19 1 28-3 18-4 35 0 52 1 3 1 7-2 9-6-2-11-1-15 2 1-24-8-46-12-69-2-12-3-24-1-36 3-15 1-31-1-46ZM340 174c6-2 13-5 18-9 3-3 7-6 12-3 2 14-1 29 2 43 5 23-2 45-4 67-1 14-3 27-1 41 2 13-6 24-18 27l-9 2c-5-2-4-5-1-8s7-6 8-11c1-2 3-5 0-6-4-2-5 1-6 3a77 77 0 0 1-5 8 3 3 0 0 1-3 1 2 2 0 0 1-1-3c3-7 2-17 9-23s11-14 10-25l-1-37c-1-16 1-32-5-47-3-7-2-14-5-20ZM204 155c9 2 18 1 26 6l-2 9c-1 12-8 23-7 35a112 112 0 0 1-8 46c-4 10-6 22-2 32s6 21 6 31c0 2 1 5-2 5-2 1-3-1-4-2s-2-4-4-2c-2 1-1 3 0 5l4 8c1 2 1 4-1 5s-3 0-5-1a11 11 0 0 0-6-4l-4-6-3-8c-4-9-3-17 0-25 4-12 4-23 3-34-2-20 0-40 3-59l1-7c4-11 4-23 5-34ZM313 89c-2 7-6 12-13 13a70 70 0 0 1-23 0c-3 0-2-4-4-5l-9-11c7-5 8-15 2-23l-4-12c-1-2-1-5 2-6l3 6c0-9 0-16 4-23 2-4 3-7 7-5a34 34 0 0 0 21 0c3-1 8-1 8 3 1 6 6 11 6 18 0 1-1 3 1 4 3 0 2-3 3-4 3 3 4 12-1 16-4 4-5 9-7 14-2 6-2 11 4 15Z"
            />
            <path
              fill="var(--hair)"
              d="M254 517c4-3 9-4 15-2 0 4 0 8 5 4 6-5 11-5 16-1 6 8 10 16 9 25-1 13-18 19-28 12-1-1-2-2-4-1-17 8-26 1-23-18 1-7 3-14 10-19ZM317 44c-1 1 0 4-3 4-2-1-1-3-1-4 0-7-5-12-6-18 0-4-5-4-8-3a34 34 0 0 1-21 0c-4-2-5 1-7 5-4 7-4 14-4 23l-3-6c-2-10 2-21-2-32-1-2 2-4 4-6 10-6 21-9 33-6 4 1 7 4 10 6 16 10 7 25 8 37Z"
            />
          </g>
          <g id="diagonal-lunge-2">
            <path
              fill="var(--hair)"
              d="M34 567c4-2 4-7 7-9 8-7 14-16 20-24a10 10 0 0 1 3-3h6c2 0 5 1 5 3 1 4 4 5 7 6l1 3-5 24a5 5 0 0 1-2 4c-11 7-23 10-36 6l-6-3ZM154 44c-4-10-3-11 7-16l13-5h10c3 2 6 1 8 3 2 1 5 1 5 3 2 4 5 6 9 7 2 1 3 2 3 5-1 10 1 19-1 29-1 3-1 7-5 11 2-8 2-16-4-22v-2c0-9-3-11-11-9-7 2-13 2-19 0s-8 0-9 7v2c-5 3-4 7-3 12 0 2 2 5 0 8-2-1-2-4-3-5l-1-17v-2l1-6c1-1 2-2 0-3Z"
            />
            <path
              fill="var(--shirt)"
              d="M93 191c-2-2-3-4-2-7 8-13 11-28 16-43 3-12 12-16 23-19l24-6c3 3 0 7 3 11 8 9 28 11 39 4 5-3 7-8 12-10a163 163 0 0 1 20 8c11 4 16 12 19 23l11 45c2 5 1 7-4 8-1-4-4-3-6-2-7 2-15 3-21 7-4 1-3 4-3 7 0 13-4 25-7 38-1 2-2 5-1 7 4 14 1 27-4 40-1 4-1 8-5 10-18 0-36-2-53-9l-7-2c-11-4-22-1-33-5-2-2-1-5-1-8v-21c-1-10 1-20 3-30 2-11 1-22 1-33l-1-2-15-9a10 10 0 0 0-8-2Z"
            />
            <path
              fill="var(--pants)"
              d="M114 296c11 3 22 1 33 5l7 2c17 7 35 9 53 9-3 9-7 18-12 26a13 13 0 0 0-2 10 302 302 0 0 0 10 35 37 37 0 0 1-10 5c-3 1-5 2-3 6 1 4-1 5-4 6-4 0-9-1-13 1l-11 10a22 22 0 0 1-16 4l8-19c2-4 1-5-3-6a51 51 0 0 1-27-11v-3c4-12 0-22-3-33-3-16-8-31-7-47Z"
            />
            <path
              fill="var(--flesh)"
              d="M124 379a51 51 0 0 0 27 11c4 1 5 2 3 6l-8 19a70 70 0 0 0-10 31c-1 13-6 24-14 34-12 14-23 29-33 44-3 5-3 11-7 16-3-1-6-2-7-6 0-2-3-3-5-3h-6l2-5c12-8 14-22 18-35 5-16 9-31 18-46a9 9 0 0 1 1-1c7-8 8-18 10-28a66 66 0 0 1 6-21c3-5 4-11 5-16ZM208 121c-5 2-7 7-12 10-11 7-31 5-39-4-3-4 0-8-3-11 7-4 6-10 5-16 0-8-7-13-8-21 0-3-1-6 3-7 1 1 1 4 3 5 2-3 0-6 0-8-1-5-2-9 3-12v-2c1-7 3-9 9-7s12 2 19 0c8-2 11 0 11 9v2c6 6 6 14 4 22 4-4 4-8 5-11 3 0 4 2 3 4-1 7-2 14-8 18a2 2 0 0 0-2 2l-2 11c-2 7 1 12 9 16ZM227 210c6-4 14-5 21-8 2 0 5-1 6 3 3 12 1 25 4 37 6 20 3 40 1 60-2 12 0 24 2 36 2 10-4 21-14 25-3 1-7 1-10 3-2 1-5 0-7-2s1-4 2-6c4-3 7-7 9-13 0-2 1-4-2-5-2 0-3 1-4 3l-7 11c-4 1-5-1-4-5a43 43 0 0 0 3-13 10 10 0 0 1 4-7c13-10 12-23 11-37-1-13-4-25-2-38 1-1 0-2-1-3-6-13-9-27-12-41ZM173 401c4-2 9-1 13-1 3-1 5-2 4-6-2-4 0-5 3-6a37 37 0 0 0 10-5l6 32c1 5 5 8 8 13 10 14 14 30 17 47a47 47 0 0 0 13 23c1 1 3 2 3 5-1 1-2 3-4 3-6-2-8 2-10 6-6-12-15-23-23-33l-14-18c-5-6-9-13-10-20-2-14-7-28-16-40Z"
            />
            <path
              fill="var(--hair)"
              d="M236 512c2-4 4-8 10-6 2 0 3-2 4-3 3 0 6 2 7 4a66 66 0 0 1 5 10 86 86 0 0 0 11 23c2 3 3 5 2 8s-4 3-7 2c-13-1-26-3-33-17-1-2-2-4-1-6 2-5 2-10 2-15Z"
            />
            <path
              fill="var(--flesh)"
              d="M93 191a10 10 0 0 1 8 2l15 9c-2 10-7 20-11 29a36 36 0 0 0-2 11c0 11-6 21-11 31-6 12-9 24-2 37v8c-1 4-2 8-1 12 0 1 0 3-2 4s-3-1-4-3-2-4-4-2 0 3 0 5l3 7-1 4c-1 1-3 0-5-1-8-7-11-16-13-26a11 11 0 0 1 2-7 85 85 0 0 0 9-37c1-22 8-43 16-65 2-5 4-11 3-18Z"
            />
            <path
              fill="var(--pants)"
              d="M154 44c2 1 1 2 0 3v-3ZM153 53v2a2 2 0 0 1 0-2Z"
            />
          </g>
          <g id="diagonal-lunge-5">
            <path
              fill="var(--hair)"
              d="M484 557a66 66 0 0 1-3 15c-2 6 1 12 5 16 7 6 15 7 23 9 1 0 3-1 3 1h14c4-4 5-9 2-12-11-10-14-24-21-35l-9 2c-5-1-6 1-6 5 0 2 2 3 0 4s-3 0-5-1l-3-4ZM259 549c2 1 1 3 2 4 2 5 5 7 10 7a44 44 0 0 0 9-1c9-2 10-5 7-13l1-6c4-4 6-11 13-12-2-3-4-6-9-5l-2-2c-4-6-1-12 6-12 3 0 6 0 8-2-3-6-9-5-13-7-11-4-14-2-17 9a7 7 0 0 0 0 2c1 14-7 23-15 33Z"
            />
            <path
              fill="var(--flesh)"
              d="M458 244c-2-4 2-7 2-10 1-5 2-10 6-14 2-1 3-5 3-7 2-4 1-7-4-9-1 4-1 9-5 12l2-12c2-5-1-8-4-12-2-8-3-9-11-7a26 26 0 0 1-15 0l-7-1c-5 0-7 3-7 7s-2 7-4 10l-2 6v9l-4-8c-4 2-4 5-1 10 3 4 4 9 6 13 3 6-3 11-6 12-5 3-6 8-8 12 2 2 4 13 2 15-11 10-20 21-33 29l-5 1c-4-3-9-2-13-3-3 8-9 13-13 19-3 6-7 11-8 17a25 25 0 0 0 5 22c4 5 10 6 15 2 6-4 14-8 19-15 3-4 5-9 10-12l16-21 25-28c2-2 5-2 7 0l20 16c13 10 21 24 33 34a9 9 0 0 1 2 1c8 7 16 12 25 17 14 7 18 4 26-10 3-6 2-11 1-17-3-9-7-17-11-24-6 0-12-2-16 0-8 4-16 1-23-2l-24-14a41 41 0 0 1-12-11c8-1 12-8 16-13a7 7 0 0 0-2-10c-1-1-3-2-3-4Z"
            />
            <path
              fill="var(--shirt)"
              d="M479 331c-12-10-20-24-33-34l-20-16c-2-2-5-2-7 0l-25 28-16 21c-1 8-1 16-6 24-1 2 0 5-2 6a26 26 0 0 1-5 11c1 6-3 9-5 14l-5 9c-1 2-2 4 1 5 10-2 20-3 29-6 13-4 24-1 35 5 13 7 26 13 40 17 5 0 5-3 5-7-1-15 2-30 6-45l8-32Z"
            />
            <path
              fill="var(--pants)"
              d="M460 415c-14-4-27-10-40-17-11-6-22-9-35-5-9 3-19 4-29 6-2 22 5 39 23 52 2 1 3 3 2 5-1 14-4 28-4 42l1 5c9-1 19-4 28-3 3 1 3-3 6-3a29 29 0 0 1 13 6c3 2-1 5-1 8a16 16 0 0 0 0 2 31 31 0 0 0 5 3c2 1 5 2 8 0s3-5 2-8l-2-12c-3-12 0-22 5-33-5-3-12-3-18-5a8 8 0 0 1-5-5c-3-4-3-9 0-13 11-14 24-28 40-21l1-4Z"
            />
            <path
              fill="var(--flesh)"
              d="M459 419c-16-7-29 7-39 21-3 4-3 9-1 13a8 8 0 0 0 5 5c6 2 13 2 18 5 4-1 8 2 11 3s3 4 2 6c-5 15 1 27 8 40l17 31c3 5 3 10 4 14l3 4c2 1 3 2 5 1s0-2 0-4c0-4 1-6 6-5l9-2a9 9 0 0 0-2-6c-9-10-10-23-11-36 0-11 0-23-5-34-2-4 0-10 0-16 0-8 0-17-6-24-4-6-10-9-16-12l-8-4ZM424 513a16 16 0 0 1 0-2c0-3 4-6 1-8a29 29 0 0 0-13-6c-3 0-3 4-6 3-9-1-19 2-28 3 0 6-3 11-4 17-1 2-3 3-5 1-10-5-21-7-32-7s-22-5-33-7c-2 2-5 2-8 2-7 0-10 6-7 12l3 2c5-1 7 2 9 5 11 2 20 7 30 12a183 183 0 0 0 28 13l8 5c5 4 12 6 19 6 8 0 14-5 17-13 5-14 13-25 21-38Z"
            />
            <path
              fill="var(--shirt)"
              d="M458 244c0 2 2 3 3 4a7 7 0 0 1 2 10c-4 5-8 12-16 13a41 41 0 0 0 12 12l24 13c8 3 15 6 23 2 5-2 10 0 16 0-5-8-4-18-8-26-4-6-16-14-23-13h-3c-8-7-19-8-26-14l-4-1Z"
            />
            <path
              fill="var(--hair)"
              d="m408 208 4 8v-9l2-6c2-3 4-6 4-10s2-7 7-7l7 1a26 26 0 0 0 15 0c8-2 9-1 11 7 3 4 6 7 4 12l-2 12c4-3 5-8 5-12 1-6 2-13 0-20a10 10 0 0 1 2-7c1-4 1-7-3-8-12-8-25-12-39-7-3 1-6 3-8 7 0 2-2 2-3 2-5 2-7 5-7 10 2 9-1 18 1 27Z"
            />
            <path
              fill="var(--shirt)"
              d="M350 297c4 1 9 0 13 3l5-1c13-7 22-19 33-29 2-2 0-13-2-15-16 5-33 10-43 25-4 5-6 11-6 17Z"
            />
          </g>
          <g id="diagonal-lunge-4">
            <path
              fill="var(--hair)"
              d="M504 576c-4-2-4-7-7-9-9-7-14-16-20-24a10 10 0 0 0-4-3h-6c-2 0-4 1-5 3 0 4-3 5-6 6-1 1-2 2-1 3l5 24a5 5 0 0 0 2 4c11 7 23 10 36 6l6-3ZM384 53c3-10 3-11-7-16l-14-5h-10c-2 2-5 1-8 3-1 1-4 1-5 3-1 4-4 6-8 7-2 1-3 2-3 5 1 10-2 19 1 29 1 3 1 7 4 11-1-8-1-16 4-22l1-2c0-9 3-11 11-9 6 2 12 2 19 0 6-2 8 0 9 7v2c5 3 3 7 3 12-1 2-2 5 0 8 2-1 2-4 3-5l1-17c-1 0-2-1-1-2v-6c-2-1-2-2 0-3Z"
            />
            <path
              fill="var(--shirt)"
              d="M445 200c2-2 3-4 2-7-8-13-11-28-16-43-4-12-12-16-23-19l-25-6c-2 3 1 7-3 11-8 9-28 11-38 4-5-3-7-8-12-10a162 162 0 0 0-21 8c-10 4-15 12-18 23l-12 45c-1 5 0 7 5 8 1-4 4-3 6-2 7 2 15 3 21 7 3 1 3 4 3 7-1 13 3 25 7 38l1 7c-4 14-1 27 3 40 2 4 1 8 6 10 18 0 36-2 52-9l8-2c10-4 22-1 33-5l1-8v-21c1-10-1-20-3-30-2-11-2-22-2-33l2-2 15-9a10 10 0 0 1 8-2Z"
            />
            <path
              fill="var(--pants)"
              d="M424 305c-11 3-23 1-33 5l-8 2c-17 7-34 9-52 9 2 9 7 18 12 26a13 13 0 0 1 2 10 302 302 0 0 1-10 35 37 37 0 0 0 10 5c3 1 5 2 3 6s0 5 4 6c4 0 9-1 13 1l11 10a22 22 0 0 0 15 4c-1-7-5-13-7-19-2-4-1-5 3-6a51 51 0 0 0 26-11c1-1 2-2 1-3-5-12 0-22 2-33 4-16 9-31 8-47Z"
            />
            <path
              fill="var(--flesh)"
              d="M413 388a51 51 0 0 1-26 11c-4 1-5 2-3 6 2 6 6 12 7 19a70 70 0 0 1 10 31c1 13 7 24 15 34l33 44c3 5 3 11 7 16 3-1 6-2 6-6 1-2 3-3 5-3h6l-1-5c-13-8-14-22-18-35-5-16-9-32-18-46a9 9 0 0 0-1-1c-7-8-9-18-10-28a66 66 0 0 0-6-21c-3-5-4-11-6-16ZM330 130c5 2 7 7 12 10 10 7 30 5 38-4 4-4 1-8 3-11-7-4-5-10-5-16 1-8 8-13 8-21 1-3 2-6-2-7-1 1-1 4-3 5-2-3-1-6 0-8 0-5 2-9-3-12v-2c-1-7-3-9-9-7-7 2-13 2-19 0-8-2-11 0-11 9l-1 2c-5 6-5 14-4 22-3-4-3-7-4-11-3 0-4 2-3 4 1 7 1 14 8 18a2 2 0 0 1 1 2l3 11c2 7-1 12-9 16ZM311 219c-6-4-14-5-21-8-2 0-5-1-6 3-4 12-1 25-5 37-5 20-3 40 0 60 2 12 0 24-2 36-2 10 4 21 14 25l9 3c3 1 6 0 8-2s-1-4-2-6c-4-3-8-7-9-13-1-2-1-4 1-5 3 0 4 1 5 3l7 11c4 1 5-1 4-5a43 43 0 0 1-4-13 10 10 0 0 0-3-7c-13-10-13-23-12-37 1-13 5-25 2-38l2-3c6-13 9-27 12-41ZM365 410c-4-2-9-1-13-1-4-1-6-2-4-6s0-5-3-6a37 37 0 0 1-10-5l-6 32-8 13c-10 14-14 30-18 47a47 47 0 0 1-12 23c-1 2-3 2-3 5 1 1 2 3 4 3 6-2 8 2 10 6 6-12 15-23 23-33l14-18c5-6 8-13 10-20 2-14 7-28 16-40Z"
            />
            <path
              fill="var(--hair)"
              d="M302 521c-2-4-4-8-10-6-2 0-3-2-4-3-3 0-6 2-7 4a66 66 0 0 0-5 10 86 86 0 0 1-12 23c-1 3-2 5-1 8s4 3 7 2c13-1 26-3 33-17 1-2 2-4 1-6-2-5-2-10-2-15Z"
            />
            <path
              fill="var(--flesh)"
              d="M445 200a10 10 0 0 0-8 2l-15 9c2 10 7 20 11 29l1 11c1 11 6 21 11 31 6 12 10 24 3 37v8c1 4 2 8 1 12 0 1 0 3 2 4s3-1 4-3 2-4 4-2 0 3-1 5l-3 7 2 4c1 1 3 0 4-1 8-7 12-16 13-26a11 11 0 0 0-1-7 85 85 0 0 1-10-37c-1-22-7-43-15-65-2-5-4-11-3-18Z"
            />
            <path
              fill="var(--pants)"
              d="M384 53c-2 1-2 2 0 3v-3ZM384 62c-1 1 0 2 1 2a2 2 0 0 0-1-2Z"
            />
          </g>
        </g>
      </svg>
    </Div>
  </WrapperStyles>
);
