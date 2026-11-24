import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'inline-radio',
            options: ['default', 'error', 'search'],
        },
        fullWidth: { control: 'boolean' },
        size: {
            control: 'inline-radio',
            options: ['sm', 'md', 'lg'],
        },
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
        },
        label: { control: 'text' },
        labelPlacement: {
            control: 'inline-radio',
            options: ['start', 'end', 'floating', 'stacked', 'fixed'],
        },
        placeholder: { control: 'text' },
        helperText: { control: 'text' },
        errorText: { control: 'text' },
        disabled: { control: 'boolean' },
        readonly: { control: 'boolean' },
        clearInput: { control: 'boolean' },
    },
    args: {
        variant: 'default',
        size: 'md',
        type: 'text',
        label: 'Nama',
        labelPlacement: 'floating',
        placeholder: 'Masukkan nama',
        disabled: false,
        readonly: false,
        clearInput: false,
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 480 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithHelperText: Story = {
    args: {
        label: 'Email',
        type: 'email',
        placeholder: 'nama@email.com',
        helperText: 'Kami tidak akan membagikan email Anda.',
    },
};

export const ErrorState: Story = {
    args: {
        variant: 'error',
        label: 'Email',
        type: 'email',
        value: 'email-salah',
        helperText: 'Format email tidak valid',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Nama',
        value: 'Budi Santoso',
        disabled: true,
    },
};

export const ReadOnly: Story = {
    args: {
        label: 'ID Pengguna',
        value: 'USR-00123',
        readonly: true,
    },
};

export const Clearable: Story = {
    args: {
        label: 'Pencarian',
        type: 'search',
        placeholder: 'Cari sesuatu...',
        value: 'Contoh teks',
        clearInput: true,
    },
};

export const Password: Story = {
    args: {
        label: 'Password',
        type: 'password',
        placeholder: '••••••••',
    },
};

export const Sizes: Story = {
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Input {...args} size="sm" label="Small" placeholder="Small" />
            <Input {...args} size="md" label="Medium" placeholder="Medium" />
            <Input {...args} size="lg" label="Large" placeholder="Large" />
        </div>
    ),
};

export const Variants: Story = {
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Input {...args} variant="default" label="Default" placeholder="Default" />
            <Input
                {...args}
                variant="error"
                label="Error"
                placeholder="Error"
                helperText="Field ini wajib diisi"
            />
        </div>
    ),
};

export const Controlled: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        const isInvalid = value.length > 0 && value.length < 3;

        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Input
                    {...args}
                    variant={isInvalid ? 'error' : 'default'}
                    value={value}
                    helperText={isInvalid ? 'Minimal 3 karakter' : undefined}
                    onIonInput={(e) => setValue(String(e.detail.value ?? ''))}
                />
                <small>Nilai saat ini: {value || '-'}</small>
            </div>
        );
    },
};

export const Search: Story = {
  args: {
    variant: 'search',
    label: undefined,
    placeholder: 'Cari sesuatu...',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: 720 }}>
        <Story />
      </div>
    ),
  ],
};

export const SearchSizes: Story = {
  decorators: Search.decorators,
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Input {...args} variant="search" size="sm" label={undefined} placeholder="Cari (small)" />
      <Input {...args} variant="search" size="md" label={undefined} placeholder="Cari (medium)" />
      <Input {...args} variant="search" size="lg" label={undefined} placeholder="Cari (large)" />
    </div>
  ),
};

export const FullWidth: Story = {
  args: { fullWidth: true, style : {width : "300px"} },
  decorators: Search.decorators,
};

export const SearchControlled: Story = {
  decorators: Search.decorators,
  render: (args) => {
    const [query, setQuery] = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Input
          {...args}
          variant="search"
          label={undefined}
          placeholder="Cari pengguna..."
          value={query}
          onIonInput={(e) => setQuery(String(e.detail.value ?? ''))}
        />
        <small>Kata kunci: {query || '-'}</small>
      </div>
    );
  },
};