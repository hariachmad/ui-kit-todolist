
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { useState } from 'react';

import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    onValueChange: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    presentation: {
      control: 'select',
      options: ['date', 'date-time', 'time', 'month', 'year'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    min: {
      control: 'text',
    },
    max: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: 'Date',
    placeholder: 'Select date',
    presentation: 'date',
  },
};

export const Small: Story = {
  args: {
    label: 'Small DatePicker',
    size: 'sm',
    placeholder: 'Select date',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium DatePicker',
    size: 'md',
    placeholder: 'Select date',
  },
};

export const Large: Story = {
  args: {
    label: 'Large DatePicker',
    size: 'lg',
    placeholder: 'Select date',
  },
};

export const Error: Story = {
  args: {
    label: 'Maintenance Date',
    variant: 'error',
    placeholder: 'Select date',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled DatePicker',
    disabled: true,
    value: '2026-11-24',
    placeholder: 'Select date',
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Maintenance Date',
    value: '2026-11-24',
    placeholder: 'Select date',
  },
};

export const DateTime: Story = {
  args: {
    label: 'Date & Time',
    presentation: 'date-time',
    placeholder: 'Select date and time',
  },
};

export const Time: Story = {
  args: {
    label: 'Maintenance Time',
    presentation: 'time',
    placeholder: 'Select time',
  },
};

export const Month: Story = {
  args: {
    label: 'Select Month',
    presentation: 'month',
    placeholder: 'Select month',
  },
};

export const Year: Story = {
  args: {
    label: 'Select Year',
    presentation: 'year',
    placeholder: 'Select year',
  },
};

export const WithMinMax: Story = {
  args: {
    label: 'Maintenance Date',
    min: '2026-01-01',
    max: '2026-12-31',
    placeholder: 'Select date',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px' }}>
      <DatePicker
        label="Small"
        size="sm"
        placeholder="Select date"
      />

      <DatePicker
        label="Medium"
        size="md"
        placeholder="Select date"
      />

      <DatePicker
        label="Large"
        size="lg"
        placeholder="Select date"
      />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px' }}>
      <DatePicker
        label="Default"
        variant="default"
        placeholder="Select date"
      />

      <DatePicker
        label="Error"
        variant="error"
        placeholder="Select date"
      />
    </div>
  ),
};

export const AllPresentations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px' }}>
      <DatePicker
        label="Date"
        presentation="date"
        placeholder="Select date"
      />

      <DatePicker
        label="Date & Time"
        presentation="date-time"
        placeholder="Select date and time"
      />

      <DatePicker
        label="Time"
        presentation="time"
        placeholder="Select time"
      />

      <DatePicker
        label="Month"
        presentation="month"
        placeholder="Select month"
      />

      <DatePicker
        label="Year"
        presentation="year"
        placeholder="Select year"
      />
    </div>
  ),
};

export const Interactive: Story = {
  render: function InteractiveStory() {
    const [date, setDate] = useState('');

    return (
      <div style={{ display: 'grid', gap: '12px' }}>
        <DatePicker
          label="Maintenance Date"
          placeholder="Select maintenance date"
          value={date}
          onValueChange={setDate}
          presentation="date"
        />

        <div>
          <strong>Selected value:</strong>
          <p>{date || 'No date selected'}</p>
        </div>
      </div>
    );
  },
};
