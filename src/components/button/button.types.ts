export interface iButton {
  text: string;
  type: "main" | "progress";
  onClick: () => void;
  classNames?: string[];
}
