"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRequestParser = void 0;
const zod_1 = require("zod");
const CategoryParser = zod_1.z.enum(['feature', 'ui', 'ux', 'enhancement', 'bug']);
const ProductRequestParser = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required'),
    category: zod_1.z.string().min(1, 'Category is required'),
    upvotes: zod_1.z.number().optional(),
    status: zod_1.z.string().optional(),
    description: zod_1.z.string().min(1, 'Description is required')
});
exports.ProductRequestParser = ProductRequestParser;
