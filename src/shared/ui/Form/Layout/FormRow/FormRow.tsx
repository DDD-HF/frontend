import React from "react";
import styles from "./FormRow.module.scss";

type Props = {
  col?: number; // default 1
  children: React.ReactNode;
  className?: string;
};

export const FormRow: React.FC<Props> = ({ col = 1, children, className }) => {
  return (
    <div
      className={`${styles.formRow} ${styles[`col-${col}`]} ${className ?? ""}`}
    >
      {children}
    </div>
  );
};
