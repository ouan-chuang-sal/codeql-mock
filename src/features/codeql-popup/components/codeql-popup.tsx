import { Box, Button, Stack, Typography } from "@mui/material";
import SeverityTag, {
  type Severity,
} from "../../severity-tag/components/severity-tag";
import { ErrorOutline } from "@mui/icons-material";
import BranchTag from "../../branch-tag/components/branch-tag";

export default function CodeQlPopup() {
  function getSeverity(): Severity {
    const severities: Severity[] = ["critical", "high", "medium", "low"];
    const randomIndex = Math.floor(Math.random() * severities.length);

    return severities[randomIndex];
  }

  return (
    <>
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
            sx={{
              px: "10px",
              flexGrow: 1,
              textAlign: "left",
            }}
          >
            <Stack direction="row" alignItems="start" spacing="10px">
              <Typography
                sx={{
                  color: "white",
                  fontSize: "20px",

                  lineHeight: "1.2",

                  overflow: "hidden",
                }}
              >
                Vulnerability
              </Typography>
              <SeverityTag severity={getSeverity()} />
            </Stack>
            <Typography sx={{ color: "grey" }}>Description</Typography>
          </Stack>

          <Stack spacing="10px" justifyContent="space-between">
            <BranchTag>master</BranchTag>
            <Button variant="contained" color="error">
              Dismiss
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
