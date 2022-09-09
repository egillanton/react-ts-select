import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	component: Select,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		label: { 
			control: 'text'
		},
		options: { 
			control: 'array',
			defaultValue: ['Option 1', 'Option 2', 'Option 3']
		},
		backgroundColor: { control: 'color' },
		color: { control: 'color' },
	},
  } as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});
Default.args = {
	label: 'Default Select',
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
	label: 'Select with background color',
	backgroundColor: 'red',
};

export const WithColor = Template.bind({});
WithColor.args = {
	label: 'Select with color',
	color: 'red',
};

export const WithBackgroundColorAndColor = Template.bind({});
WithBackgroundColorAndColor.args = {
	label: 'Select with background color and color',
	backgroundColor: 'red',
	color: 'white',
};
