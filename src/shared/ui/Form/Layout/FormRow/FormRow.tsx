import React from "react";
import styles from "./FormRow.module.scss";

type Props = {
  col?: number; // default 1
  children: React.ReactNode;
};

// const FormRow = ({ col = 1, children }: Props) => {
//   return (
//     <div className={`${styles.formRow} ${styles[`col-${col}`]}`}>
//       {children}
//     </div>
//   );
// };
// export default FormRow;
export const FormRow: React.FC<Props> = ({ col = 1, children }) => {
  return (
    <div className={`${styles.formRow} ${styles[`col-${col}`]}`}>
      {children}
    </div>
  );
};
