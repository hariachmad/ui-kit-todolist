
import { forwardRef } from 'react';
import type { ComponentProps } from 'react';
import { IonInput } from '@ionic/react';
import styles from './Input.module.scss';

type IonInputProps = ComponentProps<typeof IonInput>;

export type InputProps = Omit<IonInputProps, 'color'> & {
    variant?: 'default' | 'error';
    size?: 'sm' | 'md' | 'lg';
};

const cx = (...classes: Array<string | false | undefined>) =>
    classes.filter(Boolean).join(' ');

export const Input = forwardRef<HTMLIonInputElement, InputProps>(
    (
        {
            variant = 'default',
            size = 'md',
            className,
            ...rest
        },
        ref
    ) => {
        return (
            <IonInput
                ref={ref}
                {...rest}
                fill="outline"
                className={cx(styles.input, styles[variant], styles[size], className)}
            />
        );
    }
);

Input.displayName = 'Input';
