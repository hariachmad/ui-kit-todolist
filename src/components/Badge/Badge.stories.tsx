import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { children: 'Menunggu' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['date', 'info', 'warning', 'alert'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = { args: { variant: 'info', children: 'Info' } };
export const Date: Story = { args: { variant: 'date', children: '24 Nov' } };
export const Warning: Story = { args: { variant: 'warning', children: 'Belum bayar' } };
export const Alert: Story = { args: { variant: 'alert', children: 'Terlambat' } };

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--app-space-2)' }}>
      {(['date', 'info', 'warning', 'alert'] as const).map((v) => (
        <Badge key={v} {...args} variant={v}>
          {v}
        </Badge>
      ))}
    </div>
  ),
};