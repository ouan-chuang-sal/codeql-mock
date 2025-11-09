import { Box, Stack, Typography, Button } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import VulnerabilityHeader from "./vulnerability-header";
import type { SecurityMessage } from "../types/security-message";
import BranchTag from "../../branch-tag/components/branch-tag";
import { useState } from "react";

interface Props {
  message: SecurityMessage;
  onDismiss: () => void;
}

export default function CodeQlPopup(props: Props) {
  const [isDismissing, setIsDismissing] = useState(false);

  const handleDismiss = () => {
    setIsDismissing(true);
    setTimeout(() => {
      setIsDismissing(false);
      props.onDismiss();
    }, 300); // Match the animation duration
  };

  return (
    <Box
      sx={{
        width: "70vw",
        padding: "20px",
        background: "#151b23",
        border: "1px solid grey",
        borderRadius: "20px",
        transform: isDismissing ? "scale(0)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <ErrorOutline sx={{ color: "#9198a1" }} />
        <Stack
          spacing="10px"
          sx={{
            px: "10px",
            flexGrow: 1,
            textAlign: "left",
          }}
        >
          <VulnerabilityHeader message={props.message} />
          <Typography sx={{ color: "grey", fontSize: "14px" }}>
            {props.message.description}
          </Typography>
          <Typography sx={{ color: "grey", fontSize: "14px" }}>
            • Detected by CodeQL in{" "}
            <strong>
              <span style={{ color: "#b0b0b0" }}>{props.message.source}</span>
            </strong>
          </Typography>
        </Stack>
        <Stack spacing="10px" justifyContent="space-between">
          <BranchTag>master</BranchTag>
          <Button variant="contained" color="error" onClick={handleDismiss}>
            Dismiss
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
