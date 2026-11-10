/*
  The catalog structure — used by BOTH the navbar "Catalog" dropdown and the
  card pages on /catalog (click a card → its sub-items show as cards → …).

    Level 1   e.g. Flooring            → /catalog?category=flooring
    Level 2   e.g. Wooden Floor        → /catalog?category=flooring&path=wooden-floor
    Level 3   e.g. Solid Wood          → …&path=wooden-floor/solid-wood
    (you can nest deeper, everything handles it automatically)

  Built from the Product Catalog PDF. The PDF lists things flat, so the
  grouping (e.g. Solid Wood / Laminated under Wooden Floor) is a best guess —
  edit freely.

  Per item you can set:
    match  which products from data/products.ts belong to it (by the product's
           subCategory and/or part of its title). Products show as cards on
           that item's page.
    image  a photo for the item's card, e.g. '/images/menu/wooden-floor.jpg'
           (put the file in /public/images/menu/). If left out, the card uses
           a photo of one of its products, or a plain placeholder.
    note   text shown on the item's page when it has no products yet.
*/

export interface ProductMatch {
  subCategories?: string[]; // product.subCategory is one of these
  titles?: string[]; // product.title contains one of these
}

export interface MenuNode {
  label: string;
  children?: MenuNode[];
  match?: ProductMatch;
  image?: string;
  note?: string;
}

export interface MenuRoot extends MenuNode {
  id: string; // also the ?category= value
  href: string;
  dividerBefore?: boolean; // draws a thin line above this item in the dropdown
}

const leaves = (...labels: string[]): MenuNode[] =>
  labels.map((label) => ({ label }));

export const MENU_TREE: MenuRoot[] = [
  { id: 'all', label: 'All Items', href: '/catalog' },

  {
    id: 'flooring',
    label: 'Flooring',
    href: '/catalog?category=flooring',
    children: [
      {
        label: 'Wooden Floor',
        children: [
          {
            label: 'Solid Wood',
            match: { subCategories: ['Solid Wood Floor'] },
          },
          {
            label: 'Laminated Flooring',
            match: { subCategories: ['Laminate Floor', 'Wooden Floor'] },
          },
        ],
      },
      {
        label: 'Vinyl Floor',
        match: { subCategories: ['Vinyl Flooring'] },
        children: leaves('Super Gloss', 'Domestic', 'Commercial'),
      },
      {
        label: 'SPC Floor',
        match: { subCategories: ['SPC Flooring'] },
        children: leaves('Square Edge', 'Herringbone'),
      },
      {
        label: 'Deck Flooring',
        match: { titles: ['Decking Flooring Collection'] },
      },
      { label: 'Carpet Tile' },
      {
        label: 'Gym Flooring',
        match: { titles: ['Gym & Outdoor Decking'] },
      },
      {
        label: 'Accessories',
        children: leaves('Skirting', 'Toe Molding', 'Reducer', 'Stopper'),
      },
    ],
  },

  {
    id: 'wall-coverings',
    label: 'Wall Coverings',
    href: '/catalog?category=wall-coverings',
    children: [
      {
        label: 'Wall Papers',
        match: { subCategories: ['Wallpaper', 'Wall Coverings'] },
      },
      {
        label: 'Wall Paneling',
        match: { subCategories: ['Wall Panels'] },
        children: leaves(
          'Plain PVC Panel',
          'Fluted PVC Panel',
          'WPC Panel',
          'PS Panel',
          'HDF',
          '3D Panels'
        ),
      },
      { label: 'Wall Murals', match: { subCategories: ['Murals'] } },
      { label: 'PU Stone' },
      { label: 'Rock Sheet' },
      { label: 'French Molding' },
      { label: 'Flexi Stone Sheet' },
      { label: 'Decorative Mirror' },
      { label: 'Bamboo Charcoal Board' },
      {
        label: 'Specialized Walls',
        children: leaves('Media Walls', 'Featured Walls'),
      },
    ],
  },

  {
    id: 'ceiling',
    label: 'Ceilings',
    href: '/catalog?category=ceiling',
    match: { subCategories: ['Ceilings'] },
    children: [
      {
        label: 'Gypsum Board',
        children: leaves('2 x 2', '4 x 8'),
      },
      { label: 'POP Ceiling' },
      { label: 'Dampa Ceiling' },
      { label: 'PVC Ceiling' },
      { label: 'Bamboo Charcoal Board' },
      { label: 'Accessories' },
    ],
  },

  {
    id: 'window-coverings',
    label: 'Window Coverings',
    href: '/catalog/window-coverings',
    children: [
      {
        label: 'Blinds',
        match: { subCategories: ['Window Blinds'] },
      },
      { label: 'Curtains', note: 'Curtain collections coming soon.' },
    ],
  },

  {
    id: 'doors',
    label: 'Doors',
    href: '/catalog?category=doors',
    children: leaves(
      'PVC Folding Doors',
      'Folding Doors',
      'Wooden Doors',
      'Partition Doors'
    ),
  },

  {
    id: 'artificial-grass',
    label: 'Artificial Grass',
    href: '/catalog?category=artificial-grass',
    dividerBefore: true,
    match: { titles: ['Artificial Grass'] },
  },

  {
    id: 'glass-paper',
    label: 'Glass Paper',
    href: '/catalog?category=glass-paper',
    match: { titles: ['Glass / Gloss Paper'] },
  },

];
