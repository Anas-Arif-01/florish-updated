export interface RenovationProject {
  title: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export const RENOVATION_PROJECTS: RenovationProject[] = [
  {
    title: 'Feature wall',
    images: [
      {
        src: '/images/products/wall-coverings/wall-covering-1.jpeg',
        alt: 'Textured feature wall installation',
      },
    ],
  },
  {
    title: 'Custom curtains',
    images: [
      {
        src: '/images/products/window-coverings/curtains-1.jpeg',
        alt: 'Custom curtains in a finished dining room',
      },
    ],
  },
  {
    title: 'Window styling',
    images: [
      {
        src: '/images/products/window-coverings/door-1.jpeg',
        alt: 'Finished room with dark window blinds',
      },
    ],
  },
];
