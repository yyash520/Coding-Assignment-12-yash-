import React from 'react'; // Importing React for component creation
import { Meta, StoryFn } from '@storybook/react'; // Importing Storybook types for metadata and story function
import Dropdown, { DropdownProps } from './Dropdown'; // Importing the Dropdown component and its props type

// Default export for Storybook, describing the Dropdown component's story
export default {
  title: 'Components/Dropdown', // Title for the story (used in Storybook sidebar)
  component: Dropdown, // Component to be displayed in the story
  argTypes: { disabled: { control: 'boolean' } }, // Defining 'disabled' as a boolean control in the Storybook UI
} as Meta<typeof Dropdown>;

// Template function to render the Dropdown component with dynamic props
const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

// Default story for the Dropdown component
export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'], // Default options to be displayed in the dropdown
  onChange: (val) => alert(val), // Default onChange handler that shows an alert with selected value
};

// Disabled story for the Dropdown component (demonstrates the disabled state)
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args, // Reusing the args from Default story
  disabled: true, // Setting the disabled prop to true to disable the dropdown
};
