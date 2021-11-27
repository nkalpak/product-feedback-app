import { z } from 'zod';
declare const CategoryParser: z.ZodEnum<["feature", "ui", "ux", "enhancement", "bug"]>;
declare type ICategory = z.infer<typeof CategoryParser>;
declare const ProductRequestParser: z.ZodObject<{
    title: z.ZodString;
    category: z.ZodString;
    upvotes: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status?: string | undefined;
    upvotes?: number | undefined;
    title: string;
    category: string;
    description: string;
}, {
    status?: string | undefined;
    upvotes?: number | undefined;
    title: string;
    category: string;
    description: string;
}>;
declare type IProductRequest = z.infer<typeof ProductRequestParser>;
interface IProductRequestEntity extends IProductRequest {
    id: number;
}
export { ProductRequestParser };
export type { IProductRequestEntity, IProductRequest, ICategory };
