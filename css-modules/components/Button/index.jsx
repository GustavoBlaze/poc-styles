import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

export default function Button({
  variant,
  size,
  children,
  className,
  colorScheme,
  ...rest
}) {
  const localThemeColor = {
    success: {
      text: "var(--color-white)",
      background: "var(--color-success)",
    },
    warning: {
      text: "var(--color-white)",
      background: "var(--color-warning)",
    },
    danger: {
      text: "var(--color-white)",
      background: "var(--color-danger)",
    },
  }[colorScheme] || {
    text: "var(--color-white)",
    background: "var(--color-primary)",
  };

  const variantStyles =
    { default: styles.buttonDefault, outline: styles.buttonOutline }[variant] ||
    styles.buttonDefault;

  const sizeStyles =
    {
      sm: styles.buttonSM,
      md: undefined,
      lg: styles.buttonLG,
    }[size] || "";

  const classes = classNames(
    styles.button,
    variantStyles,
    sizeStyles,
    className
  );

  return (
    <button
      className={classNames(classes)}
      style={{
        "--local-text-color": localThemeColor.text,
        "--local-background-color": localThemeColor.background,
      }}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}
