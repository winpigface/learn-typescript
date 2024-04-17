import axios from "axios"
export const fetchJsonPlaceholder = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  return result.json()
  // return fetch('https://jsonplaceholder.typicode.com/posts/1')
}

export const fetchJsonAxios = async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  return result
}
