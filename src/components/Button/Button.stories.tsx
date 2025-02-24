import React, { useState } from 'react'; // Importing React and useState hook for managing state
import { Meta, StoryFn } from '@storybook/react'; // Importing Storybook-specific types for meta and story function
import Button from './Button'; // Importing the Button component to be used in the stories
import { ButtonProps } from './Button.types'; // Importing the ButtonProps type for type checking

// Default export for Storybook configuration
export default {
  title: 'Button', // Title in the Storybook UI for the Button component
  component: Button, // The Button component that we are showcasing in the stories
} as Meta<ButtonProps>; // Defining the type for the meta object

// Template function to define the common structure for the Button stories
const Template: StoryFn<ButtonProps> = (args) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // useState hook to manage the success message

  // Handler for button click, updates the success message
  const handleClick = () => {
    setSuccessMessage('Button clicked successfully!');
  };

  return (
    <div>
      {/* Rendering the Button component with passed args and a click handler */}
      <Button {...args} onClick={handleClick} />
      {/* Conditionally render the success message when set */}
      {successMessage && <p>{successMessage}</p>} {/* Display success message */}
    </div>
  );
};

// "Default" story with normal button functionality
export const Default = Template.bind({});
Default.args = {
  text: 'Click Me', // Ensure text is passed here for the button label
};

// "Disabled" story with button disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled', // Ensure text is passed here for the button label
  disabled: true, // The button will be disabled in this story
};
