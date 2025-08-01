import React from "react";
import styles from "./FormTestPage.module.scss";

type Props = {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
};

const CustomDateInput = React.forwardRef<HTMLInputElement, Props>(
  ({ value, onClick, placeholder }, ref) => (
    <div className={styles.customDatepicker} onClick={onClick}>
      <input
        type="text"
        readOnly
        value={value}
        ref={ref}
        className={styles.customDatepicker__input}
        placeholder={placeholder}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="23"
        height="23"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        className={styles.customDatepicker__icon}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10m-13 6a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10z"
        />
      </svg>
    </div>
  )
);

CustomDateInput.displayName = "CustomDateInput";

export default CustomDateInput;
