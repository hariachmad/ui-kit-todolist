
import { forwardRef, useState } from 'react';
import type { ComponentProps } from 'react';

import {
  IonInput,
  IonModal,
  IonDatetime,
  IonButton,
  IonIcon,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';

import { calendarOutline } from 'ionicons/icons';

import styles from './DatePicker.module.scss';

type IonInputProps = ComponentProps<typeof IonInput>;

export type DatePickerProps = Omit<
  IonInputProps,
  'color' | 'size' | 'value' | 'onIonChange'
> & {
  variant?: 'default' | 'error';
  size?: 'sm' | 'md' | 'lg';
  value?: string;
  onValueChange?: (value: string) => void;
  presentation?: 'date' | 'date-time' | 'time' | 'month' | 'year';
  min?: string;
  max?: string;
};

const cx = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ');

export const DatePicker = forwardRef<
  HTMLIonInputElement,
  DatePickerProps
>(
  (
    {
      variant = 'default',
      size = 'md',
      value,
      onValueChange,
      presentation = 'date',
      min,
      max,
      disabled,
      placeholder = 'Select date',
      className,
      ...rest
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(value ?? '');

    const displayValue = value ?? selectedDate;

    const formatDate = (date: string) => {
      if (!date) return '';

      const parsedDate = new Date(date);

      if (Number.isNaN(parsedDate.getTime())) return date;

      return new Intl.DateTimeFormat('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }).format(parsedDate);
    };

    const handleConfirm = () => {
      onValueChange?.(selectedDate);
      setIsOpen(false);
    };

    return (
      <>
        <IonInput
          ref={ref}
          {...rest}
          value={formatDate(displayValue)}
          placeholder={placeholder}
          readonly
          disabled={disabled}
          fill="outline"
          className={cx(
            styles.datePicker,
            styles[variant],
            styles[size],
            className
          )}
          onClick={() => !disabled && setIsOpen(true)}
        >
          <IonIcon
            icon={calendarOutline}
            slot="end"
            className={styles.calendarIcon}
          />
        </IonInput>

        <IonModal
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)}
          className={styles.modal}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Select Date</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <IonDatetime
              presentation={presentation}
              value={selectedDate}
              min={min}
              max={max}
              onIonChange={(event) => {
                setSelectedDate(event.detail.value as string);
              }}
            />

            <div className={styles.actions}>
              <IonButton
                fill="outline"
                color="medium"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </IonButton>

              <IonButton onClick={handleConfirm}>
                Done
              </IonButton>
            </div>
          </IonContent>
        </IonModal>
      </>
    );
  }
);

DatePicker.displayName = 'DatePicker';
