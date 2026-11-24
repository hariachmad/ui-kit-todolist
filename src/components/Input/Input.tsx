import { forwardRef } from 'react';
import type { ComponentProps } from 'react';
import { IonInput, IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import styles from './Input.module.scss';

type IonInputProps = ComponentProps<typeof IonInput>;

export type InputProps = Omit<IonInputProps, 'color'> & {
    variant?: 'default' | 'error' | 'search';
    size?: 'sm' | 'md' | 'lg';
    /** Memaksa input memenuhi lebar container. Variant `search` otomatis full width. */
    fullWidth?: boolean;
};

const cx = (...classes: Array<string | false | undefined>) =>
    classes.filter(Boolean).join(' ');

export const Input = forwardRef<HTMLIonInputElement, InputProps>(
    (
        {
            variant = 'default',
            size = 'md',
            fullWidth = false,
            className,
            children,
            ...rest
        },
        ref
    ) => {
        const isSearch = variant === 'search';

        return (
            <IonInput
                ref={ref}
                type={isSearch ? 'search' : undefined}
                clearInput={isSearch}
                {...rest}
                fill="outline"
                className={cx(
                    styles.input,
                    styles[variant],
                    styles[size],
                    (fullWidth || isSearch) && styles.fullWidth,
                    className
                )}
            >
                {isSearch && (
                    <IonIcon
                        slot="start"
                        icon={searchOutline}
                        aria-hidden="true"
                        className={styles.searchIcon}
                    />
                )}
                {children}
            </IonInput>
        );
    }
);

Input.displayName = 'Input';