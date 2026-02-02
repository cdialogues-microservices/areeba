import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { colors } from "../colors";
import DrawHeader from "./DrawHeader";
import { NAME } from "../constants";

const Winner = ({ value }) => {
  return (
    <Box
      sx={{
        backgroundColor: colors.primary,
        height: 76,
        alignContent: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.primary,
        borderRadius: 2,
        borderWidth: 2,
        borderStyle: "solid",
        flexDirection: "row",
        boxShadow: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "white",
          paddingLeft: 6,
          paddingRight: 6,
          // spacing between characters
          letterSpacing: "0.10em",
        }}
      >
        {value.msisdn}
      </Typography>
      {value.points ? (
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            color: "white",
            paddingRight: 6,
            // spacing between characters
            letterSpacing: "0.10em",
          }}
        >
          {value.points} Points
        </Typography>
      ) : undefined}
    </Box>
  );
};

const Winners = ({ values }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {values.map((value, index) => (
        <Box
          sx={{
            marginBottom: index === values.length - 1 ? 0 : 4,
          }}
        >
          <Winner value={value} />
        </Box>
      ))}
    </Box>
  );
};

const PrizeInfo = ({ values, prize, date }) => {
  return (
    <Box
      sx={{
        padding: 2,
        marginTop: 4,
      }}
    >
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
        {`"${NAME}"`}
      </Box>
      <Box
        sx={{
          fontSize: 32,
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
          fontSize: 48,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        Félicitations!
      </Box>
      <Box
        sx={{
          fontSize: 32,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
          textDecoration: "underline",
        }}
      >
        {`Les gagnants du concours "${NAME}":`}
      </Box>

      <Box
        sx={{
          fontSize: 36,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          lineHeight: "64px",
          marginTop: 4,
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        {prize.title}
      </Box>

      <Box
        sx={{
          // align content to center
          display: "flex",
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Winners values={values} />
        </Box>
      </Box>
    </Box>
  );
};

const Finished = ({ date, shortCode, values, prize }) => {
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
        <PrizeInfo values={values} date={date} prize={prize} />
      </Box>
    </Box>
  );
};

export default Finished;
