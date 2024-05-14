import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --app-height: 100vh;
    --cyan: #00a2d9;
    --berry: #b7295a;
    --green: #7ab800;
    --yellow: #f2af00;
    --black: #202020;
    --paleGray: #eee;
    --almostWhite: #f4f4f4;
    --cool900: #17181C;
    --cool800: #2D2F39;
    --cool700: #444755;
    --cool600: #5A5E72;
    --cool500: #71768E;
    --cool400: #8D91A5;
    --cool300: #AAADBB;
    --cool200: #C6C8D2;
    --cool100: #E3E4E8;
    --cool50: #F1F1F4;
    --cyan900: #0A2129;
    --cyan800: #154251;
    --cyan700: #1F637A;
    --cyan600: #2984A3;
    --cyan500: #34A5CB;
    --cyan400: #5CB7D6;
    --cyan300: #85C9E0;
    --cyan200: #AEDBEA;
    --cyan100: #D6EDF5;
    --cyan50: #EBF6FA;
    --green900: #18260D;
    --green800: #304C1A;
    --green700: #487227;
    --green600: #609834;
    --green500: #79BF42;
    --green400: #93CB67;
    --green300: #AED88D;
    --green200: #C9E5B3;
    --green100: #E4F2D9;
    --green50: #F1F9EC;
    --red900: #260D11;
    --red800: #4D1922;
    --red700: #732634;
    --red600: #9A3245;
    --red500: #C03F56;
    --red400: #CD6578;
    --red300: #D98C9A;
    --red200: #E6B2BB;
    --red100: #F2D9DD;
    --red50: #F9ECEE;
    --yellow900: #302303;
    --yellow800: #5F4707;
    --yellow700: #8F6A0A;
    --yellow600: #BF8E0D;
    --yellow500: #EFB212;
    --yellow400: #F2C140;
    --yellow300: #F5D070;
    --yellow200: #F8E0A0;
    --yellow100: #FCEFCF;
    --yellow50: #FDF7E7;
    --high-elevation: 0px 10px 20px rgba(0, 0, 0, 0.08), 6px 1px 18px rgba(0, 0, 0, 0.05);
    --medium-elevation: 0px 7px 9px rgba(0, 0, 0, 0.08), 2px 2px 9px rgba(0, 0, 0, 0.06);
    --low-elevation: 0px 4px 4px rgba(0, 0, 0, 0.1), 1px 1px 8px rgba(0, 0, 0, 0.06);
    --subtle-elevation: 0px 2px 7px rgba(0, 0, 0, 0.05), 1px 1px 8px rgba(0, 0, 0, 0.06);
    --ticker-height: 1.5rem;
    --flesh: #d5ae83;
    --hair: #202020;
    --pants: #414141;
    --shirt: #42cbef;
    --book: var(--cool200);
  }
  .height100vh {
    height: 100vh;
    height: var(--app-height);

  }
  html,
  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-size: 62.5%;
  }
  body {
    background-color: var(--bodyBg);
    color: #222;
    color: var(--content);
    font-family: "Poppins", sans-serif;
    letter-spacing: -.025em;
    font-size: 1.6rem;
    font-weight: 400;
    text-decoration-color: #000;
    line-height: 1.4;
    transition: transform .5s, background-color .2s;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  *, * > * {
    box-sizing: border-box;
  }
  .lightMode {
    --focus-shadow: 0px 1px 15px rgba(255, 100, 100, 0.4);
    --gradient-green-end: var(--green500);
    --gradient-cyan-end: var(--cyan500);
    --setting-panel-bg: #fff;
    --setting-panel-border: var(--cool200);
    --setting-label: var(--cool500);
    --setting-pill: #fff;
    --setting-pill-text: var(--cool600);
    --setting-pill-selected-text: var(--cyan900);
    --setting-pill-border: var(--cool100);
    --setting-pill-selected: var(--cyan50);
    --timer-stroke: var(--berry);
    --timer-bg: var(--cyan100);
    --timer-marker: var(--cyan500);
    --label-current: var(--cyan600);
    --label-next: var(--cool500);
    --controller-bg: var(--cool50);
    --controller-text: var(--cyan800);
    --controller-button: var(--cyan500);
    --controller-button-disabled: var(--cool300);
    --profile-bg: var(--cool50);
    --profile-primary: var(--cool800);
    --profile-secondary: var(--cool500);
    --profile-button: var(--cyan600);
    --bodyBg: #fff;
    --post-workout-title: var(--green500);
    --post-workout-msg: var(--green700);
    --logo-letters: var(--cool500);
    --logo-dividers: var(--cool100);
    --button-bg: var(--cyan500);
    --button-bg-colormode: var(--cyan100);
    --button-bg-colormode-border: var(--cyan200);
    --button-bg-colormode-hover: var(--cyan50);
    --button-bg-hover: var(--cyan500);
    --input-description: var(--cyan700);
    --input-bg: #fff;
    --input-text: var(--cool700);
    --input-border: var(--cool200);
    --history: var(--cool700);
    --history-summary-bg: #fff;
    --history-summary-text: var(--cool700);
    --history-summary-border: var(--cool200);
    --colormode-sun: var(--cyan500);
    --colormode-moon: var(--cyan300);
    --rest-message: var(--cool300);
    --about: rgba(255,255,255,.4);
    --github: var(--green600);
    --about-bg: rgba(255,255,255,.8);
    --about-border: #fff;
  }

  .darkMode {
    --focus-shadow: 0px 1px 15px rgba(255, 255, 100, 0.4);
    --gradient-green-end: var(--black);
    --gradient-cyan-end: #000;
    --setting-panel-bg: var(--cool800);
    --setting-panel-border: var(--cool700);
    --setting-label: var(--cool200);
    --setting-pill: var(--cool900);
    --setting-pill-text: var(--cool300);
    --setting-pill-selected-text: var(--cyan50);
    --setting-pill-border: var(--cool700);
    --setting-pill-selected: var(--cyan800);
    --timer-stroke: var(--berry);
    --timer-bg: var(--cyan800);
    --timer-marker: var(--cyan500);
    --label-current: var(--cyan500);
    --label-next: var(--cool500);
    --controller-bg: var(--cool700);
    --controller-text: var(--cool200);
    --controller-button: var(--cyan500);
    --controller-button-disabled: var(--cool300);
    --profile-bg: var(--cool900);
    --profile-primary: var(--cool300);
    --profile-secondary: var(--cool500);
    --profile-button: var(--cyan500);
    --bodyBg: var(--cool900);
    --hair: var(--cool700);
    --post-workout-title: var(--green500);
    --post-workout-msg: var(--green400);
    --logo-letters: var(--cool300);
    --logo-dividers: var(--cool600);
    --button-bg: var(--cyan600);
    --button-bg-colormode: var(--cyan700);
    --button-bg-colormode-border: var(--cyan600);
    --button-bg-colormode-hover: var(--cyan600);
    --button-bg-hover: var(--cyan700);
    --input-description: var(--cyan400);
    --input-bg: var(--cyan800);
    --input-text: var(--cyan200);
    --input-border: var(--cyan600);
    --history: var(--cool200);
    --history-summary-bg: var(--cool800);
    --history-summary-text: var(--cool100);
    --history-summary-border: var(--cool600);
    --colormode-sun: var(--yellow300);
    --colormode-moon: var(--yellow500);
    --rest-message: var(--green500);
    --about: var(--cool600);
    --github: var(--cool900);
    --about-bg: rgba(0,0,0,.4);
    --about-border: var(--cool700);

    --high-elevation: 0px 10px 20px rgba(155, 100, 100, 0.08), 6px 1px 18px rgba(155, 100, 100, 0.05);

  }

  #root, #__next {
    position: relative;
  }

  .noscroll {
    overflow: hidden;
  }
`;
