export function makeReactive<T extends any>(source: T, reactFn: Function): T {
  if (Array.isArray(source)) {
    source.forEach((item: any, index: number) => {
      source[index] = makeReactive(item, reactFn);
    });
    return new Proxy(source, {
      set(target, key, value) {
        target[key as number] = makeReactive(value, reactFn);
        if (key !== "length") {
          reactFn();
        }
        return true;
      },
      deleteProperty<T>(target: T[], key: number) {
        if (target[key]) {
          target.splice(key, 1);
          delete target[key];
          reactFn();
          return true;
        }
        return false;
      },
    });
  } else if (typeof source === "object") {
    Object.entries(source).forEach(([k, v]) => {
      source[k] = makeReactive(v, reactFn);
    });
    return new Proxy(source as any, {
      set(target, key, value) {
        target[key] = makeReactive(value, reactFn);
        reactFn();
        return true;
      },
    });
  } else {
    return source;
  }
}
