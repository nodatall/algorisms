export default ( graph, startNode ) => {
  const distances = new Array( graph.length ).fill( Infinity ),
    queue = new PriorityQueue(),
    visited = []

  distances[startNode] = 0
  queue.push({ distance: 0, index: startNode })

  while(!queue.isEmpty()) {
    const current = queue.pop().index
    if (visited[current]) continue
    visited[current] = 1

    graph[current].forEach(node => {
      if (distances[current] + node.distance < distances[node.index]) {
        distances[node.index] = distances[current] + node.distance
        queue.push({ distance: distances[node.index], index: node.index })
      }
    })
  }

  return distances
}

function PriorityQueue () {
  this.queue = []
}

PriorityQueue.prototype.push = function (item) {
  if (this.queue.length === 1) {
    if (item.distance > this.queue[0].distance) {
      this.queue.push(item)
    } else {
      this.queue.unshift(item)
    }
    return
  }

  let start = 0,
    end = this.queue.length - 1,
    pivot

  while (start <= end) {
    pivot = Math.floor((end + start) / 2)

    if (item.distance > this.queue[pivot].distance) {
      start = pivot + 1
    } else if (item.distance < this.queue[pivot].distance) {
      end = pivot - 1
    } else {
      break
    }
  }

  this.queue.splice(pivot, 0, item)
}

PriorityQueue.prototype.pop = function () {
  return this.queue.shift()
}

PriorityQueue.prototype.isEmpty = function () {
  return this.queue.length === 0
}
