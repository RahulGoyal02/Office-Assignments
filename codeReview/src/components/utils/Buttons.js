function* PaginationButton(start, end) {
  if (start + 2 < end) {
    for (var i = start; i < start + 2; i++) {
        yield i
    }
  }
}

export { PaginationButton }