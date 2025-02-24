import React from 'react';
import { default as Table } from './Table';  // Import the Table component
import { TableProps } from './Table.types';  // Import the TableProps type for type safety
import { Meta, StoryFn } from '@storybook/react'; // Import StoryFn for Storybook functionality

// Default export for Storybook configuration
export default {
  title: 'Table', // Title of the Storybook entry
  component: Table, // The component we are showcasing
} as Meta;

// Define the Template function that will be used to render the component
const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

// Define the "Default" story for the Table component
export const Default = Template.bind({});
Default.args = {
  // Table headers
  headers: ['Character', 'House', 'Role'], // These are the column headers in the table

  // Table rows with Harry Potter-related data
  rows: [
    ['Harry Potter', 'Gryffindor', 'The Chosen One'], // Row for Harry Potter
    ['Hermione Granger', 'Gryffindor', 'Brilliant Witch'], // Row for Hermione Granger
    ['Ron Weasley', 'Gryffindor', 'Harry\'s Best Friend'], // Row for Ron Weasley
    ['Draco Malfoy', 'Slytherin', 'Rival of Harry Potter'], // Row for Draco Malfoy
    ['Luna Lovegood', 'Ravenclaw', 'Quirky and Eccentric'], // Row for Luna Lovegood
  ],

  // Table footer (can be used to display footer information)
  footer: ['End of Table', '', ''], // Simple footer with placeholder text
};
