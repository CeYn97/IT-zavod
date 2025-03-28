import type { iButton } from "./button.types";
import "./button.css";

export default function Button({ text, type, onClick, classNames }: iButton) {
  if (type === "progress") {
    return (
      <button
        className={"progress-button " + classNames?.join(" ")}
        onClick={onClick}
      >
        {text}
      </button>
    );
  } else if (type === "main") {
    return (
      <button
        className={"button-main " + classNames?.join(" ")}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}
