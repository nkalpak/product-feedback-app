import { z } from 'zod';

const ProductRequestParser = z.object({
  title: z.string(),
  category: z.string(),
  upvotes: z.number().optional(),
  status: z.string().optional(),
  description: z.string()
});

type IProductRequest = z.infer<typeof ProductRequestParser>;
interface IProductRequestEntity extends IProductRequest {
  id: number;
}

export { ProductRequestParser };
export type { IProductRequestEntity, IProductRequest };
