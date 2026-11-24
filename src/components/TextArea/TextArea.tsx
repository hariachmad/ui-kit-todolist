
import { forwardRef } from 'react';
import type { ComponentProps } from 'react';
import { IonTextarea } from '@ionic/react';
import styles from './Textarea.module.scss';

type IonTextareaProps = ComponentProps<typeof IonTextarea>;

export type TextAreaProps = Omit<IonTextareaProps, 'color' | 'size'> & {
    variant?: 'default' | 'error';
    size?: 'sm' | 'md' | 'lg';
};

const cx = (...classes: Array<string | false | undefined>) =>
    classes.filter(Boolean).join(' ');

export const TextArea = forwardRef<HTMLIonTextareaElement, TextAreaProps>(
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
            <IonTextarea
                ref={ref}
                {...rest}
                fill="outline"
                className={cx(
                    styles.textarea,
                    styles[variant],
                    styles[size],
                    className
                )}
            />
        );
    }
);

TextArea.displayName = 'Textarea';
