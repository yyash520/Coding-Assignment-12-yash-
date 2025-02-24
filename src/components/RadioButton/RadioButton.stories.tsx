import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: { disabled: { control: 'boolean' } },
} as Meta<typeof RadioButton>;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'options',
  options: ['Option 1', 'Option 2'],
  onChange: (val) => alert(val),
};

export const Disabled = Template.bind({});
Disabled.args = { ...Default.args, disabled: true };
