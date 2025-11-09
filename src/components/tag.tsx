import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  color: string;
}

export default function Tag(props: Props) {
  return (
    <Box
      sx={{
        padding: "5px 8px",
        border: "1px solid",
        borderColor: props.color,
        borderRadius: "40px",

        fontSize: "15px",
        color: props.color,
      }}
    >
      {props.children}
    </Box>
  );
}
