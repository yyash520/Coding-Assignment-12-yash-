import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    footer: { control: 'text' },
    imageSrc: { control: 'text' },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Harry Potter',
  content: 'Harry Potter, the Boy Who Lived, is a famous wizard known for defeating Lord Voldemort as an infant.',
  imageSrc: '/static/images/harry-potter.jpg',
  altText: 'Harry Potter with his wand and friends',
  footer: 'The Chosen One, destined for greatness.',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'Hermione Granger',
  content: 'Hermione Granger, one of Harry Potter\'s best friends, is a brilliant witch and an advocate for justice.',
  footer: 'Brilliant, courageous, and wise beyond her years.',
};
