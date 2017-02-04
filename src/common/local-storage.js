class LocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }

  set(key, value) {
    this.storage[key] = typeof value !== 'string' ? JSON.stringify(value) : value;
  }

  get(key) {
    return this.storage[key] || null;
  }
}

export default new LocalStorage();
