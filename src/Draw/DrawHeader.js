import React from "react";
import { Box } from "@mui/material";
import { colors } from "../colors";

const DrawHeader = ({ shortCode }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: 24,
        left: 24,
        top: 24,
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        {shortCode && (
          <Box
            sx={{
              backgroundColor: colors.primary,
              borderRadius: 2,
              boxShadow: 4,
              height: 48,
              // align items in center
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                fontSize: 28,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                lineHeight: "64px",
                paddingLeft: 6,
                paddingRight: 6,
              }}
            >
              {shortCode}
            </Box>
          </Box>
        )}
      </Box>
      <img
        src="/areeba-logo.jpg"
        alt="logo"
        width="100"
        height="100"
        style={{ objectFit: "contain" }}
      />
    </Box>
  );
};

export default DrawHeader;
