import type { CommonStyles } from "./types";
import { layoutStyles } from "./layoutStyles";
import { spacingStyles } from "./spacingStyles";
import { shadowStyles } from "./shadowStyles";

export function createCommonStyles(): CommonStyles {
  return Object.freeze<CommonStyles>({
    ...layoutStyles,
    ...spacingStyles,
    ...shadowStyles,
  });
}

export const commonStyles: CommonStyles = createCommonStyles();
