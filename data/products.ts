export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  category:
    | 'flooring'
    | 'wall-coverings'
    | 'ceiling'
    | 'window-coverings'
    | 'doors'
    | 'glass-paper';
  subCategory: string;
  specs: {
    origin?: string;
    thickness?: string[];
    finishes?: string[];
    style?: string;
    color?: string;
    material?: string;
    types?: string[];
    typesLabel?: string;
    finish?: string;
    warranty?: string;
    installation?: string;
  };
  features: string[];
  applications: string[];
  image: string;
  gallery?: string[];
}

const LOCAL_IMAGES = {
  chineseUGroove: [
    'chinese-12-2-u-groove-1.jpeg',
    'chinese-12-2-u-groove-2.jpeg',
    'chinese-12-2-u-groove-3.jpeg',
    'chinese-12-2-u-groove-4.jpeg',
    'chinese-12-2-u-groove-5.jpeg',
    'chinese-12-2-u-groove-6.jpeg',
    'chinese-12-2-u-groove-7.jpeg',
  ].map((file) => `/images/products/flooring/${file}`),
  chineseSquareEdge: [
    'chinese-square-edge-1.jpeg',
    'chinese-square-edge-2.jpeg',
    'chinese-square-edge-3.jpeg',
    'chinese-square-edge-4.jpeg',
    'chinese-square-edge-5.jpeg',
    'chinese-square-edge-6.jpeg',
    'chinese-square-edge-7.jpeg',
    'chinese-square-edge-8.jpeg',
  ].map((file) => `/images/products/flooring/${file}`),
  decking: [
    'decking-flooring-1.jpeg',
    'decking-flooring-2.jpeg',
    'decking-flooring-3.jpeg',
    'decking-flooring-4.jpeg',
    'decking-flooring-5.jpeg',
    'decking-flooring-6.jpeg',
  ].map((file) => `/images/products/flooring/${file}`),
  eirLaminate: [
    'eir-surface-laminate-hdf-8x48-v-groove-1.jpeg',
    'eir-surface-laminate-hdf-8x48-v-groove-2.jpeg',
    'eir-surface-laminate-hdf-8x48-v-groove-3.jpeg',
    'eir-surface-laminate-hdf-8x48-v-groove-4.jpeg',
    'eir-surface-laminate-hdf-8x48-v-groove-5.jpeg',
    'eir-surface-laminate-hdf-8x48-v-groove-6.jpeg',
    'eir-surface-laminate-hdf-8x48-v-groove-7.jpeg',
    'eir-surface-laminate-hdf-8x48-v-groove-8.jpeg',
    'eir-surface-laminate-hdf-8x48-v-groove-9.jpeg',
    'eir-surface-laminate-hdf-8x48-v-groove-10.jpeg',
    'eir-surface-laminate-hdf-8x48-v-groove-11.jpeg',
  ].map((file) => `/images/products/flooring/${file}`),
  turkishFloor: [
    'turkish-wooden-floor-1.jpeg',
    'turkish-wooden-floor-2.jpeg',
    'turkish-wooden-floor-3.jpeg',
  ].map((file) => `/images/products/flooring/${file}`),
  turkishWoodenFlooring: [
    'turkish-wooden-flooring-1.jpeg',
    'turkish-wooden-flooring-2.jpeg',
    'turkish-wooden-flooring-3.jpeg',
  ].map((file) => `/images/products/flooring/${file}`),
  wallCoverings: [
    '/images/products/wall-coverings/wall-covering-1.jpeg',
    '/images/products/wall-coverings/wall-covering-2.jpeg',
    '/images/products/wall-coverings/wall-covering-3.jpeg',
    '/images/products/wall-coverings/wall-covering-4.jpeg',
    '/images/products/wall-coverings/wall-covering-5.jpeg',
    '/images/products/wall-coverings/wall-covering-6.jpeg',
    '/images/products/wall-coverings/wall-covering-7.jpeg',
    '/images/products/wall-coverings/wall-covering-8.jpeg',
    '/images/products/wall-coverings/wall-covering-9.jpeg',
    '/images/products/wall-coverings/wall-covering-10.jpeg',
    '/images/products/wall-coverings/wall-covering-11.jpeg',
    '/images/products/wall-coverings/wall-covering-12.jpeg',
    '/images/products/wall-coverings/wall-covering-13.jpeg',
    '/images/products/wall-coverings/wall-covering-14.jpeg',
    '/images/products/wall-coverings/wall-covering-15.jpeg',
    '/images/products/wall-coverings/wall-covering-17.jpeg',
    '/images/products/wall-coverings/wall-covering-18.jpeg',
    '/images/products/wall-coverings/wall-covering-19.jpeg',
    '/images/products/wall-coverings/wall-covering-20.jpeg',
    '/images/products/wall-coverings/wall-covering-21.jpeg',
    '/images/products/wall-coverings/wall-covering-22.jpeg',
    '/images/products/wall-coverings/wall-covering-23.jpeg',
    '/images/products/wall-coverings/wall-covering-24.jpeg',
    '/images/products/wall-coverings/wall-covering-25.jpeg',
    '/images/products/wall-coverings/wall-covering-26.jpeg',
  ],
  wallPanels: [
    '/images/products/wall-coverings/ivory-panel-1.jpeg',
    '/images/products/wall-coverings/ivory-panel-2.jpeg',
    '/images/products/wall-coverings/ivory-panel-3.jpeg',
    '/images/products/wall-coverings/beige-panel-1.jpeg',
    '/images/products/wall-coverings/charcoal-panel-1.jpeg',
    '/images/products/wall-coverings/charcoal-panel-2.jpeg',
    '/images/products/wall-coverings/stone-panel-1.jpeg',
    '/images/products/wall-coverings/stone-panel-2.jpeg',
    '/images/products/wall-coverings/walnut-panel-1.jpeg',
    '/images/products/wall-coverings/white-panel-1.jpeg',
    '/images/products/wall-coverings/white-panel-2.jpeg',
    '/images/products/wall-coverings/wood-panel-1.jpeg',
    '/images/products/wall-coverings/wood-panel-2.jpeg',
    '/images/products/wall-coverings/wood-panel-3.jpeg',
    '/images/products/wall-coverings/wood-panel-4.jpeg',
    '/images/products/wall-coverings/taupe-panel-1.jpeg',
    '/images/products/wall-coverings/taupe-panel-2.jpeg',
  ],
  curtains: [
    '/images/products/window-coverings/curtains-1.jpeg',
    '/images/products/window-coverings/curtains-2.jpeg',
    '/images/products/window-coverings/curtains-3.jpeg',
    '/images/products/window-coverings/curtains-4.jpeg',
  ],
  windowCoverings: [
    '/images/products/window-coverings/window-coverings-1.jpeg',
    '/images/products/window-coverings/window-coverings-2.jpeg',
    '/images/products/window-coverings/window-coverings-3.jpeg',
  ],
  doors: [
    '/images/products/window-coverings/door-1.jpeg',
    '/images/products/window-coverings/door-2.jpeg',
  ],
};

function createLocalProduct(
  id: string,
  title: string,
  description: string,
  category: Product['category'],
  subCategory: string,
  image: string,
  material: string,
  features: string[],
  applications: string[]
): Product {
  return {
    id,
    slug: id,
    title,
    description,
    category,
    subCategory,
    specs: {
      material,
      installation: 'Professional Installation Available',
    },
    features,
    applications,
    image,
  };
}

const LOCAL_CATALOG_PRODUCTS: Product[] = [
  ...LOCAL_IMAGES.chineseUGroove.map((image, index) => createLocalProduct(
    `chinese-u-groove-sample-${index + 1}`,
    'Chinese U-Groove Laminate Collection',
    'A refined 12+2mm laminate collection in a wide 5 x 48 inch format, crafted to bring a sleek timber look with practical durability for modern interiors.',
    'flooring',
    'Laminate Floor',
    image,
    'HDF Laminate',
    ['12+2mm Construction', 'U-Groove Profile', 'Wood Grain Finish', 'Easy Maintenance'],
    ['Apartments', 'Living Rooms', 'Bedrooms', 'Office Interiors']
  )),
  ...LOCAL_IMAGES.chineseSquareEdge.map((image, index) => createLocalProduct(
    `chinese-square-edge-sample-${index + 1}`,
    'Chinese Square Edge Laminate Collection',
    'A dependable square-edge laminate range designed for value-conscious projects, offering versatile tones, easy upkeep, and a clean contemporary wood aesthetic.',
    'flooring',
    'Laminate Floor',
    image,
    'HDF Laminate',
    ['Square Edge Profile', 'Value Focused', 'Scratch Resistant', 'Easy Maintenance'],
    ['Apartments', 'Rental Properties', 'Offices', 'Retail Spaces']
  )),
  ...LOCAL_IMAGES.eirLaminate.map((image, index) => createLocalProduct(
    `eir-hdf-laminate-sample-${index + 1}`,
    'EIR Surface HDF Laminate Collection',
    'An embossed wood-grain laminate collection with a V-groove profile, delivering a natural timber character and elevated finish for contemporary interiors.',
    'flooring',
    'Laminate Floor',
    image,
    'EIR Surface HDF Laminate',
    ['Embossed Grain', 'V-Groove Profile', 'Natural Wood Appearance', 'Low Maintenance'],
    ['Premium Homes', 'Executive Offices', 'Hotels', 'Showrooms']
  )),
  ...LOCAL_IMAGES.turkishFloor.map((image, index) => createLocalProduct(
    `turkish-wooden-floor-sample-${index + 1}`,
    'Turkish Wooden Floor Collection',
    'A warm Turkish engineered wood collection celebrated for natural grain movement, elegant tonal variation, and a premium finish suited to residential and hospitality interiors.',
    'flooring',
    'Wooden Floor',
    image,
    'Engineered Wood',
    ['Natural Grain', 'Warm Finish', 'Timeless Design', 'Durable Construction'],
    ['Living Rooms', 'Bedrooms', 'Boutique Hotels', 'Luxury Homes']
  )),
  ...LOCAL_IMAGES.turkishWoodenFlooring.map((image, index) => createLocalProduct(
    `turkish-wooden-flooring-sample-${index + 1}`,
    'Turkish Wooden Flooring Collection',
    'Premium Turkish wooden flooring with expressive plank character and a refined finish, ideal for projects seeking authentic timber warmth and a luxurious feel.',
    'flooring',
    'Wooden Floor',
    image,
    'Engineered Wood',
    ['Authentic Timber Look', 'Elegant Grain', 'Durable Construction', 'Versatile Styling'],
    ['Villas', 'Dining Rooms', 'Office Interiors', 'Hotels']
  )),
  ...LOCAL_IMAGES.decking.map((image, index) => createLocalProduct(
    `decking-flooring-sample-${index + 1}`,
    'Decking Flooring Collection',
    'A durable decking flooring range for outdoor living, terraces, and high-use spaces, built with a textured surface that balances strength, comfort, and low maintenance.',
    'flooring',
    'Specialty Flooring',
    image,
    'Decking Composite',
    ['Weather Resistant', 'Textured Surface', 'Low Maintenance', 'Outdoor Ready'],
    ['Outdoor Decks', 'Terraces', 'Poolside Areas', 'Commercial Outdoor Spaces']
  )),
  ...LOCAL_IMAGES.wallCoverings.map((image, index) => createLocalProduct(
    `wall-covering-sample-${index + 1}`,
    `Decorative Wall Covering ${index + 1}`,
    'A curated wallpaper and wall-covering collection designed to introduce texture, pattern, and visual depth to sophisticated residential and commercial interiors.',
    'wall-coverings',
    'Wall Coverings',
    image,
    'Decorative Wall Covering',
    ['Decorative Finish', 'Feature Wall Ready', 'Multiple Design Directions', 'Professional Installation'],
    ['Living Rooms', 'Bedrooms', 'Office Receptions', 'Hospitality Spaces']
  )),
  ...LOCAL_IMAGES.windowCoverings.map((image, index) => createLocalProduct(
    `window-covering-sample-${index + 1}`,
    'Window Blinds Collection',
    'A tailored window-covering collection created to balance light control, privacy, and contemporary styling across homes, offices, and hospitality interiors.',
    'window-coverings',
    'Window Blinds',
    image,
    'Custom Window Covering',
    ['Custom Sizes', 'Light Control', 'Privacy Support', 'Professional Installation'],
    ['Residential Windows', 'Office Spaces', 'Hotels', 'Showrooms']
  )),
  ...LOCAL_IMAGES.curtains.map((image, index) => createLocalProduct(
    `curtain-sample-${index + 1}`,
    'Custom Curtain Collection',
    'An elegant curtain and drapery collection that adds softness, privacy, and refined layering to modern and classic interiors alike.',
    'window-coverings',
    'Curtains',
    image,
    'Fabric and Sheer Drape',
    ['Custom Tailoring', 'Light Control', 'Heat Insulation', 'Designer Finish'],
    ['Living Rooms', 'Bedrooms', 'Theater Rooms', 'Corporate Offices']
  )),
  // ...LOCAL_IMAGES.doors.map((image, index) => createLocalProduct(
  //   `door-sample-${index + 1}`,
  //   'Interior Door Collection',
  //   'A refined door collection designed for smooth operation, architectural clarity, and finishing details that complement contemporary living spaces.',
  //   'doors',
  //   'Doors',
  //   image,
  //   'Interior Door System',
  //   ['Smooth Operation', 'Multiple Finishes', 'Space-Conscious Design', 'Professional Installation'],
  //   ['Room Dividers', 'Closets', 'Wardrobes', 'Balcony Access']
  // )),
];

const BASE_PRODUCTS: Product[] = [
  // --- FLOORING ---
  {
    id: 'solid-wood-okan',
    slug: 'solid-wood-okan',
    title: 'Okan Solid Wood Flooring',
    description: 'Premium Okan solid wood flooring offering exceptional durability and natural warmth. Perfect for residential and commercial spaces seeking luxury timber floors.',
    category: 'flooring',
    subCategory: 'Solid Wood Floor',
    specs: { 
      material: 'Natural Solid Wood', 
      origin: 'Okan',
      warranty: '5 Years',
      installation: 'Professional Installation Available'
    },
    features: ['100% Natural Wood', 'High Durability', 'Elegant Finish', 'Water Resistant Coating'],
    applications: ['Living Rooms', 'Bedrooms', 'Offices', 'Commercial Spaces'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4o5c_Q2KTz8Qp5piQO6PFwNel3yHuHs6J8GBnoyP_UQ&s=10'
  },
  {
    id: 'solid-wood-kasai',
    slug: 'solid-wood-kasai',
    title: 'Kasai Solid Wood Flooring',
    description: 'Authentic Kasai wood flooring bringing African elegance to your interiors. Known for its rich color and exceptional strength, ideal for premium residential projects.',
    category: 'flooring',
    subCategory: 'Solid Wood Floor',
    specs: { 
      material: 'Natural Solid Wood', 
      origin: 'Kasai Wood',
      warranty: '5 Years',
      installation: 'Professional Installation Available'
    },
    features: ['Premium Quality', 'Rich Natural Color', 'Excellent Grain Pattern', 'Scratch Resistant'],
    applications: ['Luxury Homes', 'Villas', 'High-End Offices', 'Hotels'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQWzgslmCW-If8h_kxhPAm2nKj3TSkRG-fUcGve3Ksw&s=10'
  },
  {
    id: 'solid-wood-oak',
    slug: 'solid-wood-oak',
    title: 'Oak Solid Wood Flooring',
    description: 'Classic and timeless oak wood flooring combining beauty with exceptional durability. Available in various finishes for contemporary and traditional interiors.',
    category: 'flooring',
    subCategory: 'Solid Wood Floor',
    specs: { 
      material: 'Natural Solid Wood', 
      origin: 'Oak Wood',
      warranty: '5 Years',
      installation: 'Professional Installation Available'
    },
    features: ['Time-Tested Quality', 'Natural Beauty', 'High Hardness', 'Versatile Design'],
    applications: ['Residential Spaces', 'Traditional Homes', 'Libraries', 'Study Rooms'],
    image: 'https://www.floorsdirectltd.co.uk/media/catalog/product/cache/7970fcf057957355aad0d8b359bae463/image/6681d8a/natural-oak-brushed-and-oiled-90mm-18mm-solid-wood-flooring.jpg'
  },
  {
    id: 'german-laminate-flooring',
    slug: 'german-laminate-flooring',
    title: 'German Laminate Flooring',
    description: 'Premium German-made laminate flooring with superior quality and longevity. Known for exceptional durability and authentic wood appearance.',
    category: 'flooring',
    subCategory: 'Laminate Floor',
    specs: { 
      origin: 'Germany', 
      material: 'HDF Laminate',
      warranty: '10 Years',
      installation: 'Professional Installation Available'
    },
    features: ['German Engineering', 'High Durability', 'Authentic Look', 'Eco-Friendly'],
    applications: ['Premium Homes', 'Office Buildings', 'Retail Spaces', 'Restaurants'],
    image: 'https://ebonywoods.pk/wp-content/uploads/2025/02/Italian-Walnut-542076-1-433x516.jpg'
  },
  {
    id: 'turkish-laminate-flooring',
    slug: 'turkish-laminate-flooring',
    title: 'Turkish Laminate Flooring',
    description: 'Premium Turkey-style laminate flooring with a realistic wood-look finish, dependable durability, and a refined aesthetic suited to contemporary residential and commercial interiors.',
    category: 'flooring',
    subCategory: 'Laminate Floor',
    specs: { 
      origin: 'Turkey', 
      material: 'HDF Laminate',
      thickness: ['7mm', '8mm'],
      finishes: ['Wood Grain Finish', 'Natural Oak Look', 'Modern Timber Look'],
      warranty: '7 Years',
      installation: 'Professional Installation Available'
    },
    features: ['Realistic Wood Finish', 'Excellent Quality', 'Durable Construction', 'Easy to Maintain'],
    applications: ['Living Rooms', 'Bedrooms', 'Offices', 'Retail Spaces', 'Hospitality Interiors'],
    image: 'https://image.made-in-china.com/2f0j00apVvbQrBJEqw/Turkey-Style-Laminate-Flooring-Excellent-Quality-Vinyl-Flooring-Wooden-Floor-8mm-7mm.webp'
  },
  {
    id: 'krono-swiss-laminate-flooring',
    slug: 'krono-swiss-laminate-flooring',
    title: 'Krono Swiss Laminate Flooring',
    description: 'Luxury Swiss laminate flooring combining refined detailing, durable construction, and elegant timber-inspired aesthetics for premium residential and commercial projects.',
    category: 'flooring',
    subCategory: 'Laminate Floor',
    specs: { 
      origin: 'Switzerland', 
      material: 'HDF High Density Laminate',
      finishes: ['Timber Look', 'Natural Grain', 'Premium Finish'],
      warranty: '15 Years',
      installation: 'Professional Installation Available'
    },
    features: ['Swiss Quality', 'Innovative Design', 'Superior Durability', 'Luxury Appeal'],
    applications: ['Premium Villas', 'Executive Offices', 'Luxury Hotels', 'High-End Retail'],
    image: 'https://www.imperialfloor.gr/portal-img/product_image/1/4492-2.jpg'
  },
  {
    id: 'spc-flooring-collection',
    slug: 'spc-flooring-collection',
    title: 'SPC Stone Polymer Flooring',
    description: 'High-performance SPC flooring designed for waterproof durability, modern finishes, and long-lasting performance in high-traffic residential and commercial spaces.',
    category: 'flooring',
    subCategory: 'SPC Flooring',
    specs: { 
      material: 'Stone Plastic Composite', 
      types: ['Standard Plank', 'Herringbone SPC', 'Interlocking Planks'],
      warranty: '10 Years',
      installation: 'Professional Installation Available'
    },
    features: ['100% Waterproof', 'Rigid Structure', 'Easy Installation', 'UV Resistant', 'Low Maintenance'],
    applications: ['Kitchens', 'Bathrooms', 'Swimming Pools', 'Wet Areas', 'Commercial Kitchens'],
    image: 'https://5.imimg.com/data5/SELLER/Default/2020/12/LB/BS/YN/18245834/spc-flooring-interlocking-planks.jpg'
  },
  {
    id: 'vinyl-flooring-collection',
    slug: 'vinyl-flooring-collection',
    title: 'Vinyl & Carpet Tile Flooring',
    description: 'Versatile vinyl and carpet tile flooring offering slip resistance, comfort underfoot, and a practical finish for residential, office, and commercial interiors.',
    category: 'flooring',
    subCategory: 'Vinyl Flooring',
    specs: { 
      types: ['Roll Vinyl Flooring', 'Carpet Tile Flooring', 'Anti-Slip Vinyl'],
      warranty: '3-5 Years',
      installation: 'Professional Installation Available'
    },
    features: ['Soft Underfoot', 'Sound Dampening', 'Comfortable', 'Budget-Friendly', 'Anti-Slip Surface'],
    applications: ['Bedrooms', 'Living Rooms', 'Offices', 'Schools', 'Healthcare Facilities', 'Commercial Lobbies'],
    image: 'https://image.made-in-china.com/202f0j00GgNosbrnLckq/Anti-Slip-Carpet-Vinyl-Flooring-Nylon-Carpet-Tile.webp'
  },
  {
    id: 'grass-carpet',
    slug: 'grass-carpet',
    title: 'Artificial Grass',
    description: 'Natural-looking artificial grass carpet designed to create lush, modern outdoor and indoor green spaces with a soft texture, visual warmth, and easy maintenance.',
    category: 'flooring',
    subCategory: 'Artificial Grass',
    specs: {
      material: 'Synthetic Grass Carpet',
      thickness: ['10mm', '20mm', '30mm', '40mm', '50mm'],
      finish: 'Natural Green Finish',
      warranty: '2-3 Years',
      installation: 'Professional Installation Available'
    },
    features: ['Natural Green Look', 'Soft and Comfortable Surface', 'Weather Resistant', 'Low Maintenance'],
    applications: ['Balconies', 'Terraces', 'Garden Areas', 'Indoor Accent Spaces', 'Commercial Lounge Areas'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8cjmXorXp9N92Zyq1R89TJEJWqOuwiNYdUc7mxHWuWoxOwKWLL4vEoyM&s=10'
  },
  {
    id: 'glass-paper',
    slug: 'glass-paper',
    title: 'Glass Paper',
    description: 'Decorative glass paper finishes for adding visual interest or privacy to interior glass surfaces. Choose from decorative and privacy options to suit your space.',
    category: 'glass-paper',
    subCategory: 'Glass Paper',
    specs: {
      material: 'Decorative glass paper',
      types: ['Decorative', 'Privacy'],
      typesLabel: 'Available Types / Finishes',
      finish: 'Glossy appearance'
    },
    features: ['Decorative Finish Options', 'Privacy Option Available', 'Smooth Glossy Appearance', 'Suitable for Interior Glass Surfaces'],
    applications: ['Windows', 'Glass Doors', 'Office Partitions', 'Retail Displays'],
    image: '/images/products/glass-paper.svg'
  },
  {
    id: 'gym-decking-flooring',
    slug: 'gym-decking-flooring',
    title: 'Gym & Outdoor Decking Flooring',
    description: 'Robust decking and gym flooring made for active spaces, combining impact resistance, slip safety, and weather-ready performance for indoor and outdoor use.',
    category: 'flooring',
    subCategory: 'Specialty Flooring',
    specs: { 
      types: ['Gym Flooring', 'Decking Flooring', 'Outdoor Composite Deck'],
      warranty: '5-7 Years',
      installation: 'Professional Installation Available'
    },
    features: ['Impact Resistant', 'Weather Resistant', 'Safety Features', 'Professional Grade'],
    applications: ['Fitness Centers', 'Sports Facilities', 'Outdoor Decks', 'Playgrounds', 'Commercial Kitchens'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayap2Yuul7PrszfIfodKpHxy5hg8BAfq0Q1Gan2Q04A&s=10'
  },
  {
    id: 'chinese-u-groove-laminate',
    slug: 'chinese-u-groove-laminate',
    title: 'Chinese U-Groove Laminate Flooring',
    description: 'Chinese 12+2mm U-groove laminate planks with a wide 5 x 48 inch format, practical durability, and a clean timber look for modern interiors.',
    category: 'flooring',
    subCategory: 'Laminate Floor',
    specs: {
      origin: 'China',
      thickness: ['12+2mm'],
      finishes: ['U-Groove Plank'],
      material: 'HDF Laminate',
      installation: 'Professional Installation Available'
    },
    features: ['Wide Plank Format', 'Durable Surface', 'Wood Grain Finish', 'Easy Maintenance'],
    applications: ['Apartments', 'Living Rooms', 'Bedrooms', 'Office Interiors'],
    image: LOCAL_IMAGES.chineseUGroove[0],
    gallery: LOCAL_IMAGES.chineseUGroove
  },
  {
    id: 'chinese-square-edge-laminate',
    slug: 'chinese-square-edge-laminate',
    title: 'Chinese Square Edge Economy Laminate',
    description: 'An economical Chinese square-edge laminate collection offering versatile wood tones and dependable performance for residential and commercial projects.',
    category: 'flooring',
    subCategory: 'Laminate Floor',
    specs: {
      origin: 'China',
      thickness: ['8mm', '10mm', '12mm'],
      finishes: ['Square Edge', 'Wood Grain'],
      material: 'HDF Laminate',
      installation: 'Professional Installation Available'
    },
    features: ['Value Focused', 'Multiple Wood Tones', 'Scratch Resistant', 'Easy Maintenance'],
    applications: ['Apartments', 'Rental Properties', 'Offices', 'Retail Spaces'],
    image: LOCAL_IMAGES.chineseSquareEdge[0],
    gallery: LOCAL_IMAGES.chineseSquareEdge
  },
  {
    id: 'eir-surface-hdf-laminate',
    slug: 'eir-surface-hdf-laminate',
    title: 'EIR Surface HDF Laminate Flooring',
    description: 'EIR surface HDF laminate flooring with a tactile embossed grain and V-groove profile that brings a refined natural-wood character to contemporary spaces.',
    category: 'flooring',
    subCategory: 'Laminate Floor',
    specs: {
      thickness: ['8mm'],
      finishes: ['EIR Surface', 'V-Groove'],
      material: 'HDF Laminate',
      installation: 'Professional Installation Available'
    },
    features: ['Embossed Grain', 'Natural Wood Appearance', 'Durable Surface', 'Low Maintenance'],
    applications: ['Premium Homes', 'Executive Offices', 'Hotels', 'Showrooms'],
    image: LOCAL_IMAGES.eirLaminate[0],
    gallery: LOCAL_IMAGES.eirLaminate
  },
  {
    id: 'turkish-wooden-floor',
    slug: 'turkish-wooden-floor',
    title: 'Turkish Wooden Floor Collection',
    description: 'A warm Turkish wooden floor collection selected for natural grain, inviting tones, and an elegant finish across residential and hospitality interiors.',
    category: 'flooring',
    subCategory: 'Wooden Floor',
    specs: {
      origin: 'Turkey',
      material: 'Engineered Wood',
      finishes: ['Natural Wood Grain'],
      installation: 'Professional Installation Available'
    },
    features: ['Natural Character', 'Warm Finish', 'Timeless Design', 'Professional Installation'],
    applications: ['Living Rooms', 'Bedrooms', 'Boutique Hotels', 'Luxury Homes'],
    image: LOCAL_IMAGES.turkishFloor[0],
    gallery: LOCAL_IMAGES.turkishFloor
  },
  {
    id: 'turkish-wooden-flooring',
    slug: 'turkish-wooden-flooring',
    title: 'Turkish Wooden Flooring',
    description: 'Premium Turkish wooden flooring with expressive plank patterns and a refined finish for projects that call for authentic timber warmth.',
    category: 'flooring',
    subCategory: 'Wooden Floor',
    specs: {
      origin: 'Turkey',
      material: 'Engineered Wood',
      finishes: ['Natural Timber Finish'],
      installation: 'Professional Installation Available'
    },
    features: ['Authentic Timber Look', 'Elegant Grain', 'Durable Construction', 'Versatile Styling'],
    applications: ['Villas', 'Dining Rooms', 'Office Interiors', 'Hotels'],
    image: LOCAL_IMAGES.turkishWoodenFlooring[0],
    gallery: LOCAL_IMAGES.turkishWoodenFlooring
  },
  {
    id: 'decking-flooring-collection',
    slug: 'decking-flooring-collection',
    title: 'Decking Flooring Collection',
    description: 'Durable decking flooring designed for outdoor living and high-use areas, with textured surfaces that support confident everyday movement.',
    category: 'flooring',
    subCategory: 'Specialty Flooring',
    specs: {
      material: 'Decking Composite',
      finishes: ['Textured Decking'],
      installation: 'Professional Installation Available'
    },
    features: ['Weather Resistant', 'Textured Surface', 'Low Maintenance', 'Outdoor Ready'],
    applications: ['Outdoor Decks', 'Terraces', 'Poolside Areas', 'Commercial Outdoor Spaces'],
    image: LOCAL_IMAGES.decking[0],
    gallery: LOCAL_IMAGES.decking
  },

  // --- WALL COVERINGS & PANELS ---
  {
    id: 'imported-wallpapers',
    slug: 'imported-wallpapers',
    title: 'Designer Imported Wallpapers',
    description: 'Curated collection of designer wallpapers from international brands. Transform your walls with contemporary, traditional, or artistic designs.',
    category: 'wall-coverings',
    subCategory: 'Wallpaper',
    specs: {
      origin: 'China, Korea, Malaysia, Germany',
      finishes: ['Plain', 'Motive', 'Texture', 'Contemporary', 'Floral'],
      warranty: '2-3 Years',
      installation: 'Professional Installation Available'
    },
    features: ['Designer Collections', 'Multiple Finishes', 'Easy Installation', 'Wide Color Palette'],
    applications: ['Bedroom Walls', 'Living Room Accent', 'Commercial Offices', 'Hospitality Spaces'],
    image: LOCAL_IMAGES.wallCoverings[0],
    gallery: LOCAL_IMAGES.wallCoverings
  },
  {
    id: 'custom-wall-murals',
    slug: 'custom-wall-murals',
    title: 'Customized Wall Murals',
    description: 'Personalized wall murals bringing your vision to life. Custom-printed designs for unique, artistic interiors in homes and commercial spaces.',
    category: 'wall-coverings',
    subCategory: 'Murals',
    specs: { 
      material: 'Custom Printed Wall Mural',
      warranty: '3-5 Years',
      installation: 'Professional Installation Available'
    },
    features: ['Fully Customizable', 'High Resolution Printing', 'Durable Material', 'Artistic Expression'],
    applications: ['Feature Walls', 'Commercial Spaces', 'Retail Stores', 'Creative Studios', 'Children Rooms'],
    image: 'https://primedecor.pk/cdn/shop/files/362_940x.jpg?v=1732742963'
  },
  {
    id: 'architectural-wall-panels',
    slug: 'architectural-wall-panels',
    title: 'Decorative Wall Panels',
    description: 'Modern 3D wall panels adding depth and texture to interior spaces. WPC and PS panels for contemporary design with architectural appeal.',
    category: 'wall-coverings',
    subCategory: 'Wall Panels',
    specs: { 
      types: ['WPC Panels', 'PS Panels', '3D Panels'],
      warranty: '5 Years',
      installation: 'Professional Installation Available'
    },
    features: ['3D Design', 'Sound Insulation', 'Weather Resistant', 'Modern Aesthetic'],
    applications: ['Accent Walls', 'Office Reception', 'Commercial Interiors', 'Modern Homes', 'Restaurants'],
    image: LOCAL_IMAGES.wallPanels[0],
    gallery: LOCAL_IMAGES.wallPanels
  },

  // --- CEILINGS ---
  {
    id: 'false-ceiling-systems',
    slug: 'false-ceiling-systems',
    title: 'False Ceiling Systems',
    description: 'Complete false ceiling solutions for aesthetic enhancement and functional benefits. Gypsum, POP, and PVC options for diverse requirements.',
    category: 'ceiling',
    subCategory: 'Ceilings',
    specs: { 
      types: ['Gypsum Ceiling', 'Dumpa Ceiling', 'POP Ceiling', 'PVC Ceiling'],
      warranty: '3-5 Years',
      installation: 'Professional Installation Required'
    },
    features: ['Lightweight', 'Easy Maintenance', 'Fire Resistant', 'Sound Dampening', 'Wire Management'],
    applications: ['Living Rooms', 'Offices', 'Retail Shops', 'Healthcare Facilities', 'Restaurants'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLTMXuhJIyzAqIFkl44x5exwsHXyb0MUmWMbXpQXRVD0S0cShjgJ2KV3Ux&s=10'
  },

  // --- WINDOW COVERINGS ---
  {
    id: 'custom-window-blinds',
    slug: 'custom-window-blinds',
    title: 'Customized Window Blinds',
    description: 'Premium window blind solutions tailored to your specifications. Wooden, roller, and specialty blinds for light control and privacy.',
    category: 'window-coverings',
    subCategory: 'Window Blinds',
    specs: {
      types: [
        'Wooden Blinds',
        'Roller Blinds (Sunscreen, Darkout, Semi Darkout)',
        'Printed Roller Blind',
        'Zebra Blinds',
        'Shangrella Blinds',
        'Norman Blinds',
        'Mini Blind',
        'PVC Blind'
      ],
      warranty: '2-3 Years',
      installation: 'Professional Installation Available'
    },
    features: ['Custom Sizes', 'Multiple Options', 'Light Control', 'Privacy Solutions', 'Motorized Options Available'],
    applications: ['Residential Windows', 'Office Spaces', 'Hotels', 'Restaurants', 'Showrooms'],
    image: LOCAL_IMAGES.windowCoverings[0],
    gallery: LOCAL_IMAGES.windowCoverings
  },
  {
    id: 'window-curtains',
    slug: 'window-curtains',
    title: 'Custom Window Curtains',
    description: 'Elegant custom curtains and drapes in premium fabrics. Designer collections combining functionality with interior aesthetics.',
    category: 'window-coverings',
    subCategory: 'Curtains',
    specs: { 
      material: 'Fabric & Sheer Drape',
      warranty: '2 Years',
      installation: 'Professional Installation Available'
    },
    features: ['Custom Tailoring', 'Premium Fabrics', 'Designer Patterns', 'Motorized Options', 'Heat Insulation'],
    applications: ['Living Rooms', 'Bedrooms', 'Theater Rooms', 'Luxury Hotels', 'Corporate Offices'],
    image: LOCAL_IMAGES.curtains[0],
    gallery: LOCAL_IMAGES.curtains
  },

  // --- DOORS ---
  // {
  //   id: 'folding-sliding-doors',
  //   slug: 'folding-sliding-doors',
  //   title: 'Folding & Sliding Doors',
  //   description: 'Space-saving door solutions for modern interiors. Premium folding and sliding doors in wood and aluminum for seamless transitions.',
  //   category: 'doors',
  //   subCategory: 'Doors',
  //   specs: { 
  //     types: ['PVC Folding Door', 'Solid Wooden Door', 'Aluminium Sliding Door'],
  //     warranty: '3-5 Years',
  //     installation: 'Professional Installation Required'
  //   },
  //   features: ['Space-Saving', 'Smooth Operation', 'Weather Resistant', 'Security Features', 'Multiple Finishes'],
  //   applications: ['Closets', 'Room Dividers', 'Wardrobes', 'Shower Enclosures', 'Balcony Access'],
  //   image: LOCAL_IMAGES.doors[0],
  //   gallery: LOCAL_IMAGES.doors
  // }
];

// NOTE: Temporarily exclude specific products that reference problematic images.
// Traced products using the images requested to be commented out:
// - wall-covering-sample-17  (from LOCAL_IMAGES.wallCoverings[16] -> /images/products/wall-coverings/wall-covering-17.jpeg)
// - window-covering-sample-1 (from LOCAL_IMAGES.windowCoverings[0] -> /images/products/window-coverings/window-coverings-1.jpeg)
// - custom-window-blinds   (BASE_PRODUCTS entry using LOCAL_IMAGES.windowCoverings[0])
const EXCLUDED_IMAGE_PATHS = [
  '/images/products/wall-coverings/wall-covering-17.jpeg',
  '/images/products/window-coverings/window-coverings-1.jpeg',
];

export const PRODUCTS: Product[] = [...BASE_PRODUCTS, ...LOCAL_CATALOG_PRODUCTS].filter(
  (p) => !EXCLUDED_IMAGE_PATHS.includes(p.image as string)
);