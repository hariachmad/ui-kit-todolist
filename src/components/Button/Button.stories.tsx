// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Button } from './Button';
import { add } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Simpan',
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger', 'add'], // + add
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

const addIcon = <IonIcon slot="icon-only" icon={add} />;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Lanjut' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Batal' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Lihat detail' },
};

export const Danger: Story = {
  args: { variant: 'danger', children: 'Hapus' },
};

export const Add: Story = {
  args: { variant: 'add', children: addIcon },
};

export const Loading: Story = {
  args: { loading: true, children: 'Memproses...' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  parameters: { layout: 'padded' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--app-space-3)', alignItems: 'center' }}>
      <Button {...args} size="sm">Kecil</Button>
      <Button {...args} size="md">Sedang</Button>
      <Button {...args} size="lg">Besar</Button>
    </div>
  ),
};

// Story baru: ketiga ukuran tombol add
export const AddSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--app-space-3)', alignItems: 'center' }}>
      <Button {...args} variant="add" size="sm" children={addIcon} />
      <Button {...args} variant="add" size="md" children={addIcon} />
      <Button {...args} variant="add" size="lg" children={addIcon} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--app-space-3)', flexWrap: 'wrap' }}>
      {(['primary', 'secondary', 'outline', 'ghost', 'danger', 'add'] as const).map((v) => (
        <Button key={v} {...args} variant={v}>
          {v === 'add' ? addIcon : v}
        </Button>
      ))}
    </div>
  ),
};

export const CustomColor: Story = {
  args: {
    children: 'Brand lain',
    style: { '--button-bg': '#7a1f5c' } as React.CSSProperties,
  },
};