interface headerLinkObject {
  title: string;
  to: string;
}

export const headerLinks: Array<headerLinkObject> = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Pokédex',
    to: '/pokédex',
  },
  {
    title: 'Legendaries',
    to: '/legendaries',
  },
  {
    title: 'Documentation',
    to: '/documentation',
  },
];
