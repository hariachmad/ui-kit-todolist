
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Attachment } from './Attachment';

const meta: Meta<typeof Attachment> = {
    title: 'Components/Attachment',
    component: Attachment,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        accept: {
            control: 'text',
            description: 'Allowed file types',
        },
        multiple: {
            control: 'boolean',
            description: 'Allow multiple file selection',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable attachment',
        },
        maxFiles: {
            control: 'number',
            description: 'Maximum number of files',
        },
    },
    args: {
        accept: '*/*',
        multiple: false,
        disabled: false,
        onFilesChange: fn(),
    },
};

export default meta;

type Story = StoryObj<typeof Attachment>;

export const Default: Story = {
    args: {
        accept: '*/*',
        multiple: false,
    },
};

export const ImageOnly: Story = {
    args: {
        accept: 'image/png,image/jpeg,image/webp',
        multiple: true,
    },
};

export const PDFOnly: Story = {
    args: {
        accept: '.pdf',
        multiple: false,
    },
};

export const DocumentsOnly: Story = {
    args: {
        accept: '.pdf,.doc,.docx,.xls,.xlsx',
        multiple: true,
    },
};

export const MultipleFiles: Story = {
    args: {
        accept: '*/*',
        multiple: true,
    },
};

export const MaxFiles: Story = {
    args: {
        accept: 'image/*',
        multiple: true,
        maxFiles: 3,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        accept: '*/*',
    },
};

export const SingleImage: Story = {
    args: {
        accept: 'image/*',
        multiple: false,
    },
};

export const AllExamples: Story = {
    render: () => (
        <div
            style={{
                display: 'grid',
                gap: '20px',
                width: '100%',
                maxWidth: '500px',
            }}
        >
            <div>
                <p>Default Attachment</p>
                <Attachment
                    accept="*/*"
                    onFilesChange={fn()}
                />
            </div>

            <div>
                <p>Image Only</p>
                <Attachment
                    accept="image/*"
                    multiple
                    onFilesChange={fn()}
                />
            </div>

            <div>
                <p>PDF Only</p>
                <Attachment
                    accept=".pdf"
                    onFilesChange={fn()}
                />
            </div>

            <div>
                <p>Multiple Files (Max 3)</p>
                <Attachment
                    accept="*/*"
                    multiple
                    maxFiles={3}
                    onFilesChange={fn()}
                />
            </div>

            <div>
                <p>Disabled</p>
                <Attachment disabled />
            </div>
        </div>
    ),
};