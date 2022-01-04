import * as RawClient from '../api-client';

const baseUrl = 'https://localhost:7047';

const Auth = new RawClient.AuthClient(baseUrl, {
  fetch(url, init): Promise<Response> {
    return fetch(url, {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: localStorage.getItem('access_token') ?? ''
      }
    });
  }
});

export { RawClient, Auth };
