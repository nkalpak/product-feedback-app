"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRequest = exports.Auth = exports.RawClient = void 0;
const RawClient = __importStar(require("../api-client"));
exports.RawClient = RawClient;
const baseUrl = 'https://localhost:7047';
function fetchWithAuthorization(url, init) {
    return fetch(url, Object.assign(Object.assign({}, init), { headers: Object.assign(Object.assign({}, init === null || init === void 0 ? void 0 : init.headers), { Authorization: localStorage.getItem('access_token')
                ? `Bearer ${localStorage.getItem('access_token')}`
                : '' }) }));
}
const Auth = new RawClient.AuthClient(baseUrl, {
    fetch: fetchWithAuthorization
});
exports.Auth = Auth;
const ProductRequest = new RawClient.ProductRequestClient(baseUrl, {
    fetch: fetchWithAuthorization
});
exports.ProductRequest = ProductRequest;
