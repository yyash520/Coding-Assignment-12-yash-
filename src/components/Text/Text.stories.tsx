import React from "react";
import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Text',
  component: Text,
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "This is a text component",
};

export const LargeText = Template.bind({});
LargeText.args = {
  content: "This is a large text",
  size: "2rem",
};