export function makeReactive<T extends any>(item: T, reactFn: Function): T {
    if (Array.isArray(item)) {
        return new Proxy(
            item.map((v: any) => makeReactive(v, reactFn)),
            {
                set(target, key, value) {
                    if (key !== "length") {
                        target[key as number] = value;
                        reactFn();
                    }
                    return true;
                },
            }
        );
    } else if (typeof item === "object") {
        Object.entries(item).forEach(([k, v]) => {
            item[k] = makeReactive(v, reactFn);
        });
        return new Proxy(item as any, {
            set(a, b, c) {
                a[b] = c;
                reactFn();
                return true;
            },
        });
    } else {
        return item;
    }
}
