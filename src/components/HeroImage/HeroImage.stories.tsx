import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import HeroImage from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    overlayText: { control: 'text' },
  },
} as Meta<typeof HeroImage>;

const Template: StoryFn<typeof HeroImage> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '/static/images/harry-potter.jpg',
  alt: 'Hero Image',
  overlayText: 'Welcome to Our Website',
};

export const WithoutOverlay = Template.bind({});
WithoutOverlay.args = {
  src: '/static/images/harry-potter.jpg',
  alt: 'Hero Image',
};
