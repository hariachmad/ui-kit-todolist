
import { forwardRef } from 'react';
import type { ComponentProps } from 'react';
import { IonText } from '@ionic/react';
import styles from './Text.module.scss';

type IonTextProps = ComponentProps<typeof IonText>;

export type TextProps = Omit<IonTextProps, 'color'> & {
    variant?: 'default' | 'muted' | 'error' | 'success';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    weight?: 'regular' | 'medium' | 'semibold' | 'bold';
};

const cx = (...classes: Array<string | false | undefined>) =>
    classes.filter(Boolean).join(' ');

export const Text = forwardRef<HTMLIonTextElement, TextProps>(
    (
        {
            variant = 'default',
            size = 'md',
            weight = 'regular',
            className,
            children,
            ...rest
        },
        ref
    ) => {
        return (
            <IonText
                ref={ref}
                {...rest}
                className={cx(
                    styles.text,
                    styles[variant],
                    styles[size],
                    styles[weight],
                    className
                )}
            >
                {children}
            </IonText>
        );
    }
);

Text.displayName = 'Text';
