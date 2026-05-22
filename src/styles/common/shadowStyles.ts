import type { ViewStyle } from "react-native";
import type { CommonShadowStyles, ShadowParams } from "./types";

const commonShadow: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: { width: 0.5, height: 1 },
  shadowOpacity: 0.25,
  shadowRadius: 1.84,
  elevation: 1,
};

const _shadow = (params: ShadowParams): ViewStyle => ({
  shadowColor: params.shadowColor,
  shadowOffset: { width: params.width, height: params.height },
  shadowOpacity: params.shadowOpacity,
  shadowRadius: params.shadowRadius,
  elevation: params.elevation,
});

export const shadowStyles: CommonShadowStyles = {
  commonShadow,
  _shadow,
};
