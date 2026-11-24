
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
    title: 'Components/Label',
    component: Label,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'muted', 'error'],
        },
        size: {
            control: 'radio',
            options: ['sm', 'md'],
        },
        weight: {
            control: 'select',
            options: [
                'light',
                'regular',
                'medium',
                'semibold',
                'bold',
            ],
        },
        required: {
            control: 'boolean',
        },
    },
    args: {
        children: 'Full Name',
        variant: 'default',
        size: 'md',
        weight: 'medium',
        required: false,
    },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Light: Story = {
    args: {
        children: 'Light Label',
        weight: 'light',
    },
};

export const Regular: Story = {
    args: {
        children: 'Regular Label',
        weight: 'regular',
    },
};

export const Medium: Story = {
    args: {
        children: 'Medium Label',
        weight: 'medium',
    },
};

export const Semibold: Story = {
    args: {
        children: 'Semibold Label',
        weight: 'semibold',
    },
};

export const Bold: Story = {
    args: {
        children: 'Bold Label',
        weight: 'bold',
    },
};

export const Muted: Story = {
    args: {
        children: 'Helper Text',
        variant: 'muted',
        size: 'sm',
        weight: 'light',
    },
};

export const Error: Story = {
    args: {
        children: 'Email is required',
        variant: 'error',
    },
};

export const Required: Story = {
    args: {
        children: 'Email Address',
        required: true,
    },
};

export const Small: Story = {
    args: {
        children: 'Small Label',
        size: 'sm',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <Label variant="default" weight="medium">
                Default Label
            </Label>

            <Label variant="muted" weight="regular">
                Muted Label
            </Label>

            <Label variant="error" weight="regular">
                Error Label
            </Label>

            <Label variant="default" weight="light">
                Light Label
            </Label>

            <Label variant="default" weight="semibold">
                Semibold Label
            </Label>

            <Label variant="default" required>
                Required Label
            </Label>
        </div>
    ),
};
