export default class Node {
  constructor(value, ...args) {
    this.value = value
    this.children = Array.from(args)
  }
}
