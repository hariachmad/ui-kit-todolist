import { forwardRef } from 'react';
import type { ComponentProps } from 'react';
import { IonBadge } from '@ionic/react';
import styles from './Badge.module.scss';

type IonBadgeProps = ComponentProps<typeof IonBadge>;

export type BadgeProps = Omit<IonBadgeProps, 'color'> & {
  variant?: 'date' | 'info' | 'warning' | 'alert';
  size?: 'sm' | 'md';
};

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ');

export const Badge = forwardRef<HTMLIonBadgeElement, BadgeProps>(
  ({ variant = 'info', size = 'md', className, children, ...rest }, ref) => {
    return (
      <IonBadge
        ref={ref}
        {...rest}
        className={cx(styles.badge, styles[variant], styles[size], className)}
      >
        {children}
      </IonBadge>
    );
  }
);

Badge.displayName = 'Badge';