import type { Metadata } from 'next';
import WindowCoveringsCatalog from '@/components/WindowCoveringsCatalog';

export const metadata: Metadata = {
  title: 'Blinds | Flourish Interiors',
  description:
    'Explore window blinds with options for light control, privacy, and a tailored fit.',
};

export default function BlindsPage() {
  return <WindowCoveringsCatalog subcategory="blinds" />;
}
