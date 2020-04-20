export function iterate<T extends unknown>(
  items: T[],
  each: (item: T, index: number) => Kurtka.Node
): () => Kurtka.Node[] {
  const keyMap = new Map();

  return () => {
    return items.map((item, i) => {
      if (keyMap.has(item)) {
        return keyMap.get(item);
      }
      const renderFn = each(item, i);
      keyMap.set(item, renderFn);
      return renderFn;
    });
  };
}
