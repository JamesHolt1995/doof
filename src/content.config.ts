import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // Not available with legacy API

const releases = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/releases" }),
	schema: ({ image }) =>
		z.object({
			cover: image(),
			title: z.string(),
			link: z.string(),
		}),
});

export const collections = { releases };
