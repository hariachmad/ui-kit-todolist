import { IonProgressBar } from '@ionic/react';
import styles from './ProgressBar.module.scss';

export type ProgressBarProps = {
    value?: number;
    size?: 'sm' | 'md';
    className?: string;
};

const cx = (...classes: Array<string | false | undefined>) =>
    classes.filter(Boolean).join(' ');

export const ProgressBar = ({ value = 0, size = 'md', className }: ProgressBarProps) => {
    const percent = Math.min(100, Math.max(0, value));
    const isComplete = percent >= 100;
    const isEmpty = percent === 0;

    return (
        <IonProgressBar
            value={percent / 100}
            className={cx(
                styles.progressBar,
                styles[size],
                isComplete ? styles.complete : styles.progress,
                isEmpty ? styles.empty : styles.progress,
                className
            )}
        />
    );
};