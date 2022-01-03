"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductFeedback = exports.ProductFeedbackParser = void 0;
const zod_1 = require("zod");
const environment_1 = require("../global/environment");
const CategoryParser = zod_1.z.enum(['feature', 'ui', 'ux', 'enhancement', 'bug']);
const StatusParser = zod_1.z.enum(['suggestion', 'planned', 'in-progress', 'live']).default('suggestion');
const ProductFeedbackParser = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required'),
    category: CategoryParser,
    upvotes: zod_1.z.number().optional(),
    status: StatusParser,
    description: zod_1.z.string().min(1, 'Description is required')
});
exports.ProductFeedbackParser = ProductFeedbackParser;
function createProductFeedback(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = [environment_1.Environment.API_URL, 'product-request/create'].join('/');
        const response = yield fetch(url, {
            method: 'POST',
            body: JSON.stringify(request),
            headers: { 'content-type': 'application/json' }
        });
        return response.json();
    });
}
exports.createProductFeedback = createProductFeedback;
