import { z } from 'zod';
import { Environment } from '../global/environment';

const CategoryParser = z.enum(['feature', 'ui', 'ux', 'enhancement', 'bug'] as const);
type ICategory = z.infer<typeof CategoryParser>;

const StatusParser = z.enum(['suggestion', 'planned', 'in-progress', 'live'] as const).default('suggestion');
type IStatus = z.infer<typeof StatusParser>;

const ProductFeedbackParser = z.object({
  title: z.string().min(1, 'Title is required'),
  category: CategoryParser,
  upvotes: z.number().optional(),
  status: StatusParser,
  description: z.string().min(1, 'Description is required')
});
type IProductFeedback = z.infer<typeof ProductFeedbackParser>;

interface IProductFeedbackEntity extends IProductFeedback {
  id: number;
}

async function createProductFeedback(
  request: Pick<IProductFeedback, 'title' | 'category' | 'description'>
): Promise<IProductFeedbackEntity> {
  const url = [Environment.API_URL, 'product-request/create'].join('/');
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: { 'content-type': 'application/json' }
  });

  return response.json();
}

export { ProductFeedbackParser, createProductFeedback };
export type { IProductFeedbackEntity, IProductFeedback, ICategory, IStatus };
