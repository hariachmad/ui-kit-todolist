
import type { Meta, StoryObj } from '@storybook/react';
import { IonSelectOption } from '@ionic/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'error'],
            description: 'Select visual variant',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Select size',
        },
        interface: {
            control: 'select',
            options: ['popover', 'alert', 'action-sheet'],
            description: 'Dropdown interface',
        },
        placeholder: {
            control: 'text',
        },
        disabled: {
            control: 'boolean',
        },
        multiple: {
            control: 'boolean',
        },
        required: {
            control: 'boolean',
        },
        label: {
            control: 'text',
        },
    },
    args: {
        variant: 'default',
        size: 'md',
        interface: 'popover',
        placeholder: 'Choose workshop',
        disabled: false,
        multiple: false,
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

const workshopOptions = (
    <>
        <IonSelectOption value="workshop-1">
            Workshop 1
        </IonSelectOption>
        <IonSelectOption value="workshop-2">
            Workshop 2
        </IonSelectOption>
        <IonSelectOption value="workshop-3">
            Workshop 3
        </IonSelectOption>
    </>
);

export const Default: Story = {
    render: (args) => (
        <div style={{ width: '320px' }}>
            <Select {...args}>
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const Small: Story = {
    args: {
        size: 'sm',
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <Select {...args}>
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const Medium: Story = {
    args: {
        size: 'md',
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <Select {...args}>
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <Select {...args}>
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const Error: Story = {
    args: {
        variant: 'error',
        placeholder: 'Please select workshop',
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <Select {...args}>
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: 'Workshop unavailable',
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <Select {...args}>
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const Required: Story = {
    args: {
        required: true,
        placeholder: 'Select required workshop',
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <Select {...args}>
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const Popover: Story = {
    args: {
        interface: 'popover',
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <Select {...args}>
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const Alert: Story = {
    args: {
        interface: 'alert',
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <Select {...args}>
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const ActionSheet: Story = {
    args: {
        interface: 'action-sheet',
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <Select {...args}>
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const Multiple: Story = {
    args: {
        multiple: true,
        placeholder: 'Choose machines',
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <Select {...args}>
                <IonSelectOption value="machine-1">
                    Machine 1
                </IonSelectOption>
                <IonSelectOption value="machine-2">
                    Machine 2
                </IonSelectOption>
                <IonSelectOption value="machine-3">
                    Machine 3
                </IonSelectOption>
            </Select>
        </div>
    ),
};

export const WithDefaultValue: Story = {
    args: {
        value: 'workshop-2',
    },
    render: (args) => (
        <div style={{ width: '320px' }}>
            <Select {...args}>
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const AllSizes: Story = {
    render: () => (
        <div style={{ width: '320px', display: 'grid', gap: '16px' }}>
            <Select
                size="sm"
                label="Small"
                placeholder="Small select"
            >
                {workshopOptions}
            </Select>

            <Select
                size="md"
                label="Medium"
                placeholder="Medium select"
            >
                {workshopOptions}
            </Select>

            <Select
                size="lg"
                label="Large"
                placeholder="Large select"
            >
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ width: '320px', display: 'grid', gap: '16px' }}>
            <Select
                variant="default"
                label="Default"
                placeholder="Default select"
            >
                {workshopOptions}
            </Select>

            <Select
                variant="error"
                label="Error"
                placeholder="Error select"
            >
                {workshopOptions}
            </Select>
        </div>
    ),
};

export const MachineSelection: Story = {
    render: () => (
        <div style={{ width: '320px', display: 'grid', gap: '16px' }}>
            <Select
                label="Workshop"
                placeholder="Choose workshop"
                interface="popover"
            >
                <IonSelectOption value="workshop-a">
                    Workshop A
                </IonSelectOption>
                <IonSelectOption value="workshop-b">
                    Workshop B
                </IonSelectOption>
            </Select>

            <Select
                label="Machine"
                placeholder="Choose machine"
                interface="popover"
                multiple
            >
                <IonSelectOption value="machine-1">
                    CNC Machine 1
                </IonSelectOption>
                <IonSelectOption value="machine-2">
                    CNC Machine 2
                </IonSelectOption>
                <IonSelectOption value="machine-3">
                    CNC Machine 3
                </IonSelectOption>
            </Select>
        </div>
    ),
};
