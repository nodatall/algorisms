export class UnionFindStructure {
  constructor(nodes) {
    this.nodes = nodes
    this.pointers = this.createPointers()
    this.sizes = Array(nodes.length + 1).fill(1)
  }

  createPointers() {
    const pointers = []
    this.nodes.forEach(node => {
      pointers[node] = node
    })
    return pointers
  }

  findRepresentative(node) {
    while (node !== this.pointers[node]) node = this.pointers[node]
    return node
  }

  same(node1, node2) {
    return this.findRepresentative(node1) === this.findRepresentative(node2)
  }

  unite(node1, node2) {
    const rep1 = this.findRepresentative(node1),
      rep2 = this.findRepresentative(node2)

    if ( this.sizes[rep1] > this.sizes[rep2] ) {
      this.sizes[rep1] += this.sizes[rep2]
      this.pointers[rep2] = rep1
    } else {
      this.sizes[rep2] += this.sizes[rep1]
      this.pointers[rep1] = rep2
    }
  }
}
