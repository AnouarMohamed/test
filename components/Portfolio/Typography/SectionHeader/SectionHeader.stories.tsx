import { Story } from '@storybook/react';
import SectionHeader, { Props } from './SectionHeader';

export default {
  title: 'Portfolio/Typography/Header',
  component: SectionHeader,
};

const Template: Story<Props> = (args) => (
  <SectionHeader {...args}>This is header</SectionHeader>
);

export const Large = Template.bind({});
Large.args = {
  margin: '0',
  headerText: 'Header',
  variant: 'large',
  color: '#00add8',
};
export const Medium = Template.bind({});
Medium.args = {
  margin: '0',
  headerText: 'Header',
  variant: 'medium',
  color: '#00add8',
};
export const Small = Template.bind({});
Small.args = {
  margin: '0',
  headerText: 'Header',
  variant: 'small',
  color: '#00add8',
};
