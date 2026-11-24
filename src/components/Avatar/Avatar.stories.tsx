import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    seed: {
      control: 'text',
      description: 'Seed yang sama menghasilkan kartun yang sama. Kosong = random.',
    },
    cartoon: {
      control: 'select',
      options: ['fun-emoji', 'bottts', 'adventurer', 'big-ears', 'micah', 'lorelei'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    alt: { control: 'text' },
  },
  args: {
    cartoon: 'fun-emoji',
    size: 'md',
    alt: 'avatar',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const WithSeed: Story = {
  args: { seed: 'budi' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Avatar {...args} seed="sizes" size="sm" />
      <Avatar {...args} seed="sizes" size="md" />
      <Avatar {...args} seed="sizes" size="lg" />
    </div>
  ),
};

export const CartoonStyles: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {(['fun-emoji', 'bottts', 'adventurer', 'big-ears', 'micah', 'lorelei'] as const).map(
        (c) => (
          <div key={c} style={{ textAlign: 'center', fontSize: 12 }}>
            <Avatar {...args} seed="demo" cartoon={c} size="lg" />
            <div>{c}</div>
          </div>
        )
      )}
    </div>
  ),
};

export const RandomGroup: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12 }}>
      {Array.from({ length: 6 }, (_, i) => (
        <Avatar key={i} {...args} />
      ))}
    </div>
  ),
};

export const UserList: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12 }}>
      {['andi', 'siti', 'budi', 'dewi', 'agus'].map((name) => (
        <Avatar key={name} {...args} seed={name} alt={name} />
      ))}
    </div>
  ),
};