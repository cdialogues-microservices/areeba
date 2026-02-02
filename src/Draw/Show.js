import * as React from "react";
import Box from "@mui/material/Box";
import CellRows from "./CellRows";
import { colors } from "../colors";
import DrawHeader from "./DrawHeader";
import { NAME } from "../constants";

const PrizeInfo = ({ values, date, prize, onAnimateFinished }) => {
  return (
    <Box
      sx={{
        padding: 2,
        marginTop: 16,
      }}
    >
      <Box
        sx={{
          fontSize: 36,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        {`"${NAME}"`}
      </Box>
      <Box
        sx={{
          fontSize: 48,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        {date}
      </Box>
      <Box
        sx={{
          fontSize: 24,
          fontWeight: "bold",
          color: colors.primary,
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        Lots:
      </Box>
      <Box
        sx={{
          fontSize: 24,
          marginTop: -3,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        {prize.title}
      </Box>
      <CellRows values={values} onAnimateFinished={onAnimateFinished} />
    </Box>
  );
};

const Show = ({ onDrawCompleted, values, date, prize, shortCode }) => {
  const onAnimateFinished = React.useCallback(() => {
    onDrawCompleted();
  }, [onDrawCompleted]);

  return (
    <Box
      sx={{
        // full screen
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        overflowY: "auto"
      }}
    >
      <DrawHeader shortCode={shortCode} />
      <Box
        sx={{
          position: "absolute",
          // center top
          top: 0,
          left: 0,
          right: 0,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PrizeInfo
          date={date}
          prize={prize}
          values={values}
          onAnimateFinished={onAnimateFinished}
        />
      </Box>
    </Box>
  );
};

export default Show;
