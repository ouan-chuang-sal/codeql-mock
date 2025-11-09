import { Box, Stack, Typography, Button } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import VulnerabilityHeader from "./vulnerability-header";
import type { SecurityMessage } from "../types/security-message";
import BranchTag from "../../branch-tag/components/branch-tag";

interface Props {
  message: SecurityMessage;
  onDismiss: () => void;
}

export default function CodeQlPopup(props: Props) {
  return (
    <Box
      sx={{
        width: "70vw",
        padding: "20px",
        background: "#151b23",
        border: "1px solid grey",
        borderRadius: "20px",
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
          <VulnerabilityHeader title={props.message.title} />
          <Typography sx={{ color: "grey" }}>
            {props.message.description}
          </Typography>
        </Stack>
        <Stack spacing="10px" justifyContent="space-between">
          <BranchTag>master</BranchTag>
          <Button variant="contained" color="error" onClick={props.onDismiss}>
            Dismiss
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
