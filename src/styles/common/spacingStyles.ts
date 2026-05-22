import type { ViewStyle } from "react-native";
import type { CommonSpacingStyles } from "./types";

const _padding = (value: number): ViewStyle => ({
  padding: value,
});

const _paddingH = (value: number): ViewStyle => ({
  paddingHorizontal: value,
});

const _paddingV = (value: number): ViewStyle => ({
  paddingVertical: value,
});

const _flexOneBg = (color: string): ViewStyle => ({
  flex: 1,
  backgroundColor: color,
});

const _flexGrowBg = (color: string): ViewStyle => ({
  flexGrow: 1,
  backgroundColor: color,
});

export const spacingStyles: CommonSpacingStyles = {
  _padding,
  _paddingH,
  _paddingV,
  _flexOneBg,
  _flexGrowBg,
};
