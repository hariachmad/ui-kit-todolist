import { forwardRef } from 'react';
import { IonButton, IonSpinner } from '@ionic/react';
import type { ComponentProps } from 'react';
import styles from './Button.module.scss';

type IonButtonProps = ComponentProps<typeof IonButton>;

export type ButtonProps = Omit<IonButtonProps, 'color' | 'size' | 'fill'> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'|'add';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
};

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ');

export const Button = forwardRef<HTMLIonButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      disabled,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <IonButton
        ref={ref}
        {...rest}
        disabled={disabled || loading}
        expand={fullWidth ? 'block' : undefined}
        aria-busy={loading || undefined}
        className={cx(
          styles.button,
          styles[variant],
          styles[size],
          loading && styles.loading,
          className
        )}
      >
        {loading && <IonSpinner name="crescent" slot="start" className={styles.spinner} />}
        {children}
      </IonButton>
    );
  }
);

Button.displayName = 'Button';