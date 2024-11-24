import { defineCollection, z } from "astro:content";

const productSchema = z.object({
    name: z.string(),
    price: z.number(),
    currency: z.string(),
    category: z.string(),
    in_stock: z.boolean(),
    img: z.string().url(),
});


export const productCollection = defineCollection({
    schema: productSchema,
});
