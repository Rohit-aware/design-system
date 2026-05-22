import type { CommonLayoutStyles } from "./types";

export const layoutStyles: CommonLayoutStyles = {
  flexOne: { flex: 1 },
  flexRow: { flexDirection: "row" },
  flexGrow: { flexGrow: 1 },
  RowJSB: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  RowJCAC: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  RowJSBAC: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  RowJSAAC: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  RowJFEAC: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  RowJSEAC: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  RowJFSAC: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  centerJCAC: {
    justifyContent: "center",
    alignItems: "center",
  },
  columnJCAC: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  columnJFSAC: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  columnJFS: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  alignSelfCenter: { alignSelf: "center" },
  alignSelfStart: { alignSelf: "flex-start" },
  alignSelfEnd: { alignSelf: "flex-end" },
  alignSelfStretch: { alignSelf: "stretch" },
  absoluteFill: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  RowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  RowJFS: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  RowJFE: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  columnJSB: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  columnJSBAC: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  columnJFE: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  columnJFEAC: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  columnJSA: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  columnJSE: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentEnd: {
    justifyContent: "flex-end",
  },
};
