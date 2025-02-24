import React from 'react';
import { Meta, StoryFn } from '@storybook/react';  // Importing StoryFn instead of Story
import Img from './Img';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' }
  }
} as Meta<typeof Img>;  // Using Meta instead of ComponentMeta

const Template: StoryFn<typeof Img> = (args) => <Img {...args} />;  // StoryFn instead of Story

export const Default = Template.bind({});
Default.args = {
  src: '/static/images/harry-potter.jpg',
  alt: 'Placeholder Image',
  width: 150,
  height: 150
};
