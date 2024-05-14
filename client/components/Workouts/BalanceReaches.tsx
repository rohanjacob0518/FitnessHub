import * as React from 'react';
import { WrapperStyles } from './WorkoutLayout';
import styled from 'styled-components';

const Div = styled.div`
  .shapes > * {
    opacity: 0;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
  }
  @keyframes reach1 {
    0% {
      opacity: 1;
    }
    5%,
    100% {
      opacity: 0;
    }
  }

  #standing {
    animation-name: reach1;
  }

  @keyframes reach2 {
    0% {
      opacity: 0;
    }
    5%,
    100% {
      opacity: 1;
    }
  }

  #balance-right {
    animation-name: reach2;
  }

  &[data-direction='left'] {
    svg {
      transform: scaleX(-1);
    }
  }
`;
export const BalanceReaches = ({ isPaused, direction = 'right' }) => (
  <WrapperStyles isPaused={isPaused}>
    <Div className="illo" data-direction={direction}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 265.4">
        <g className="shapes">
          <g id="standing">
            <path
              fill="var(--hair)"
              d="M125 35c-2-8-4-16-4-23 1-5 5-10 10-11 1 0 3 1 5-1h6l4 1 5 1h3c3 0 4 1 3 3a7 7 0 0 1-3 5l-4-2c-2 0-4 1-3 3s0 3-2 3a6 6 0 0 0-3 5 7 7 0 0 1-3 6c-2 1-3 0-4-2a9 9 0 0 0 0-2c-1-2-3-3-5-2s-2 2-1 5a38 38 0 0 1 0 6c1 2-2 5-4 5ZM144 265l-7-1-9-1c-2 0-3-1-2-3l1-9c0-2 1-4 3-4 1 1 2 3 5 2 2 0 5 0 7-2a4 4 0 0 1 4 1 55 55 0 0 0 13 6 15 15 0 0 0 6 1l3 1-1 4c-2 3-6 4-9 4l-4 1ZM119 227a99 99 0 0 0 4 19 13 13 0 0 1 0 2c1 3-1 4-3 3-7-3-12-7-15-14l-6-12v-1c4-2 8-5 13-6 0 3-1 5 2 6 1 1 3 3 5 3Z"
            />
            <path
              fill="var(--shirt)"
              d="M118 142c-2-1-2-3-2-5 0-12-2-25-4-37l-3-21c0-6-1-11 1-17 2-9 6-17 14-23a26 26 0 0 1 12 7 47 47 0 0 0 6 4c1 4 3 6 6 9a26 26 0 0 1 6 15v17a481 481 0 0 0 11 43c1 4 1 4-3 6 0-1-1-2-2-1l-6 1a51 51 0 0 1-2-6l-8-22-3-8a10 10 0 0 1-3-7l1-9-2-9-1-1-7 1c-1 1-2 3-5 3-4 0-5 2-3 6a19 19 0 0 1 2 8 13 13 0 0 0 1 6l9 18 6 14c2 3 4 6 4 9-6 2-11 2-17 1l-8-2Z"
            />
            <path
              fill="var(--flesh)"
              d="M119 227c-2 0-4-2-5-3-3-1-2-3-2-6l9-9 8-8c4-2 3-6 2-10v-9c6 3 12 1 18 1l2-2v-3l2-1h13l1 9c1 6 0 7-5 10l-13 7c-3 2-4 5-4 8l-3 20a30 30 0 0 0 0 16c-2 2-5 2-7 2-3 1-4-1-5-2a161 161 0 0 0-3-26l-1-2a3 3 0 0 0-2 2l-5 6ZM143 143c0-4-2-6-4-9l-6-14-9-18a13 13 0 0 1-1-6 19 19 0 0 0-2-8c-2-4-1-6 4-6 2 0 3-2 5-3l6-1 1 1 2 9-1 9a10 10 0 0 0 3 7l3 8 8 22a49 49 0 0 0 2 6 6 6 0 0 0 1 3c3 7 7 12 9 20a2 2 0 0 0 1 1 3 3 0 0 1 1 3c-2 0-1 1-1 1v4c0 1 0 3-2 3l-1-2-1-6-1 7-1 2-2-2a19 19 0 0 0-1-6l-1 5c0 1 1 3-2 3l-1-3v-8h-1a24 24 0 0 0 0 6l-1 2-2-1a3 3 0 0 1-1-1c0-5 1-10-2-15a2 2 0 0 1 0-1 12 12 0 0 0 1-6c-1-2 0-5-3-6Z"
            />
            <path
              fill="var(--pants)"
              d="M143 143c3 1 2 4 3 6a12 12 0 0 1-1 6 2 2 0 0 0 0 1c3 5 2 10 2 15a3 3 0 0 0 1 1c0 1 1 2 2 1l1-2a24 24 0 0 1 0-6h1v8l1 3c3 0 2-2 2-3l1-5a19 19 0 0 1 1 6c0 1 0 2 2 2s1-1 1-2l1-7 1 6c0 1 0 2 2 2l1-3v-4s-1-1 1-1l1 8-1 2h-13l-2 1v3l-2 2c-6 0-12 2-18-1-5-5-5-12-7-18-2-7-5-14-6-22 3-1 6 1 8 2 6 1 11 1 17-1Z"
            />
            <path
              fill="var(--flesh)"
              d="M142 50a47 47 0 0 1-6-4 26 26 0 0 0-12-7l1-4c2 0 5-3 4-5a38 38 0 0 0 0-6c-1-3-1-4 1-5s4 0 5 2a9 9 0 0 1 0 2c1 2 2 3 4 2a7 7 0 0 0 3-6 6 6 0 0 1 3-5c2 0 3-1 2-3s1-3 3-3l5 2c-1 2 1 4 1 6a10 10 0 0 1 0 2c-1 3 0 6 2 8v3l-1 5c0 1 0 3-2 4l-1 1c0 3-1 4-4 4-6-1-7 0-8 6v1Z"
            />
            <path
              fill="var(--pants)"
              d="M165 164a2 2 0 0 1-2-1c-1-8-5-13-8-20a6 6 0 0 1-1-3l6-1c1-1 2 0 2 1l3 24Z"
            />
          </g>
          <g id="balance-right">
            <path
              fill="var(--flesh)"
              d="m236 103 18 4c6 1 11 3 17 3 7 2 13 3 20 1 5-1 11 0 17 2l4 2v1l-7 1h-12l-1 1 1 1 5 1 2 2a2 2 0 0 1-3 1c-6-1-13 0-18-4a7 7 0 0 0-4-1l-26-1-20-1h-1l5-7 3-6Z"
            />
            <path
              fill="var(--shirt)"
              d="m236 103-3 6-5 7c-1 3-4 4-8 3h-19c-4 0-7 1-9 4-5 7-12 10-20 12-11 1-22 2-32 5h-3l-3-9a7 7 0 0 1 5-4l13-3c2 0 3-2 2-3l-5-14-3-1a153 153 0 0 1-14 8c-4 2-6 5-8 7a24 24 0 0 1-8-6c-2-3-4-5-7-6l1-1 4-1c11 1 21-3 30-8l12-7 11-3a191 191 0 0 1 20 0 3 3 0 0 1 2 1c-3 2-3 6-3 10a26 26 0 0 0 3 14h2a29 29 0 0 1 9-8c2-1 5-1 7 1 1 1 2 4 4 3a54 54 0 0 0 8-2l2-2c3 1 4-1 4-3a2 2 0 0 1 3-2l6 1 2 1Z"
            />
            <path
              fill="var(--flesh)"
              d="m144 162 4 11 6 20a10 10 0 0 1-2 9c-3 4-4 9-4 14-1 7-4 13-6 20a18 18 0 0 0 0 10 13 13 0 0 1-6 2c-2 0-4 0-5-2l-1-26a29 29 0 0 1 6-20c3-4 2-6-1-10l-11-17a11 11 0 0 1-1-2 15 15 0 0 1 7-4c5-1 10-2 14-5ZM124 121c2-2 4-5 8-7a153 153 0 0 0 14-7c1-1 2-1 3 1l5 13c1 1 0 3-2 3l-13 3a7 7 0 0 0-5 4l-2 1-17 15-8 8c-2 1-4 3-5 6-1 6-5 10-10 13-2 1-5 0-6-3-1-2-4-4-4-7 0-2 0-3 2-3 2-1 5-2 5-5a10 10 0 0 0 3-2c5-3 8-7 12-11l20-22Z"
            />
            <path
              fill="var(--pants)"
              d="m124 121-20 22c-4 4-7 8-12 11a10 10 0 0 1-3 2l-5 1c-1 1-2 1-2-1a43 43 0 0 0-1-4c-2-7-4-13-8-19l2-2 13-7c4-2 8-4 11-8a16 16 0 0 1 10-7c3 1 5 3 7 6a24 24 0 0 0 8 6Z"
            />
            <path
              fill="var(--flesh)"
              d="M228 101a2 2 0 0 0-3 2c0 2-1 4-4 3l-2 2a54 54 0 0 1-8 2c-2 1-3-2-4-3-2-2-5-3-7-1a29 29 0 0 0-9 8h-2a26 26 0 0 1-3-14c0-4 0-8 3-10 4 0 6-3 10-4 1 2 4 2 6 0l4-5c1-1 3-2 4-1s2 3 1 5a9 9 0 0 1-1 2c-2 1 0 2 1 3a7 7 0 0 0 6-1 6 6 0 0 1 6-1c1 0 2 1 3-1a2 2 0 0 1 4 0 6 6 0 0 1 1 5c-3 2-4 6-7 7-1 1 0 1 1 2ZM73 133c4 6 6 12 8 19H69a8 8 0 0 1-6-1c-9-5-19-6-29-8l-9-1c-3-1-6 1-9 2-3-6-3-7 1-10a100 100 0 0 0 22-2c7-2 13-1 19 2 5 3 10 3 15-1Z"
            />
            <path
              fill="var(--pants)"
              d="m107 155 8-8 17-15 2-1 3 9 7 19v3c-4 3-9 4-14 5a15 15 0 0 0-7 4c-3 1-3 0-5-2l-11-14Z"
            />
            <path
              fill="var(--hair)"
              d="M234 92a6 6 0 0 0-1-5 2 2 0 0 0-4 0c-1 2-2 1-3 1a6 6 0 0 0-6 1 7 7 0 0 1-6 1c-2-1-3-2-1-3a9 9 0 0 0 1-2c1-2 1-4-1-5s-3 0-4 1l-4 5c-1 2-5 2-6 0 4-6 8-12 14-17 4-3 9-3 13 1a75 75 0 0 1 11 11 4 4 0 0 1 1 3 4 4 0 0 0 2 3c2 1 2 3-1 4a9 9 0 0 1-5 1ZM131 246c1 2 3 2 5 2a13 13 0 0 0 6-2 3 3 0 0 1 3 0 58 58 0 0 0 11 6 19 19 0 0 0 8 1c1 0 2 0 3 2s-1 2-1 3a13 13 0 0 1-7 4 37 37 0 0 1-16 1 59 59 0 0 0-10-1 12 12 0 0 1-3 0c-4-1-4-1-3-5l1-7c0-2 0-4 3-4ZM17 134c-4 3-4 4-1 10l-4 8c-2 4-4 7-4 12a2 2 0 0 1-2 2l-2-1a12 12 0 0 1-4-7 33 33 0 0 1 1-12 72 72 0 0 0 2-14c0-2 1-2 3-2l8 2 3 2Z"
            />
          </g>
        </g>
      </svg>
    </Div>
  </WrapperStyles>
);
