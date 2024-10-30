import { serverApi } from './serverApi.js';  // Adjust the path as necessary

serverApi.callUrl({
    url: 'https://jsonplaceholder.typicode.com/posts/1', // A public API for testing
    method: 'GET',
    raw: false
}).then(response => {
    console.log('API Call Response:', response);
}).catch(error => {
    console.error('API Call Failed:', error);
});