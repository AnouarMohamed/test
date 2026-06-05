import React, { ReactNode } from 'react';
import { FiGithub, FiMail } from 'react-icons/fi';
import { siteProfile } from '../../../config/siteProfile';

/**
 * Custom hook to get contact info data
 *@function useContactConfig
 *@returns {IMyContact[]} myContacts - the hook returns array of social contacts with id, icon, text and href of social platform
 */
export const useContactConfig = (): { myContacts: IMyContact[] } => {
  const myContacts: IMyContact[] = [
    {
      id: 1,
      icon: <FiGithub className={'contact-icon'} />,
      text: 'GitHub',
      href: siteProfile.githubUrl,
    },
    {
      id: 2,
      icon: <FiMail className={'contact-icon'} />,
      text: 'Email',
      href: `mailto:${siteProfile.email}`,
    },
  ];

  return { myContacts };
};

export interface IMyContact {
  id: number;
  icon: ReactNode;
  text: string;
  href: string;
}
