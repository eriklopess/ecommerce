'use client';
import React, { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'text-white font-bold py-2 px-4 rounded',
  variants: {
    schema: {
      primary: 'bg-blue-500',
      secondary: 'bg-gray-500',
    }
  },
  defaultVariants: {
    schema: 'primary'
  }
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button> & {
  text: string
} 

export default function Button({ text, schema, className, ...props }: ButtonProps) {
  return (
    <button className={button( { schema, className } )} {...props}>{text}</button>
  );
}
