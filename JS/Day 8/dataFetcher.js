export default class DataFetcher {
  async getUser(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    return data;
  }
}
