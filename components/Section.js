export default class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._renderer = renderer;
    this._container = container;
  }

  renderItems() {
    return this._items.forEach((item) => {
      return this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}
