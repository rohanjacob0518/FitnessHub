import * as React from 'react';
import { WrapperStyles } from './WorkoutLayout';
import styled from 'styled-components';

const Div = styled.div`
  .shapes > * {
    opacity: 0;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
  }
  @keyframes dollie-1 {
    0% {
      opacity: 1;
    }
    25%,
    100% {
      opacity: 0;
    }
  }

  #dollie-1 {
    animation-name: dollie-1;
  }

  @keyframes dollie-2 {
    0% {
      opacity: 0;
    }
    25%,
    50% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  #dollie-2 {
    animation-name: dollie-2;
  }

  @keyframes dollie-3 {
    0% {
      opacity: 0;
    }
    50%,
    75% {
      opacity: 1;
    }
    75%,
    100% {
      opacity: 0;
    }
  }

  #dollie-3 {
    animation-name: dollie-3;
  }

  @keyframes dollie-4 {
    0% {
      opacity: 0;
    }

    75%,
    100% {
      opacity: 1;
    }
  }

  #dollie-4 {
    animation-name: dollie-4;
  }
`;
export const HelloDollies = ({ isPaused }) => (
  <WrapperStyles isPaused={isPaused}>
    <Div className="illo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620.4 405.9">
        <g className="shapes">
          <g id="dollie-3">
            <path
              fill="var(--hair)"
              d="M382 96c-3 0-4-1-4-4a255 255 0 0 0-4-34 20 20 0 0 0-6-11l-19-17a22 22 0 0 1-7-10c-1-6 0-9 6-10 16-2 31 2 42 14a64 64 0 0 1 8 9c10 13 22 24 36 33l6 4c5 4 11 8 13 15v6c-2 1-1 2-2 3a13 13 0 0 1-5 8l-29 19a2 2 0 0 1-2 0c-1-3-2-7 0-11 7-11-2-23-13-23l-9-1c-2 0-3 0-3 2-1 5-3 7-8 8Z"
            />
            <path
              fill="var(--flesh)"
              d="M382 96c5-1 7-4 8-8 0-2 1-2 3-2l9 1c11 0 20 12 13 23-2 4-1 8 0 11l-15 23-15 32c-7 13-13 27-22 39-4 5-10 8-15 11l-19 11c-2 2-3 4-2 7l9 48 1 4c-2 0-1 2-1 4 0 10-1 19-6 28-2 3-3 5-7 5l-17-1a11 11 0 0 1-10-7c-2-4-5-9-9-12-7-6-12-14-17-21a8 8 0 0 1-1-7c3-12 3-24 5-36 1-2 0-3-2-2l-9 3c1-12 0-23 2-35a32 32 0 0 0 0-10c-1-5-1-10 4-13 15-13 24-31 34-47 5-9 10-17 13-26l2-2c3-1 2-3 2-5 0-4 1-5 6-5 6 1 11 6 12 14l1 6c-4 7-5 15-6 23a146 146 0 0 1-2 19 17 17 0 0 0 0 3l6-7 29-34c9-10 15-21 16-35Z"
            />
            <path
              fill="var(--shirt)"
              d="M276 396c0 2-1 3-4 2a27 27 0 0 1-4-1c-7-4-16-5-24-5-29-2-58 2-87 1l-34-2c-7-1-14-3-19-8-6-6-13-8-20-11-4-1-8-2-11-5 3-2 6-1 9-2 4-1 8 0 10-4l8-21c1-3 4-6 1-9l-14-15c0-1-3-2-1-4 1-1 2 1 4 1h1a9 9 0 0 0 12-3c2-4 5-8 10-8a13 13 0 0 0 8-2c2-1 5-2 7-5 2-4 4-8 9-8 4 9 12 10 21 8 10-1 20 1 30 4h2c11-1 22 4 33 2 5-1 11-2 16 1a8 8 0 0 0 5 1l11-2 4 16 12 54 5 25Z"
            />
            <path
              fill="var(--flesh)"
              d="M137 287c-5 0-7 4-9 8-2 3-5 4-7 5a13 13 0 0 1-8 2c-5 0-8 4-10 8a9 9 0 0 1-12 3h-1c-2 0-3-2-4-1-2 2 1 3 1 4l14 15c3 3 0 6-1 9l-8 21c-2 4-6 3-10 4-3 1-6 0-9 2-10-4-18-10-26-17l-13-10a13 13 0 0 1-5-6c-4-10-6-21 0-31l4-7c-1-1-4 0-4-3 0-2 1-3 3-4 4-2 5-6 8-10a3 3 0 0 0 3 0c4-2 8-2 13 0l16 5c1-9 5-11 13-7l4 2c4 2 5 1 6-3a5 5 0 0 0-1-4 45 45 0 0 1-10-13 10 10 0 0 0-5-5c-5-2-5-5-2-9l11-10h3c7 2 13 5 18 10 3 4 6 5 10 5a29 29 0 0 1 6 1c2 1 4 3 2 6-1 2 0 3 2 3 4 2 6 6 6 10a6 6 0 0 0 2 4c4 4 4 6 1 10-1 1-2 2-1 3Zm-54 21 4-4c2-3 3-5-1-7-2 0-4-2-5-4-1 0-2-2-3-1s0 2 0 3c2 4 5 8 5 13Zm-21-5c4 2 7 3 11 3-3-6-3-6-11-3Z"
            />
            <path
              fill="var(--pants)"
              d="m276 396-5-25-12-54-4-16c3-7 2-14 1-20s-1-11 2-15l3-12a6 6 0 0 1 2-4l8-3c3-1 4 0 3 2-2 12-2 24-5 36a8 8 0 0 0 1 7c5 7 10 15 17 21 4 3 7 8 9 12a11 11 0 0 0 10 7l17 1c4 0 5-2 7-5 4-9 6-18 6-28 0-2-1-3 1-4 3 2 3 5 3 9 0 5-2 9 3 13v6c-3 6-3 11 2 16v5c-4 4-6 10-8 16l-4 13c-4 14-14 20-28 22h-29Z"
            />
            <path
              fill="var(--hair)"
              d="M92 235h-4l-11 10c-3 4-3 7 2 9a10 10 0 0 1 5 5 45 45 0 0 0 10 13 5 5 0 0 1 1 4c-1 4-2 5-6 3l-4-2c-8-4-12-2-13 7l-16-5c-5-1-9-2-13 0a3 3 0 0 1-3 0c-3-9 1-16 5-23 6-10 15-17 23-24l11-11c3-3 7-2 9 1 3 4 4 8 4 13ZM339 127l-1-6c-1-8-6-13-13-14-4 0-5 1-5 5 0 2 1 4-2 5a5 5 0 0 1-4-4c-2-11-7-18-17-22-3-1-7-3-9-6-3-6-1-11 5-13 9-2 18-1 25 6 10 10 22 17 35 22 7 3 7 6 2 12-4 4-7 8-12 10-2 1-1 4-4 5ZM83 308c0-5-3-9-5-13v-3c1-1 2 1 3 1 1 2 3 4 5 4 4 2 3 4 1 7l-4 4Z"
            />
            <path fill="var(--hair)" d="M62 303c8-3 8-3 11 3-4 0-7-1-11-3Z" />
          </g>
          <g id="dollie-2">
            <path
              fill="var(--flesh)"
              d="M71 403c-10 0-21 1-31 3a63 63 0 0 1-24-3 8 8 0 0 1-4-2L0 386v-3c3-5 8-9 10-15 2-3 6-4 9-6l12-4a6 6 0 0 0 3-1c10-1 19-1 29 2 0 1-1 3 1 3l6 2 29 13a3 3 0 0 1 1 4c0 2-2 2-3 2-4 0-7 1-9 6l-3 2a43 43 0 0 0-14 12Z"
            />
            <path
              fill="var(--shirt)"
              d="M71 403a43 43 0 0 1 14-12l3-2c2-5 5-6 9-6 1 0 3 0 3-2a3 3 0 0 0-1-4l-29-13-6-2c-3 0-1-2-1-3h5c10 0 19-2 26-10a40 40 0 0 1 7-7 24 24 0 0 0 9-10c3 0 4-2 6-3l18-16c6-6 15-7 23-8 15-2 30-2 44 0 7 0 13 2 19 4 11 2 21 0 32 0 3 2 4 5 4 8 1 12 2 23 7 34a12 12 0 0 1 0 10c-5 12 0 22 6 32-1 4-7 8-12 6a54 54 0 0 1-7-5 23 23 0 0 0-13-5l-48-1c-20 1-40 4-60 8l-27 4a123 123 0 0 0-22 3h-9Z"
            />
            <path
              fill="var(--flesh)"
              d="M268 267a316 316 0 0 0 2-33 166 166 0 0 1 2-17 30 30 0 0 0-1-7c-1-10 2-20 8-28 7-10 12-20 16-31 4-14 11-27 16-41 6-12 11-24 10-37a10 10 0 0 0 3-6l1-2c5-1 5-5 6-9 0-3 3-5 5-5a14 14 0 0 1 17 14 13 13 0 0 0 1 8c0 4-2 7-3 11l-12 63c-1 14-7 25-15 36-4 6-8 13-10 21-1 8 1 15 3 21 5 19 10 37 13 56l2 6c-4 2-3 5-4 8-6 11-8 13-21 10-12-3-22-10-31-19-5-5-10-10-8-18v-1Z"
            />
            <path
              fill="var(--pants)"
              d="M268 267v1c-2 8 3 13 8 18 9 9 19 16 32 19 12 3 14 1 20-10 1-3 1-6 4-8l11 27c1 4 2 7 0 11-2 5-2 10-2 16l-1 15c-1 15-14 35-34 36a277 277 0 0 1-37 1c-6-10-11-20-6-32a12 12 0 0 0 0-10c-5-11-6-22-7-34 0-3-1-6-4-8-1 0-3 0-2-2l2-1c9-3 12-7 12-16l1-15c0-3 0-6 3-8Z"
            />
            <path
              fill="var(--hair)"
              d="M354 73a13 13 0 0 1-1-8 14 14 0 0 0-17-14c-2 0-5 2-5 5-1 4-1 8-6 9l-1 2a10 10 0 0 1-3 6c-1 0-3 0-3-2 0-6-4-10-7-14-9-10-20-18-33-23-3-1-4-3-4-7s2-5 4-6a29 29 0 0 1 15-1h4c1-1-2-2-3-3l-4-3c-3-2-4-5-3-9 0-4 3-5 7-5 7-1 14 1 21 4 17 7 32 18 47 29a83 83 0 0 1 10 7c4 4 3 6 0 10-2 6-7 9-11 13a12 12 0 0 0-4 8c0 3-1 3-3 2Z"
            />
            <path
              fill="var(--flesh)"
              d="M110 332a24 24 0 0 1-9 10 40 40 0 0 0-7 7c-7 8-16 10-26 10a41 41 0 0 1-4-3c-2-2-3-5-2-8s3-4 6-4h6c3 0 3-2 3-4-1-2-2-4-4-4a36 36 0 0 1-12-4 10 10 0 0 0-7-2c-4 0-6-2-5-5 1-6 2-11 5-16h13c7 1 14 1 20-2 2-2 4 0 4 2 1 2 2 2 4 2 3 0 6 1 8 5a4 4 0 0 0 4 2c4 0 5 3 5 6l-2 8Z"
            />
            <path
              fill="var(--hair)"
              d="M54 309c-3 5-4 10-5 16-1 3 1 5 5 5a10 10 0 0 1 7 1 36 36 0 0 0 12 5c2 0 3 2 4 4 0 2 0 4-3 4h-6c-3 0-5 1-6 4s0 6 2 8a41 41 0 0 0 4 3h-5c-10-3-19-3-29-2a6 6 0 0 1-3 1c0-11-1-21 3-32l5-19c1-6 5-7 9-4a27 27 0 0 1 6 6Z"
            />
          </g>
          <g id="dollie-4">
            <path
              fill="var(--flesh)"
              d="M273 267a313 313 0 0 0 2-33 169 169 0 0 1 2-17 30 30 0 0 0-1-7c-1-10 2-20 8-28 7-10 12-20 16-31 4-14 11-27 16-41 6-12 11-24 10-37a10 10 0 0 0 3-6l1-2c5-1 5-5 6-9 0-3 2-5 5-5a14 14 0 0 1 17 14 13 13 0 0 0 1 8c0 4-2 7-3 11-5 21-9 42-11 63-2 14-8 25-16 36-4 6-8 13-10 21-1 8 1 14 3 21 5 19 10 37 13 56l2 6c-3 2-3 5-4 8-6 11-8 13-21 10-12-3-22-10-31-19-5-5-10-10-8-18v-1Z"
            />
            <path
              fill="var(--pants)"
              d="M273 267v1c-2 8 3 13 8 18 9 9 19 16 31 19 13 3 15 1 21-10 1-3 0-6 4-8l11 27c1 4 2 7 0 11-2 5-2 10-2 16l-1 15c-1 15-14 35-34 36a277 277 0 0 1-37 1c-6-10-11-20-6-32a12 12 0 0 0 0-10c-5-11-6-22-7-34 0-3-1-6-4-8-1 0-3 0-2-2l2-1c9-3 12-7 12-16v-15c1-3 1-6 4-8Z"
            />
            <path
              fill="var(--hair)"
              d="M359 73a13 13 0 0 1-1-8 14 14 0 0 0-17-14c-2 0-5 2-5 5-1 4-1 8-6 9l-1 2a10 10 0 0 1-3 6c-1 0-3 0-3-2 0-6-4-10-7-14-9-10-20-18-33-23-3-1-4-3-4-7s2-5 4-6a29 29 0 0 1 15-1h4c1-1-2-2-3-3l-4-3c-3-2-4-5-3-9 0-4 3-5 7-5 7-1 14 1 21 4 17 7 32 18 47 29a82 82 0 0 1 10 7c4 4 3 6 0 10-2 6-7 9-11 13a12 12 0 0 0-4 8c0 3-1 3-3 2Z"
            />
            <g id="dollie-2-2" data-name="dollie-2">
              <path
                fill="var(--shirt)"
                d="M276 396c0 2-1 3-4 2a27 27 0 0 1-4-1c-7-4-16-5-24-5-29-2-58 2-87 1l-34-2c-7-1-14-3-19-8-6-6-13-8-20-11-4-1-8-2-11-5 3-2 6-1 9-2 4-1 8 0 10-4l8-21c1-3 4-6 1-9l-14-15c0-1-3-2-1-4 1-1 2 1 4 1h1a9 9 0 0 0 12-3c2-4 5-8 10-8a13 13 0 0 0 8-2c2-1 5-2 7-5 2-4 4-8 9-8 4 9 12 10 21 8 10-1 20 1 30 4h2c11-1 22 4 33 2 5-1 11-2 16 1a8 8 0 0 0 5 1l11-2 4 16 12 54 5 25Z"
              />
              <path
                fill="var(--flesh)"
                d="M137 287c-5 0-7 4-9 8-2 3-5 4-7 5a13 13 0 0 1-8 2c-5 0-8 4-10 8a9 9 0 0 1-12 3h-1c-2 0-3-2-4-1-2 2 1 3 1 4l14 15c3 3 0 6-1 9l-8 21c-2 4-6 3-10 4-3 1-6 0-9 2-10-4-18-10-26-17l-13-10a13 13 0 0 1-5-6c-4-10-6-21 0-31l4-7c-1-1-4 0-4-3 0-2 1-3 3-4 4-2 5-6 8-10a3 3 0 0 0 3 0c4-2 8-2 13 0l16 5c1-9 5-11 13-7l4 2c4 2 5 1 6-3a5 5 0 0 0-1-4 45 45 0 0 1-10-13 10 10 0 0 0-5-5c-5-2-5-5-2-9l11-10h3c7 2 13 5 18 10 3 4 6 5 10 5a29 29 0 0 1 6 1c2 1 4 3 2 6-1 2 0 3 2 3 4 2 6 6 6 10a6 6 0 0 0 2 4c4 4 4 6 1 10-1 1-2 2-1 3Zm-54 21 4-4c2-3 3-5-1-7-2 0-4-2-5-4-1 0-2-2-3-1s0 2 0 3c2 4 5 8 5 13Zm-21-5c4 2 7 3 11 3-3-6-3-6-11-3Z"
              />
              <path
                fill="var(--hair)"
                d="M92 235h-4l-11 10c-3 4-3 7 2 9a10 10 0 0 1 5 5 45 45 0 0 0 10 13 5 5 0 0 1 1 4c-1 4-2 5-6 3l-4-2c-8-4-12-2-13 7l-16-5c-5-1-9-2-13 0a3 3 0 0 1-3 0c-3-9 1-16 5-23 6-10 15-17 23-24l11-11c3-3 7-2 9 1 3 4 4 8 4 13ZM83 308c0-5-3-9-5-13v-3c1-1 2 1 3 1 1 2 3 4 5 4 4 2 3 4 1 7l-4 4Z"
              />
              <path fill="var(--hair)" d="M62 303c8-3 8-3 11 3-4 0-7-1-11-3Z" />
            </g>
          </g>
          <g id="dollie-1">
            <path
              fill="var(--flesh)"
              d="M72 403c-10 0-21 1-31 3a63 63 0 0 1-24-3 8 8 0 0 1-4-2L1 386v-3c3-5 8-9 10-15 2-3 6-4 9-6l12-4a6 6 0 0 0 3-1c10-1 19-1 29 2 0 1-1 3 1 3l6 2 29 13a3 3 0 0 1 1 4c0 2-2 2-3 2-4 0-7 1-9 6l-3 2a43 43 0 0 0-14 12ZM351 312a314 314 0 0 0 34-1 168 168 0 0 1 17 0 30 30 0 0 0 7 0c10-2 19 0 28 5 11 6 22 10 33 13 14 3 28 8 42 13 12 4 25 8 38 7a10 10 0 0 0 6 1l2 1c1 5 6 5 10 6 3 0 4 2 5 5a14 14 0 0 1-13 17 13 13 0 0 0-7 2c-4 1-8-1-12-2-21-3-42-5-64-6-13-1-25-5-37-12-6-4-13-7-22-8-7-1-14 2-21 4l-54 18-5 2c-2-3-6-2-9-3-12-5-13-7-11-19 1-13 8-23 15-33 5-6 10-11 18-10Z"
            />
            <path
              fill="var(--pants)"
              d="m343 309-14 1c-6 0-9-1-12-3h-1a130 130 0 0 0-19-2c-10 2-20 4-29 9a12 12 0 0 1-10 1c-12-4-22 2-31 9a278 278 0 0 0 3 36c4 21 25 32 39 32l16-1c5 0 11-1 16 1 4 1 7 0 10-1l27-14c-3-3-6-2-9-3-12-5-13-7-11-19 1-13 8-23 15-33 5-6 10-11 18-10-2-3-5-3-8-3Z"
            />
            <path
              fill="var(--hair)"
              d="M553 381a13 13 0 0 1 7-2 14 14 0 0 0 13-17c-1-3-2-5-5-5-4-1-9-1-10-6l-2-1a10 10 0 0 1-6-1c-1-2-1-3 1-4 6 0 10-4 13-8 10-10 17-21 20-35 1-3 4-5 7-5s5 2 6 4a29 29 0 0 1 3 15c0 1-1 3 1 3s1-1 2-2l3-5c2-3 4-4 8-4 4 1 5 3 6 7 1 7 0 14-2 21-6 18-15 34-25 50a82 82 0 0 1-6 10c-3 4-6 3-10 1-6-2-9-6-14-10a12 12 0 0 0-8-3c-3 0-3-1-2-3Z"
            />
            <path
              fill="var(--shirt)"
              d="M72 403a43 43 0 0 1 14-12l3-2c2-5 5-6 9-6 1 0 3 0 3-2a3 3 0 0 0-1-4l-29-13-6-2c-3 0-1-2-1-3h5c10 0 19-2 26-10a40 40 0 0 1 7-7 24 24 0 0 0 9-10c3 0 4-2 6-3l18-16c6-6 15-7 23-8 15-2 30-2 44 0 7 0 13 2 19 4 11 2 21 0 32 0 3 2 4 5 4 8 1 12 2 23 7 34a12 12 0 0 1 0 10c-5 12 0 22 6 32-1 4-7 8-12 6a54 54 0 0 1-7-5 23 23 0 0 0-13-5l-48-1c-20 1-40 4-60 8l-27 4a123 123 0 0 0-22 3h-9Z"
            />
            <path
              fill="var(--flesh)"
              d="M111 332a24 24 0 0 1-9 10 40 40 0 0 0-7 7c-7 8-16 10-26 10a39 39 0 0 1-4-3c-2-2-3-5-2-8s3-4 6-4h6c3 0 3-2 3-4-1-2-2-4-4-4a36 36 0 0 1-12-4 10 10 0 0 0-7-2c-4 0-6-2-5-5 1-6 2-11 5-16h13c7 1 14 1 20-2 2-2 4 0 4 2 1 2 2 2 4 2 3 0 6 1 8 5a4 4 0 0 0 4 2c4 0 5 3 5 6l-2 8Z"
            />
            <path
              fill="var(--hair)"
              d="M55 309c-3 5-4 10-5 16-1 3 1 5 5 5a10 10 0 0 1 7 1 36 36 0 0 0 12 5c2 0 3 2 4 4 0 2 0 4-3 4h-6c-3 0-5 1-6 4s0 6 2 8a39 39 0 0 0 4 3h-5c-10-3-19-3-29-2a6 6 0 0 1-3 1c0-11-1-21 3-32l5-19c1-6 5-7 9-4a27 27 0 0 1 6 6Z"
            />
          </g>
        </g>
      </svg>
    </Div>
  </WrapperStyles>
);
