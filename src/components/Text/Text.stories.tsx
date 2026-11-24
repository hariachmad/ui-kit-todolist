
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'muted', 'error', 'success'],
            description: 'Text color variant',
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg'],
            description: 'Text size',
        },
        weight: {
            control: 'select',
            options: ['regular', 'medium', 'semibold', 'bold'],
            description: 'Font weight',
        },
        children: {
            control: 'text',
            description: 'Text content',
        },
    },
    args: {
        variant: 'default',
        size: 'md',
        weight: 'regular',
        children: 'This is a sample text.',
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Muted: Story = {
    args: {
        variant: 'muted',
        children: 'This is a muted description.',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        children: 'Something went wrong.',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Operation completed successfully.',
    },
};

export const ExtraSmall: Story = {
    args: {
        size: 'xs',
        children: 'Extra small text',
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Small text',
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
        children: 'Medium text',
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Large text',
    },
};

export const Regular: Story = {
    args: {
        weight: 'regular',
        children: 'Regular font weight',
    },
};

export const MediumWeight: Story = {
    args: {
        weight: 'medium',
        children: 'Medium font weight',
    },
};

export const Semibold: Story = {
    args: {
        weight: 'semibold',
        children: 'Semibold font weight',
    },
};

export const Bold: Story = {
    args: {
        weight: 'bold',
        children: 'Bold font weight',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '12px', width: '320px' }}>
            <Text variant="default">
                Default text
            </Text>

            <Text variant="muted">
                Muted description
            </Text>

            <Text variant="error">
                Error message
            </Text>

            <Text variant="success">
                Success message
            </Text>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '12px', width: '320px' }}>
            <Text size="xs">Extra small text (XS)</Text>
            <Text size="sm">Small text (SM)</Text>
            <Text size="md">Medium text (MD)</Text>
            <Text size="lg">Large text (LG)</Text>
        </div>
    ),
};

export const AllWeights: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '12px', width: '320px' }}>
            <Text weight="regular">Regular weight (400)</Text>
            <Text weight="medium">Medium weight (500)</Text>
            <Text weight="semibold">Semibold weight (600)</Text>
            <Text weight="bold">Bold weight (700)</Text>
        </div>
    ),
};

export const DescriptionExample: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '4px', width: '320px' }}>
            <Text size="sm" weight="semibold">
                Email Address
            </Text>

            <Text variant="muted" size="xs">
                Enter your active email address. We will use this email
                to send account notifications.
            </Text>
        </div>
    ),
};

export const ValidationExample: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '8px', width: '320px' }}>
            <Text variant="error" size="xs">
                Email address is required.
            </Text>

            <Text variant="success" size="xs">
                Email address is available.
            </Text>
        </div>
    ),
};
