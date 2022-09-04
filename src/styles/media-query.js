import { css } from "styled-components";
import breakpoints from "styles/breakpoints";

export const mq = {
  desktop: (...args) =>
    css`
      @media screen and (min-width: ${breakpoints.desktop}) {
        ${css(...args)}
      }
    `,
};
