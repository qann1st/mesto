export default class Section {
  constructor(renderer, container) {
    this._renderer = renderer;
    this._container = container;
  }

  renderItems(items) {
    return items.map((item) => {
      return this._renderer(item);
    });
  }

  renderItem(element) {
    return this._renderer(element);
  }

  addItem(element, end = false) {
    this._element = this.renderItem(element);
    if (end) {
      this._container.append(this._element);
    } else {
      this._container.prepend(this._element);
    }
  }

  addItems(items) {
    this.renderItems(items).forEach((element) => {
      this._container.append(element);
    });
  }
}
