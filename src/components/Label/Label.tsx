import { forwardRef } from 'react';
import type { ComponentProps } from 'react';
import { IonLabel } from '@ionic/react';
import styles from './Label.module.scss';

type IonLabelProps = ComponentProps<typeof IonLabel>;

export type LabelProps = Omit<IonLabelProps, 'color'> & {
    variant?: 'default' | 'muted' | 'error';
    size?: 'sm' | 'md';
    weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
    required?: boolean;
};

const cx = (...classes: Array<string | false | undefined>) =>
    classes.filter(Boolean).join(' ');

export const Label = forwardRef<HTMLIonLabelElement, LabelProps>(
    (
        {
            variant = 'default',
            size = 'md',
            weight = 'regular',
            required = false,
            className,
            children,
            ...rest
        },
        ref
    ) => {
        return (
            <IonLabel
                ref={ref}
                {...rest}
                className={cx(
                    styles.label,
                    styles[variant],
                    styles[size],
                    styles[weight],
                    className
                )}
            >
                {children}
                {required && <span className={styles.required}>*</span>}
            </IonLabel>
        );
    }
);

Label.displayName = 'Label';