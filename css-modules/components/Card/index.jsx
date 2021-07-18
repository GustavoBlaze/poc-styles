import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

export default function Card({ children, className, ...rest }) {
  return (
    <div className={classNames(styles.card, className)} {...rest}>
      {children}
    </div>
  );
}
