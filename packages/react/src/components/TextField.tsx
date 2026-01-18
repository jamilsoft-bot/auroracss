import type { InputHTMLAttributes, ReactNode } from 'react';
import { useId } from 'react';
import { cn } from '../utils/cn';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
};

export const TextField = ({
  label,
  description,
  error,
  size = 'md',
  className,
  id,
  ...props
}: TextFieldProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [descriptionId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={cn('aurora-field', className)} data-state={error ? 'error' : undefined}>
      {label ? (
        <label className="aurora-field-label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={cn('aurora-input', size !== 'md' ? size : undefined, error ? 'is-invalid' : undefined)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        data-state={error ? 'error' : undefined}
        {...props}
      />
      {description ? (
        <span className="aurora-field-help" id={descriptionId}>
          {description}
        </span>
      ) : null}
      {error ? (
        <span className="aurora-field-error" id={errorId}>
          {error}
        </span>
      ) : null}
    </div>
  );
};
