import type { Severity } from "../../severity-tag/components/severity-tag";

export interface SecurityMessage {
  title: string;
  description: string;
  severity: Severity;
  date: string;
  source: string;
}
