import * as RawClient from '../api-client';

const baseUrl = 'https://localhost:7047';

function fetchWithAuthorization(url: RequestInfo, init?: RequestInit) {
  return fetch(url, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: localStorage.getItem('access_token')
        ? `Bearer ${localStorage.getItem('access_token')}`
        : ''
    }
  });
}

const Auth = new RawClient.AuthClient(baseUrl, {
  fetch: fetchWithAuthorization
});

const ProductRequest = new RawClient.ProductRequestClient(baseUrl, {
  fetch: fetchWithAuthorization
});

export { RawClient, Auth, ProductRequest };
