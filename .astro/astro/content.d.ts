declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"hello-world.md": {
	id: "hello-world.md";
  slug: "hello-world";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"garden": {
"assurance-game.md": {
	id: "assurance-game.md";
  slug: "assurance-game";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"commitment-devices.md": {
	id: "commitment-devices.md";
  slug: "commitment-devices";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"finding-interesting-things-to-do-in-seattle.md": {
	id: "finding-interesting-things-to-do-in-seattle.md";
  slug: "finding-interesting-things-to-do-in-seattle";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"gemini-protocol.md": {
	id: "gemini-protocol.md";
  slug: "gemini-protocol";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"hawk-dove.md": {
	id: "hawk-dove.md";
  slug: "hawk-dove";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"historical-and-comparative-linguistics.md": {
	id: "historical-and-comparative-linguistics.md";
  slug: "historical-and-comparative-linguistics";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"lerobot.md": {
	id: "lerobot.md";
  slug: "lerobot";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"linguistics.md": {
	id: "linguistics.md";
  slug: "linguistics";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"morphology.md": {
	id: "morphology.md";
  slug: "morphology";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"music-discovery-sites.md": {
	id: "music-discovery-sites.md";
  slug: "music-discovery-sites";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"nash-equilibrium.md": {
	id: "nash-equilibrium.md";
  slug: "nash-equilibrium";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"phonetics.md": {
	id: "phonetics.md";
  slug: "phonetics";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"phonology.md": {
	id: "phonology.md";
  slug: "phonology";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"prisoners-dilemma.md": {
	id: "prisoners-dilemma.md";
  slug: "prisoners-dilemma";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"stag-hunt.md": {
	id: "stag-hunt.md";
  slug: "stag-hunt";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"syntax.md": {
	id: "syntax.md";
  slug: "syntax";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
"the-design-of-everyday-things.md": {
	id: "the-design-of-everyday-things.md";
  slug: "the-design-of-everyday-things";
  body: string;
  collection: "garden";
  data: InferEntrySchema<"garden">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
