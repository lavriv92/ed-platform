class LocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }

  set(key : string, value) {
    this.storage[key] = typeof value !== 'string' ? JSON.stringify(value) : value;
  }

  get(key : string) {
    let value = this.storage[key];
    return value ? JSON.parse(this.storage[key]) : null;
  }

  remove(key : string) {
    delete this.storage[key];
  }
}

export default new LocalStorage();
