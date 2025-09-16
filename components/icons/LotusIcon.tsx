import * as React from 'react';
import { SVGProps } from 'react';

export function LotusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      {...props}
    >
      <path d="M12 2C9 8 6 9 2 10c3 3 4 5 4 9 2-1 4-1 6-1s4 0 6 1c0-4 1-6 4-9-4-1-7-2-10-8z" />
    </svg>
  );
}
