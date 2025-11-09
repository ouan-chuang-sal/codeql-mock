import { useEffect, useState } from "react";
import Tag from "../../../components/tag";

interface Props {
  severity: Severity;
}

const severityTags: Map<Severity, TagProps> = new Map();
severityTags.set("critical", { color: "rgba(191, 0, 0, 1)", text: "Critical" });
severityTags.set("high", { color: "rgba(191, 60, 0, 1)", text: "High" });
severityTags.set("medium", { color: "rgba(255, 226, 6, 1)", text: "Medium" });
severityTags.set("low", { color: "rgba(163, 163, 163, 1)", text: "Low" });

export default function SeverityTag(props: Props) {
  const [tag, setTag] = useState<TagProps>();

  useEffect(() => {
    setTag(severityTags.get(props.severity));
  }, [props.severity]);

  return tag && <Tag color={tag.color}>{tag.text}</Tag>;
}

export type Severity = "critical" | "high" | "medium" | "low";

interface TagProps {
  color: string;
  text: string;
}
