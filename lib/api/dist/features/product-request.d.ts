import { z } from 'zod';
declare const CategoryParser: z.ZodEnum<["feature", "ui", "ux", "enhancement", "bug"]>;
declare type ICategory = z.infer<typeof CategoryParser>;
declare const StatusParser: z.ZodDefault<z.ZodEnum<["suggestion", "planned", "in-progress", "live"]>>;
declare type IStatus = z.infer<typeof StatusParser>;
declare const ProductFeedbackParser: z.ZodObject<{
    title: z.ZodString;
    category: z.ZodEnum<["feature", "ui", "ux", "enhancement", "bug"]>;
    upvotes: z.ZodOptional<z.ZodNumber>;
    status: z.ZodDefault<z.ZodEnum<["suggestion", "planned", "in-progress", "live"]>>;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    upvotes?: number | undefined;
    status: "suggestion" | "planned" | "in-progress" | "live";
    title: string;
    category: "feature" | "ui" | "ux" | "enhancement" | "bug";
    description: string;
}, {
    status?: "suggestion" | "planned" | "in-progress" | "live" | undefined;
    upvotes?: number | undefined;
    title: string;
    category: "feature" | "ui" | "ux" | "enhancement" | "bug";
    description: string;
}>;
declare type IProductFeedback = z.infer<typeof ProductFeedbackParser>;
interface IProductFeedbackEntity extends IProductFeedback {
    id: number;
}
declare function createProductFeedback(request: Pick<IProductFeedback, 'title' | 'category' | 'description'>): Promise<IProductFeedbackEntity>;
export { ProductFeedbackParser, createProductFeedback };
export type { IProductFeedbackEntity, IProductFeedback, ICategory, IStatus };
