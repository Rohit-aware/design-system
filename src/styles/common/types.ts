import type { ViewStyle } from "react-native";

export interface CommonLayoutStyles {
  readonly flexOne: ViewStyle;
  readonly flexRow: ViewStyle;
  readonly flexGrow: ViewStyle;
  readonly RowJSB: ViewStyle;
  readonly RowJCAC: ViewStyle;
  readonly RowJSBAC: ViewStyle;
  readonly RowJSAAC: ViewStyle;
  readonly RowJFEAC: ViewStyle;
  readonly RowJSEAC: ViewStyle;
  readonly RowJFSAC: ViewStyle;
  readonly centerJCAC: ViewStyle;
  readonly columnJCAC: ViewStyle;
  readonly columnJFSAC: ViewStyle;
  readonly columnJFS: ViewStyle;
  readonly alignSelfCenter: ViewStyle;
  readonly alignSelfStart: ViewStyle;
  readonly alignSelfEnd: ViewStyle;
  readonly alignSelfStretch: ViewStyle;
  readonly absoluteFill: ViewStyle;
  readonly RowWrap: ViewStyle;
  readonly RowJFS: ViewStyle;
  readonly RowJFE: ViewStyle;
  readonly columnJSB: ViewStyle;
  readonly columnJSBAC: ViewStyle;
  readonly columnJFE: ViewStyle;
  readonly columnJFEAC: ViewStyle;
  readonly columnJSA: ViewStyle;
  readonly columnJSE: ViewStyle;
  readonly alignItemsCenter: ViewStyle;
  readonly justifyContentCenter: ViewStyle;
  readonly justifyContentEnd: ViewStyle;
}

export interface CommonSpacingStyles {
  readonly _padding: (value: number) => ViewStyle;
  readonly _paddingH: (value: number) => ViewStyle;
  readonly _paddingV: (value: number) => ViewStyle;
  readonly _flexOneBg: (color: string) => ViewStyle;
  readonly _flexGrowBg: (color: string) => ViewStyle;
}

export interface ShadowParams {
  readonly shadowColor: string;
  readonly width: number;
  readonly height: number;
  readonly shadowOpacity: number;
  readonly shadowRadius: number;
  readonly elevation: number;
}

export interface CommonShadowStyles {
  readonly commonShadow: ViewStyle;
  readonly _shadow: (params: ShadowParams) => ViewStyle;
}

export interface CommonStyles
  extends CommonLayoutStyles,
    CommonSpacingStyles,
    CommonShadowStyles {}
