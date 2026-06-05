import { Story } from '@storybook/react';
import SocialMediaContact, { Props } from './SocialMediaContact';
import { FiGithub, FiMail } from 'react-icons/fi';
import React from 'react';

export default {
  title: 'Portfolio/SocialMediaContact',
  component: SocialMediaContact,
};

const Template: Story<Props> = (args) => <SocialMediaContact {...args} />;

export const GitHub = Template.bind({});
GitHub.args = {
  icon: <FiGithub className={'contact-icon'} />,
  href: 'https://github.com/AnouarMohamed',
};
export const Email = Template.bind({});
Email.args = {
  icon: <FiMail className={'contact-icon'} />,
  href: 'mailto:mohamedanouar0012@gmail.com',
};
