import type { Metadata } from 'next';
import WindowCoveringsCatalog from '@/components/WindowCoveringsCatalog';

export const metadata: Metadata = {
  title: 'Curtains | Flourish Interiors',
  description: 'Curtain collections coming soon from Flourish Interiors.',
};

export default function CurtainsPage() {
  return <WindowCoveringsCatalog subcategory="curtains" />;
}
