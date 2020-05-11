import { getEle } from './util.js'

const [
  history,
  res,
  operation,
] = [
  getEle("#history"),
  getEle("#res"),
  getEle("#operation")
];

export default {
  history,
  res,
  operation
}