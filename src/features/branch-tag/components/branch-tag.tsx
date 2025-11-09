import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";

export default function BranchTag(props: PropsWithChildren) {
  return (
    <Box
      sx={{
        padding: "5px 10px",

        background: "#182639",
        borderRadius: "5px",

        color: "#9198a1",
      }}
    >
      {props.children}
    </Box>
  );
}
