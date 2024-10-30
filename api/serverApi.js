/* export const serverApi = {
    async callUrl({ data, url, method = 'GET', raw }) {
      console.log(`[Request] URL: ${url}`, { data, method });  // Basic logging
      let body = data ? (typeof data === 'string' ? data : JSON.stringify(data)) : null;
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Cache-Control', 'no-cache');
  
      try {
        const response = await fetch(url, { method, headers, body });
        const responseData = raw ? await response.text() : await response.json();
        console.log(`[Response] URL: ${url}`, responseData);
        return {
          isSuccess: response.ok,
          statusCode: response.status,
          data: responseData
        };
      } catch (error) {
        console.error('Error in callUrl', error);
        return {
          isSuccess: false,
          reason: error
        };
      }
    }
  };
  
  const debug = {
    log: console.log,
    error: console.error
  }; */

  import fetch from 'node-fetch';

// Function to fetch a post from JSONPlaceholder
const fetchPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'; // URL to fetch the first post
    try {
        const response = await fetch(url);
        if (!response.ok) { // Check if response was successful
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const post = await response.json(); // Parse JSON data from the response
        console.log(post); // Log the post data
    } catch (error) {
        console.error('Error fetching post:', error.message); // Log any errors that occur during the fetch
    }
};

// Call the function
fetchPost();