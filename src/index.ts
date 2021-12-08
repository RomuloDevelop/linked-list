export class Node<T> {
  constructor(public value: T, public next: Node<T> | null) {}
}

export class LinkedList<T> {

  head: Node<T>;
  tail: Node<T>;
  length: number = 0

  constructor(value: T) {
    this.head = new Node(value, null)
    this.tail = this.head
    this.length ++
  }

  append(value: T) {
    const newNode = new Node(value, null)
    this.tail.next = newNode
    this.tail = newNode
    this.length ++
    return this
  }

  prepend(value: T) {
    const newNode = new Node(value, null)
    newNode.next = this.head
    this.head = newNode
    this.length ++
    return this
  }

  insert(value: T, index: number) {
    const prevNode = this.search(index - 1)
    const newNode = new Node(value, prevNode.next)
    prevNode.next = newNode
    return this
  }

  remove(index: number) {
    const prevNode = this.search(index - 1)
    prevNode.next = (prevNode.next as Node<T>).next
    return this
  }

  search(index: number) {
    let actualNode: Node<T> = this.head
    let i = 0
    while (actualNode != null && i !== index) {
      i ++
      actualNode = actualNode.next as Node<T>
    }

    return actualNode
  }

  toArray() {
    let actualNode: Node<T> = this.head
    let result = []

    while (actualNode != null) {
      result.push(actualNode)
      actualNode = actualNode.next as Node<T>
    }

    return result
  }

}