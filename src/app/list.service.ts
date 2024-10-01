class ListItem<T> {
    private list: List<T>;
    private index: number;

    public value: T;

    constructor(list: List<T>, value: T, index: number) {
        this.list = list;
        this.index = index;
        this.value = value;
    }

    prev(): ListItem<T> {
        return this.list.get(this.index - 1);
    }

    next(): ListItem<T> {
        return this.list.get(this.index + 1);   
    }
}

class List<T> {
    private items: Array<ListItem<T>>;

    constructor() {
        this.items = [];
    }

    size(): number {
        return this.items.length;
    }

    add(value: T): void {
        this.items.push(new ListItem<T>(this, value, this.size()));
    }

    get(index: number): ListItem<T> {
        return this.items[index];
    }
}

// interface ListItem<T> {
//     list : List<T>;
//     index: number;

//     value: T;

//     // constructor(list: List<T>, value T, index: number) {
        
//     // }

//     prev(): ListItem<T> {
//         return this.list.get(this.index - 1);
//     }
// }

// interface List<T> {
//     items: Array<ListItem<T>>;

//     get(index: number): ListItem<T> {
//         return this.items[index];
//     }
// }

// interface List<T> {
//     clear(): void;
//     /**
//      * @returns true if an element in the List existed and has been removed, or false if the element does not exist.
//      */
//     delete(key: T): boolean;
//     /**
//      * Executes a provided function once per each key/value pair in the Map, in insertion order.
//      */
//     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
//     /**
//      * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
//      * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
//      */
//     get(key: K): V | undefined;
//     /**
//      * @returns boolean indicating whether an element with the specified key exists or not.
//      */
//     has(key: K): boolean;
//     /**
//      * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
//      */
//     set(key: K, value: V): this;
//     /**
//      * @returns the number of elements in the Map.
//      */
//     readonly size: number;
// }

// interface ListConstructor {
//     new (): List<any>;
//     new <T>(entries?: readonly T[] | null): List<T>;
//     readonly prototype: List<any>;
// }