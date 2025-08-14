import React from "react";
import styles from "./FormTestPage.module.scss";


type Props = {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
};

export const FormField: React.FC<Props> = 