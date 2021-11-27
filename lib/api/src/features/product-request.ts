import { z } from 'zod';

const CategoryParser = z.enum(['feature', 'ui', 'ux', 'enhancement', 'bug'] as const);
type ICategory = z.infer<typeof CategoryParser>;

const ProductRequestParser = z.object({
  title: z.string().min(1, 'Title is required'),
  category: z.string().min(1, 'Category is required'),
  upvotes: z.number().optional(),
  status: z.string().optional(),
  description: z.string().min(1, 'Description is required')
});
type IProductRequest = z.infer<typeof ProductRequestParser>;

interface IProductRequestEntity extends IProductRequest {
  id: number;
}

export { ProductRequestParser };
export type { IProductRequestEntity, IProductRequest, ICategory };
