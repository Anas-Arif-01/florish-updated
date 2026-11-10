import { MENU_TREE, type MenuNode, type MenuRoot } from '@/data/menu-tree';
import type { Product } from '@/data/products';

/* Helpers shared by the navbar dropdown and the /catalog card pages. */

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/* /catalog?category=flooring&path=wooden-floor/solid-wood */
export function nodeHref(rootId: string, pathSlugs: string[] = []) {
  if (rootId === 'all') return '/catalog';
  if (rootId === 'window-coverings') {
    return `/catalog/window-coverings${pathSlugs.length ? `/${pathSlugs.join('/')}` : ''}`;
  }
  const base = `/catalog?category=${rootId}`;
  return pathSlugs.length ? `${base}&path=${pathSlugs.join('/')}` : base;
}

export interface FoundNode {
  root: MenuRoot;
  node: MenuNode;
  /* every step below the root: the node, plus its slug path up to that step */
  trail: { node: MenuNode; slugs: string[] }[];
}

/* Walks the tree: category id + path slugs → the node, or null if not found */
export function findNode(
  rootId: string | undefined,
  pathSlugs: string[] = []
): FoundNode | null {
  const root = MENU_TREE.find((r) => r.id === rootId && r.id !== 'all');
  if (!root) return null;

  let node: MenuNode = root;
  const trail: FoundNode['trail'] = [];
  const slugs: string[] = [];

  for (const slug of pathSlugs) {
    const next = node.children?.find((child) => slugify(child.label) === slug);
    if (!next) return null;
    node = next;
    slugs.push(slug);
    trail.push({ node, slugs: [...slugs] });
  }

  return { root, node, trail };
}

/* Products that belong directly to this node (see `match` in menu-tree.ts) */
export function productsFor(node: MenuNode, products: Product[]): Product[] {
  const match = node.match;
  if (!match) return [];
  return products.filter(
    (p) =>
      match.subCategories?.includes(p.subCategory) ||
      match.titles?.some((title) => p.title.includes(title))
  );
}

/* Photo for a node's card: its own `image`, else one of its products,
   else one from anything inside it. Local photos are preferred. */
export function nodeImage(
  node: MenuNode,
  products: Product[]
): string | undefined {
  if (node.image) return node.image;

  const own = productsFor(node, products);
  const ownPick =
    own.find((p) => p.image?.startsWith('/')) ?? own.find((p) => p.image);
  if (ownPick) return ownPick.image;

  for (const child of node.children ?? []) {
    const found = nodeImage(child, products);
    if (found) return found;
  }
  return undefined;
}
