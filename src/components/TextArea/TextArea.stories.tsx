
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { useState } from 'react';

import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/Textarea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    onIonInput: fn(),
    onIonChange: fn(),
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
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    autoGrow: {
      control: 'boolean',
    },
    counter: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    rows: 4,
    autoGrow: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Textarea',
    placeholder: 'Enter description...',
    rows: 3,
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Textarea',
    placeholder: 'Enter description...',
    rows: 4,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Textarea',
    placeholder: 'Enter description...',
    rows: 6,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    label: 'Description',
    placeholder: 'Enter description...',
    errorText: 'Description is required',
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    placeholder: 'This field is disabled',
    disabled: true,
    value: 'This description cannot be edited.',
    rows: 4,
  },
};

export const Readonly: Story = {
  args: {
    label: 'Readonly Textarea',
    readonly: true,
    value: 'This description can only be read.',
    rows: 4,
  },
};

export const Required: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter required description...',
    required: true,
    rows: 4,
  },
};

export const WithCounter: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    maxlength: 500,
    counter: true,
    rows: 4,
  },
};

export const AutoGrow: Story = {
  args: {
    label: 'Description',
    placeholder: 'Start typing...',
    autoGrow: true,
    rows: 2,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Maintenance Description',
    value:
      'Perform routine maintenance on the machine, including lubrication, inspection, and replacement of worn components.',
    rows: 5,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px' }}>
      <TextArea
        size="sm"
        label="Small"
        placeholder="Small textarea..."
      />
      <TextArea
        size="md"
        label="Medium"
        placeholder="Medium textarea..."
      />
      <TextArea
        size="lg"
        label="Large"
        placeholder="Large textarea..."
      />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '20px' }}>
      <TextArea
        variant="default"
        label="Default"
        placeholder="Default textarea..."
      />
      <TextArea
        variant="error"
        label="Error"
        placeholder="Error textarea..."
      />
    </div>
  ),
};

export const Interactive: Story = {
  render: function InteractiveStory() {
    const [description, setDescription] = useState('');

    return (
      <div style={{ display: 'grid', gap: '12px' }}>
        <TextArea
          label="Description"
          placeholder="Enter description..."
          value={description}
          onIonInput={(event) =>
            setDescription(event.detail.value ?? '')
          }
          autoGrow
          rows={4}
          maxlength={500}
          counter
        />

        <div>
          <strong>Current value:</strong>
          <p>{description || 'No description entered yet.'}</p>
        </div>
      </div>
    );
  },
};
