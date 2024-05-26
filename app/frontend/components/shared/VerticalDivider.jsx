import React from 'react';

export default function VerticalDivider({
  className = "",
  ...props
}) {
  return (
    <div className={`${className} h-6 w-px`} />
  );
}