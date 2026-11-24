
import { forwardRef, useRef, useState } from 'react';
import type { ComponentProps } from 'react';
import { IonIcon, IonText } from '@ionic/react';
import { imageOutline } from 'ionicons/icons';
import styles from './Attachment.module.scss';

type DivProps = ComponentProps<'div'>;

export type AttachmentProps = Omit<
    DivProps,
    'onChange' | 'onDrop'
> & {
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    maxFiles?: number;
    onFilesChange?: (files: File[]) => void;
};

const cx = (...classes: Array<string | false | undefined>) =>
    classes.filter(Boolean).join(' ');

export const Attachment = forwardRef<HTMLDivElement, AttachmentProps>(
    (
        {
            accept,
            multiple = false,
            disabled = false,
            maxFiles,
            onFilesChange,
            className,
            ...rest
        },
        ref
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const [isDragging, setIsDragging] = useState(false);

        const handleFiles = (fileList: FileList | null) => {
            if (!fileList || disabled) return;

            let files = Array.from(fileList);

            if (maxFiles) {
                files = files.slice(0, maxFiles);
            }

            if (!multiple) {
                files = files.slice(0, 1);
            }

            onFilesChange?.(files);

            if (inputRef.current) {
                inputRef.current.value = '';
            }
        };

        const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();
            setIsDragging(false);

            if (disabled) return;

            handleFiles(event.dataTransfer.files);
        };

        return (
            <div
                ref={ref}
                {...rest}
                className={cx(
                    styles.attachment,
                    isDragging && styles.dragging,
                    disabled && styles.disabled,
                    className
                )}
                onDragOver={(event) => {
                    event.preventDefault();
                    if (!disabled) setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => {
                    if (!disabled) inputRef.current?.click();
                }}
                role="button"
                tabIndex={disabled ? -1 : 0}
                aria-disabled={disabled}
                onKeyDown={(event) => {
                    if (
                        !disabled &&
                        (event.key === 'Enter' || event.key === ' ')
                    ) {
                        event.preventDefault();
                        inputRef.current?.click();
                    }
                }}
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    disabled={disabled}
                    className={styles.fileInput}
                    onChange={(event) => handleFiles(event.target.files)}
                />

                <IonIcon
                    icon={imageOutline}
                    className={styles.icon}
                    aria-hidden="true"
                />

                <IonText className={styles.description}>
                    Drag & Drop files here
                </IonText>

                <IonText className={styles.separator}>
                    or
                </IonText>

                <IonText className={styles.browse}>
                    browse from device
                </IonText>
            </div>
        );
    }
);

Attachment.displayName = 'Attachment';
