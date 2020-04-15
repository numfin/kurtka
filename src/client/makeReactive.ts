export function makeReactive<T extends any>(item: T, reactFn: Function): T {
    if (Array.isArray(item)) {
        return new Proxy(
            item.map((v: any) => makeReactive(v, reactFn)),
            {
                set(target, key, value) {
                    if (key !== "length") {
                        target[key as number] = makeReactive(value, reactFn);
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
            set(target, key, value) {
                target[key] = makeReactive(value, reactFn);
                reactFn();
                return true;
            },
        });
    } else {
        return item;
    }
}
