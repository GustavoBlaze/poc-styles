import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

export default function Container({ children, className, ...rest }) {
  return (
    <div className={classNames(styles.container, className)} {...rest}>
      {children}
    </div>
  );
}
