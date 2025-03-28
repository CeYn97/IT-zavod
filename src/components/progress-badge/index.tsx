import type { IprogressBadge } from "./progress-badge.types";
import "./progress-badge.css";

export default function ProgressBadge({ icon, label, value }: IprogressBadge) {
  return (
    <section className="badge">
      <img src={icon} alt="" className="badge-icon" />
      <span className="badge-label">{label}</span>
      <span className="badge-value">{`${value} Items`} </span>
    </section>
  );
}
