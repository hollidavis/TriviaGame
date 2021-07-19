// @ts-ignore
export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=1&category=20',
  timeout: 4000
})