import { ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

// update text styles with additional bootstrap font styling
const textStyles = cva([], {
	variants: {
		size: {
			fs1: 'fs-1',
			fs2: 'fs-2',
			fs3: 'fs-3',
			fs4: 'fs-4',
			fs5: 'fs-5',
			fs6: 'fs-6',
		},
		weight: {
			lighter: 'fw-lighter',
			light: 'fw-light',
			normal: 'fw-normal',
			bold: 'fw-bold',
		},
	},
});

type TextStylesProps = VariantProps<typeof textStyles>;

export interface TextProps extends Omit<TextStylesProps, 'size' | 'weight'> {
	variant: `${NonNullable<TextStylesProps['size']>}/${NonNullable<TextStylesProps['weight']>}`;
	children?: ReactNode;
}

export function Text({ variant, children }: TextProps) {
	const [size, weight] = variant.split('/') as [TextStylesProps['size'], TextStylesProps['weight']];

	return <div className={textStyles({ size, weight })}>{children}</div>;
}
