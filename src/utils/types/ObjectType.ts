type ObjectType<K extends string | number | symbol, V = any> = {
    [key in K]: V;
};

export type { ObjectType }