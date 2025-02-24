import { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
  },
};

export default meta; // ✅ Default export is required

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Sample Label',
    color: 'black',
  },
};