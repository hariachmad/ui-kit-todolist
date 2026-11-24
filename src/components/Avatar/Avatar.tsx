import { forwardRef, useMemo } from 'react';
import type { ComponentProps } from 'react';
import { IonAvatar } from '@ionic/react';
import styles from './Avatar.module.scss';

type IonAvatarProps = ComponentProps<typeof IonAvatar>;

export type AvatarProps = Omit<IonAvatarProps, 'style'> & {
    seed?: string;
    cartoon?: 'fun-emoji'| 'bottts'| 'adventurer'| 'big-ears'| 'micah' | 'lorelei';
    size?: 'sm' | 'md' | 'lg';
    alt?: string;
};

const cx = (...classes: Array<string | false | undefined>) =>
    classes.filter(Boolean).join(' ');

const avatarColors = [
    '#E3F2FD',
    '#E8F5E9',
    '#FFF3E0',
    '#FCE4EC',
    '#EDE7F6',
    '#E0F7FA',
    '#FFF8E1',
    '#F3E5F5',
    '#D1FAE5',
    '#FFE4E1',
    '#DBEAFE',
    '#FEF3C7',
];

export const Avatar = forwardRef<HTMLIonAvatarElement, AvatarProps>(
    (
        {
            seed = 'default',
            cartoon = 'open-peeps',
            size = 'md',
            alt = 'avatar',
            className,
            ...rest
        },
        ref
    ) => {
        const backgroundColor = useMemo(() => {
            let hash = 0;

            for (let i = 0; i < seed.length; i++) {
                hash = seed.charCodeAt(i) + ((hash << 5) - hash);
            }

            const index = Math.abs(hash) % avatarColors.length;
            return avatarColors[index];
        }, [seed]);

        const src = useMemo(
            () =>
                `https://api.dicebear.com/9.x/${cartoon}/svg?seed=${encodeURIComponent(
                    seed
                )}`,
            [cartoon, seed]
        );

        return (
            <IonAvatar
                ref={ref}
                {...rest}
                className={cx(styles.avatar, styles[size], className)}
                style={{ backgroundColor }}
            >
                <img src={src} alt={alt} loading="lazy" />
            </IonAvatar>
        );
    }
);

Avatar.displayName = 'Avatar';