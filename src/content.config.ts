import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Invoice Ninja'),
    category: z.enum([
      'invoicing',
      'freelancing',
      'small-business',
      'tips',
      'product-updates',
      'case-studies',
      'comparisons',
      'how-to',
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
    oldSlug: z.string().optional(),
  }),
});

const paymentGateways = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/payment-gateways' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    logo: z.string(),
    website: z.string().url(),
    features: z.array(z.string()).default([]),
    regions: z.array(z.string()).default([]),
    sortOrder: z.number().default(0),
  }),
});

const software = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/software' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    logo: z.string(),
    website: z.string().url(),
    category: z.enum(['automation', 'hosting', 'integration', 'developer']),
    sortOrder: z.number().default(0),
  }),
});

const hosting = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/hosting' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    logo: z.string(),
    website: z.string().url(),
    features: z.array(z.string()).default([]),
    pricing: z.string().optional(),
    sortOrder: z.number().default(0),
  }),
});

const partnerPerks = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/partner-perks' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    logo: z.string().optional(),
    link: z.string().url(),
    discount: z.string(),
    sortOrder: z.number().default(0),
  }),
});

export const collections = { blog, paymentGateways, software, hosting, partnerPerks };
