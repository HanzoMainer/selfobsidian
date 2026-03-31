import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const notes = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        createdAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
        tags: z.array(z.string()).default([]),
        links: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        pinned: z.boolean().default(false),
        mood: z.enum(["clear", "messy", "experimental"]).default("clear"),
    }),
});

const journal = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        energy: z.number().min(1).max(10),
        focus: z.number().min(1).max(10),
        tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
    notes,
    journal,
};
