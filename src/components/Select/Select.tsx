
import { forwardRef } from 'react';
import type { ComponentProps } from 'react';
import { IonSelect } from '@ionic/react';
import styles from './Select.module.scss';

type IonSelectProps = ComponentProps<typeof IonSelect>;

export type SelectProps = Omit<IonSelectProps, 'color' > & {
    variant?: 'default' | 'error';
    size?: 'sm' | 'md' | 'lg';
};

const cx = (...classes: Array<string | false | undefined>) =>
    classes.filter(Boolean).join(' ');

export const Select = forwardRef<HTMLIonSelectElement, SelectProps>(
    (
        {
            variant = 'default',
            size = 'md',
            className,
            children,
            ...rest
        },
        ref
    ) => {
        return (
            <IonSelect
                ref={ref}
                {...rest}
                fill="outline"
                className={cx(
                    styles.select,
                    styles[variant],
                    styles[size],
                    className
                )}
            >
                {children}
            </IonSelect>
        );
    }
);

Select.displayName = 'Select';
