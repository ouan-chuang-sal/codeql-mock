import { ErrorOutline } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useEffect, useState } from "react";

export default function ErrorNotificationIcon() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Badge
      badgeContent={count}
      color="error"
      max={999}
      sx={{
        position: "absolute",
        top: "25px",
        right: "25px",
      }}
    >
      <ErrorOutline sx={{ color: "grey", fontSize: "40px" }} />
    </Badge>
  );
}
