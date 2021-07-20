import styled, { css } from "styled-components";

const chooseButtonColorScheme = ({ colorScheme }) => {
  if (!colorScheme) {
    return css`
      --local-text-color: var(--color-white);
      --local-background-color: var(--color-primary);
    `;
  }

  return css`
    --local-text-color: var(--color-white);
    --local-background-color: var(--color-${colorScheme});
  `;
};

const chooseButtonVariant = ({ variant = "default" }) => {
  return (
    {
      default: css`
        color: var(--local-text-color);
        background: var(--local-background-color);
        border-color: var(--local-background-color);
      `,
      outline: css`
        background: transparent;
        border-color: var(--local-background-color);
        color: var(--local-background-color);
      `,
    }[variant] || ""
  );
};

const chooseButtonSize = ({ size }) => {
  return (
    {
      sm: css`
        font-size: 1.4rem;
        line-height: 1.6rem;
      `,
      lg: css`
        font-size: 2.4rem;
        line-height: 3.2rem;
      `,
    }[size] || ""
  );
};

export default styled.button`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: bold;

  border: 0;
  border-radius: 4px;

  padding: 0.8rem 1.6rem;

  border: 1px solid transparent;

  ${chooseButtonColorScheme}
  ${chooseButtonVariant}
  ${chooseButtonSize}
`;
