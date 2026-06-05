export const authors: IAuthor[] = [
  {
    id: 1,
    name: 'GitHub and open-source maintainers',
    url: 'https://github.com/AnouarMohamed',
    github: 'https://github.com/AnouarMohamed',
    acknowledgement:
      'for the ecosystems where I learn through practical contributions, review, documentation, tests, and production-minded code.',
  },
  {
    id: 2,
    name: 'Kubernetes, Docker, and CNCF ecosystem',
    url: 'https://www.cncf.io/',
    github: 'https://github.com/kubernetes/kubernetes',
    acknowledgement:
      'for the tools and operating model behind the cloud-native systems I build and study.',
  },
  {
    id: 3,
    name: 'Mundiapolis University',
    url: 'https://www.mundiapolis.ma/',
    github: null,
    acknowledgement:
      'for the engineering path, project context, and communities that shaped my current DevSecOps focus.',
  },
];

interface IAuthor {
  id: number;
  name: string;
  url: string;
  github: string | null;
  acknowledgement: string;
}
