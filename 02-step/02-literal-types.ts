function fetchWithAuth(url: string, method: 'get' | 'post'): 1 | -1 {
  return 1;
}

fetchWithAuth('vk.com', 'get');

let method = '3';

fetchWithAuth('vk.com', method as 'post');