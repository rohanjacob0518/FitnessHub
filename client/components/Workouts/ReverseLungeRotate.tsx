import * as React from 'react';
import { WrapperStyles } from './WorkoutLayout';
import styled from 'styled-components';

const Div = styled.div`
  .shapes > * {
    opacity: 0;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
  }
  @keyframes rlr-01 {
    0% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  #rlr-01 {
    animation-name: rlr-01;
  }

  @keyframes rlr-02 {
    0% {
      opacity: 0;
    }
    50%,
    100% {
      opacity: 1;
    }
  }

  #rlr-02 {
    animation-name: rlr-02;
  }
`;
export const ReverseLungeRotate = ({ isPaused }) => (
  <WrapperStyles isPaused={isPaused}>
    <Div className="illo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 588.2 594.7">
        <g className="shapes">
          <g id="rlr-02">
            <path
              fill="var(--hair)"
              d="M405 502c-8 7-19 9-29 7a83 83 0 0 0-32-1c-7 1-14 0-20-2-3 0-3-1-3-3 0-10 3-19 5-28 1-2 1-4 4-3l2 7c3 8 13 10 19 5 3-3 3-8 6-12 2-2 3 0 3 2 1 5 5 8 9 10 9 5 18 10 29 10 4 0 5 2 7 5Z"
            />
            <path
              fill="var(--shirt)"
              d="m301 340-3 19a14 14 0 0 1-13 11l-30 2c-18 0-36-3-52-12v-11l1-4c4-1 3-5 4-8l1-7c-1-20-11-37-19-55-9-19-8-39 0-58 3-8 9-13 18-13 5 0 9-2 13-3a4 4 0 0 1 3 3c1 4 6 6 8 6 5-1 10 0 14-2 8-3 16-3 24 1 7 2 14 1 21 2l23 4a27 27 0 0 0 11 7c6 2 6 6 6 12 1 4-2 8-2 12-2 11-6 20-18 23-6 2-8 6-8 12l-1 38c0 3 1 5-1 7 2 6 0 13 0 14Z"
            />
            <path
              fill="var(--pants)"
              d="M203 360c16 9 34 12 52 12l30-2a14 14 0 0 0 13-11l3-19 37 7 3 1c0 5-2 9-4 13-5 11-12 20-18 30-4 9-11 10-19 8-5 0-11-2-15 0s-4 9-5 14c-2 8-8 16-10 25l-2 10c-2 8-3 10-12 12-4 1-9 0-13 3-6 1-11 4-17 4a53 53 0 0 1-38-15l6-15c6-10 5-20 4-31a70 70 0 0 1 0-23c1-8 2-16 5-23Z"
            />
            <path
              fill="var(--flesh)"
              d="M188 452a53 53 0 0 0 38 15c6 0 11-3 17-4-5 10-12 19-18 28-8 12-18 21-26 32l-7 9c-7 8-15 10-24 8a219 219 0 0 0-42-2c-16 1-30-5-45-7-11-2-24-4-36 0-4-2-8-3-13 0-3 1-9-2-11-7a10 10 0 0 1 4-13l7-5c24 2 47-1 70-5a113 113 0 0 1 48 3c11 3 15 1 20-10l15-39a14 14 0 0 1 3-3ZM319 391c6-10 13-19 18-30 2-4 4-8 3-13l29 4c10 2 13 7 13 17s0 18-6 26c-5 8-5 18-8 26-5 12-9 24-12 37-1 5-3 9 0 14-2 4-2 9-6 12-5 5-15 3-18-5l-2-7c4-19 4-38 5-56 0-8 1-15 4-22 3-5 0-5-4-5l-16 2Z"
            />
            <path
              fill="var(--hair)"
              d="M230 188c-6-12-12-24-12-37-1-8-1-16 4-22 5-7 13-12 23-12s20 2 29 0c4-1 6 2 7 5a12 12 0 0 1 0 5 69 69 0 0 0 0 27l-1 2c-1 6-3 12-2 18 0 2 0 4-3 4s-1-2-1-4v-7c0-3 1-4-1-5s-5 0-7 2a20 20 0 0 0-6 10l-3 10c0 2-1 4-3 4-8 0-16 3-24 0ZM32 506l-7 5a10 10 0 0 0-4 13c2 5 8 8 11 7 5-3 9-2 13 0 1 3-3 3-3 6l8 2c6 3 8 7 3 12a20 20 0 0 1-8 6c-8 3-16 4-25 5-5 0-8-2-9-7L1 521c-4-13 2-19 15-18l15 1 1 1a2 2 0 0 1 0 1Z"
            />
            <path
              fill="var(--flesh)"
              d="M230 188c8 3 16 0 24 0 2 0 3-2 3-4l3-10a20 20 0 0 1 6-10c2-2 4-3 7-2s1 3 1 5v7c0 2-2 4 1 4s3-2 3-4c-1-6 1-12 2-18l1-2c4 3 4 7 3 10-2 12-4 23-8 34-1 4-2 8-6 10-8-3-16-3-24 0-4 2-9 1-14 2-2 0-7-2-8-6a4 4 0 0 0-3-3c7-2 7-8 9-13ZM329 246l3-12c-1-6-1-10-7-12a27 27 0 0 1-10-7c4-1 6-5 8-8 3-3 5-8 11-8 5 0 8 4 13 4v3c-1 2-2 4 1 5l1 2c-4 6-1 15-6 21-3 6-9 8-14 12Z"
            />
            <path fill="var(--pants)" d="M208 337z" />
            <path fill="var(--flesh)" d="m32 505-1-1 1 1Z" />
          </g>
          <g id="rlr-01">
            <path
              fill="var(--shirt)"
              d="M398 155c1 19-3 38-3 57 0 17 4 34 6 50 0 2 1 3-1 5-22 4-44 7-66 13-7 1-14 3-20-3-2-10-4-20-1-30 5-14 5-28 6-43 2-17-1-34-7-51-1-3 0-7-4-9v-24c3-1 3-5 4-7l12-26c1-2 3-5 6-6l19 11c5 2 11 6 18 1a4 4 0 0 0 2 2l32 12a6 6 0 0 1 2 2c-1 8-2 10-10 10-6-1-8 2-7 7 1 3 2 7 0 11l-6 15 14 1c2 0 4-1 4 2Z"
            />
            <path
              fill="var(--hair)"
              d="M308 554c4-4 3-11 6-16 1-2 2-5 5-5 2 4 0 8 1 12 0 5 3 8 7 8a8 8 0 0 0 8-6c1-3 3-4 5-5 5-1 8-4 10-9 1 0 2-1 3 1 4 13 16 20 27 28l17 9c4 2 7 5 6 10a10 10 0 0 1-6 9l-14 5h-23c-5-4-11-5-15-9s-10-6-16-7c-8-1-16-4-21-12ZM362 0l2 1 24 1c6 0 8 3 6 9l-4 7-8-3c-6-2-8 1-7 7 1 3 0 6-3 7-4 3-5 6-6 11-1 4-4 8-10 9-5 1-3-4-5-7s-4-6-9-4-5 5-3 9 1 9 2 13-5 9-9 9c-2-13-7-26-8-40s6-23 20-26c4 0 8 0 11-3Z"
            />
            <path
              fill="var(--pants)"
              d="M336 381c-8-1-8-6-8-13-1-20-3-39-10-57a71 71 0 0 1-4-33c6 5 13 3 20 2 22-6 44-9 66-13a182 182 0 0 1 0 44l-3 48-2 13a8 8 0 0 1-4 6h-4c1-6-1-8-8-9l-33 2c-10 1-10 1-10 10Z"
            />
            <path
              fill="var(--flesh)"
              d="M336 381c0-9 0-9 10-10l33-2c7 1 9 3 8 9l-3 11c-5 11-6 25-13 35-11 12-12 28-14 43a8 8 0 0 0 2 7l-4 6a161 161 0 0 0-8 31c0 8-1 15 3 22-1 5-5 8-10 9-2 1-4 2-5 5a8 8 0 0 1-8 6c-4 0-7-3-7-8-1-4 1-8-1-12 3-21 0-41-2-62-1-14 0-28 8-40 3-4 5-8 4-13a34 34 0 0 1 5-23c2-4 3-9 2-14ZM398 155c0-3-2-2-4-2l-14-1 6-15c2-4 1-8 0-11-1-5 1-8 7-7 8 0 9-2 10-10 14 7 27 13 43 11a10 10 0 0 1 6 2c6 4 13 1 19 2 16 5 32 5 49 4 5 0 9-1 11-6 3-4 8-8 14-7 5 0 9-3 14-3 2 0 5-1 6 2 0 3-1 5-4 7-2 1-4 1-6 4a23 23 0 0 0 10 2h11c4 0 8 1 8 7 0 4 3 7 4 11v3c-7 1-4 12-12 11-2 0-3 0-4 2-2 4-5 3-9 2l-22-9c-11-4-21-4-32-3l-55 6-39-2h-17ZM330 81l2-12c4 0 10-5 9-9s0-9-2-13-1-8 3-9 7 1 9 4 0 8 5 7c6-1 9-4 10-9 0-5 2-8 6-10 3-2 4-5 3-8-1-6 1-9 7-7l8 3 2 11 1 3a24 24 0 0 0 5 19 3 3 0 0 1 1 3c-5 7-5 16-8 24-2 4-5 4-9 4-11 0-11 0-15 11-7 5-13 1-18-1l-19-11Z"
            />
            <path
              fill="var(--hair)"
              d="M347 511a161 161 0 0 1 8-31l4-6c2-1 3 0 3 2 4 7 11 10 18 11l19 3c3 0 7 0 7 4s2 8-2 11c-6 4-12 7-19 6-13-1-25-2-38 0Z"
            />
          </g>
        </g>
      </svg>
    </Div>
  </WrapperStyles>
);
