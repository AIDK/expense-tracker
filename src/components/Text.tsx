import { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";

const textStyles = cva([], {
  variants: {
    size: {
      small: "fs-6",
      medium: "fs-3",
      large: "fs-1",
    },
    weight: {
      light: "fw-light",
      normal: "fw-normal",
      bold: "fw-bold",
    },
  },
});

type TextStylesProps = VariantProps<typeof textStyles>;

export interface TextProps extends Omit<TextStylesProps, "size" | "weight"> {
  variant: `${NonNullable<TextStylesProps["size"]>}/${NonNullable<
    TextStylesProps["weight"]
  >}`;
  children?: ReactNode;
}

export function Text({ variant, children }: TextProps) {
  const [size, weight] = variant.split("/") as [
    TextStylesProps["size"],
    TextStylesProps["weight"]
  ];

  return <div className={textStyles({ size, weight })}>{children}</div>;
}
