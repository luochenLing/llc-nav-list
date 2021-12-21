declare const _sfc_main: import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, {
    root: import("vue").Ref<any>;
    navList: import("vue").Ref<any>;
    props: Readonly<{
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & (() => IterableIterator<never>)]: unknown;
        [x: string & (() => IterableIterator<never>) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & {
                (...items: ConcatArray<never>[]): never[];
                (...items: ConcatArray<never>[]): never[];
            }]: unknown;
        [x: string & {
                (...items: ConcatArray<never>[]): never[];
                (...items: ConcatArray<never>[]): never[];
            } & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & ((searchElement: never, fromIndex?: number | undefined) => number)]: unknown;
        [x: string & ((searchElement: never, fromIndex?: number | undefined) => number) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & ((searchElement: never, fromIndex?: number | undefined) => number)]: unknown;
        [x: string & ((searchElement: never, fromIndex?: number | undefined) => number) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & ((start?: number | undefined, end?: number | undefined) => never[])]: unknown;
        [x: string & ((start?: number | undefined, end?: number | undefined) => never[]) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & ((searchElement: never, fromIndex?: number | undefined) => boolean)]: unknown;
        [x: string & ((searchElement: never, fromIndex?: number | undefined) => boolean) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & ((separator?: string | undefined) => string)]: unknown;
        [x: string & ((separator?: string | undefined) => string) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & {
                <S extends never>(predicate: (value: never, index: number, array: readonly never[]) => value is S, thisArg?: any): this is readonly S[];
                (predicate: (value: never, index: number, array: readonly never[]) => unknown, thisArg?: any): boolean;
            }]: unknown;
        [x: string & {
                <S extends never>(predicate: (value: never, index: number, array: readonly never[]) => value is S, thisArg?: any): this is readonly S[];
                (predicate: (value: never, index: number, array: readonly never[]) => unknown, thisArg?: any): boolean;
            } & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & ((predicate: (value: never, index: number, array: readonly never[]) => unknown, thisArg?: any) => boolean)]: unknown;
        [x: string & ((predicate: (value: never, index: number, array: readonly never[]) => unknown, thisArg?: any) => boolean) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & ((callbackfn: (value: never, index: number, array: readonly never[]) => void, thisArg?: any) => void)]: unknown;
        [x: string & ((callbackfn: (value: never, index: number, array: readonly never[]) => void, thisArg?: any) => void) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & (<U>(callbackfn: (value: never, index: number, array: readonly never[]) => U, thisArg?: any) => U[])]: unknown;
        [x: string & (<U>(callbackfn: (value: never, index: number, array: readonly never[]) => U, thisArg?: any) => U[]) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & {
                <S_1 extends never>(predicate: (value: never, index: number, array: readonly never[]) => value is S_1, thisArg?: any): S_1[];
                (predicate: (value: never, index: number, array: readonly never[]) => unknown, thisArg?: any): never[];
            }]: unknown;
        [x: string & {
                <S_1 extends never>(predicate: (value: never, index: number, array: readonly never[]) => value is S_1, thisArg?: any): S_1[];
                (predicate: (value: never, index: number, array: readonly never[]) => unknown, thisArg?: any): never[];
            } & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & {
                (callbackfn: (previousValue: never, currentValue: never, currentIndex: number, array: readonly never[]) => never): never;
                (callbackfn: (previousValue: never, currentValue: never, currentIndex: number, array: readonly never[]) => never, initialValue: never): never;
                <U_1>(callbackfn: (previousValue: U_1, currentValue: never, currentIndex: number, array: readonly never[]) => U_1, initialValue: U_1): U_1;
            }]: unknown;
        [x: string & {
                (callbackfn: (previousValue: never, currentValue: never, currentIndex: number, array: readonly never[]) => never): never;
                (callbackfn: (previousValue: never, currentValue: never, currentIndex: number, array: readonly never[]) => never, initialValue: never): never;
                <U_1>(callbackfn: (previousValue: U_1, currentValue: never, currentIndex: number, array: readonly never[]) => U_1, initialValue: U_1): U_1;
            } & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & {
                (callbackfn: (previousValue: never, currentValue: never, currentIndex: number, array: readonly never[]) => never): never;
                (callbackfn: (previousValue: never, currentValue: never, currentIndex: number, array: readonly never[]) => never, initialValue: never): never;
                <U_2>(callbackfn: (previousValue: U_2, currentValue: never, currentIndex: number, array: readonly never[]) => U_2, initialValue: U_2): U_2;
            }]: unknown;
        [x: string & {
                (callbackfn: (previousValue: never, currentValue: never, currentIndex: number, array: readonly never[]) => never): never;
                (callbackfn: (previousValue: never, currentValue: never, currentIndex: number, array: readonly never[]) => never, initialValue: never): never;
                <U_2>(callbackfn: (previousValue: U_2, currentValue: never, currentIndex: number, array: readonly never[]) => U_2, initialValue: U_2): U_2;
            } & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & {
                <S_2 extends never>(predicate: (this: void, value: never, index: number, obj: readonly never[]) => value is S_2, thisArg?: any): S_2 | undefined;
                (predicate: (value: never, index: number, obj: readonly never[]) => unknown, thisArg?: any): undefined;
            }]: unknown;
        [x: string & {
                <S_2 extends never>(predicate: (this: void, value: never, index: number, obj: readonly never[]) => value is S_2, thisArg?: any): S_2 | undefined;
                (predicate: (value: never, index: number, obj: readonly never[]) => unknown, thisArg?: any): undefined;
            } & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & ((predicate: (value: never, index: number, obj: readonly never[]) => unknown, thisArg?: any) => number)]: unknown;
        [x: string & ((predicate: (value: never, index: number, obj: readonly never[]) => unknown, thisArg?: any) => number) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & (() => IterableIterator<[number, never]>)]: unknown;
        [x: string & (() => IterableIterator<[number, never]>) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & (() => IterableIterator<number>)]: unknown;
        [x: string & (() => IterableIterator<number>) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & (() => IterableIterator<never>)]: unknown;
        [x: string & (() => IterableIterator<never>) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & (<U_3, This = undefined>(callback: (this: This, value: never, index: number, array: never[]) => U_3 | readonly U_3[], thisArg?: This | undefined) => U_3[])]: unknown;
        [x: string & (<U_3, This = undefined>(callback: (this: This, value: never, index: number, array: never[]) => U_3 | readonly U_3[], thisArg?: This | undefined) => U_3[]) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[])]: unknown;
        [x: string & (<A, D extends number = 1>(this: A, depth?: D | undefined) => FlatArray<A, D>[]) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & (() => string)]: unknown;
        [x: string & (() => string) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        [x: string & (() => string)]: unknown;
        [x: string & (() => string) & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        concat: import("vue").Prop<unknown, unknown> | ({
            (...items: ConcatArray<unknown>[]): unknown[];
            (...items: unknown[]): unknown[];
        } & string[]) | null | undefined;
        indexOf: import("vue").Prop<unknown, unknown> | (((searchElement: unknown, fromIndex?: number | undefined) => number) & ((searchElement: string, fromIndex?: number | undefined) => number)) | null | undefined;
        lastIndexOf: import("vue").Prop<unknown, unknown> | (((searchElement: unknown, fromIndex?: number | undefined) => number) & ((searchElement: string, fromIndex?: number | undefined) => number)) | null | undefined;
        slice: import("vue").Prop<unknown, unknown> | (((start?: number | undefined, end?: number | undefined) => unknown[]) & string[]) | null | undefined;
        length: number | import("vue").Prop<unknown, unknown> | null | undefined;
        includes: import("vue").Prop<unknown, unknown> | (((searchElement: unknown, fromIndex?: number | undefined) => boolean) & ((searchElement: string, fromIndex?: number | undefined) => boolean)) | null | undefined;
        join: import("vue").Prop<unknown, unknown> | (((separator?: string | undefined) => string) & string) | null | undefined;
        every: import("vue").Prop<unknown, unknown> | ({
            <S_3 extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S_3, thisArg?: any): this is readonly S_3[];
            (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): boolean;
        } & {
            <S_4 extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S_4, thisArg?: any): this is readonly S_4[];
            (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean;
        }) | null | undefined;
        some: import("vue").Prop<unknown, unknown> | (((predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any) => boolean) & ((predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => boolean)) | null | undefined;
        forEach: import("vue").Prop<unknown, unknown> | (((callbackfn: (value: unknown, index: number, array: readonly unknown[]) => void, thisArg?: any) => void) & ((callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any) => void)) | null | undefined;
        map: import("vue").Prop<unknown, unknown> | ((<U_4>(callbackfn: (value: unknown, index: number, array: readonly unknown[]) => U_4, thisArg?: any) => U_4[]) & (<U_5>(callbackfn: (value: string, index: number, array: readonly string[]) => U_5, thisArg?: any) => U_5[])) | null | undefined;
        filter: import("vue").Prop<unknown, unknown> | ({
            <S_5 extends unknown>(predicate: (value: unknown, index: number, array: readonly unknown[]) => value is S_5, thisArg?: any): S_5[];
            (predicate: (value: unknown, index: number, array: readonly unknown[]) => unknown, thisArg?: any): unknown[];
        } & {
            <S_6 extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S_6, thisArg?: any): S_6[];
            (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[];
        }) | null | undefined;
        reduce: import("vue").Prop<unknown, unknown> | ({
            (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown): unknown;
            (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown, initialValue: unknown): unknown;
            <U_6>(callbackfn: (previousValue: U_6, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => U_6, initialValue: U_6): U_6;
        } & {
            (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string;
            (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string;
            <U_7>(callbackfn: (previousValue: U_7, currentValue: string, currentIndex: number, array: readonly string[]) => U_7, initialValue: U_7): U_7;
        }) | null | undefined;
        reduceRight: import("vue").Prop<unknown, unknown> | ({
            (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown): unknown;
            (callbackfn: (previousValue: unknown, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => unknown, initialValue: unknown): unknown;
            <U_8>(callbackfn: (previousValue: U_8, currentValue: unknown, currentIndex: number, array: readonly unknown[]) => U_8, initialValue: U_8): U_8;
        } & {
            (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string;
            (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string;
            <U_9>(callbackfn: (previousValue: U_9, currentValue: string, currentIndex: number, array: readonly string[]) => U_9, initialValue: U_9): U_9;
        }) | null | undefined;
        find: import("vue").Prop<unknown, unknown> | ({
            <S_7 extends unknown>(predicate: (this: void, value: unknown, index: number, obj: readonly unknown[]) => value is S_7, thisArg?: any): S_7 | undefined;
            (predicate: (value: unknown, index: number, obj: readonly unknown[]) => unknown, thisArg?: any): unknown;
        } & {
            <S_8 extends string>(predicate: (this: void, value: string, index: number, obj: readonly string[]) => value is S_8, thisArg?: any): S_8 | undefined;
            (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string | undefined;
        }) | null | undefined;
        findIndex: import("vue").Prop<unknown, unknown> | (((predicate: (value: unknown, index: number, obj: readonly unknown[]) => unknown, thisArg?: any) => number) & ((predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any) => number)) | null | undefined;
        entries: import("vue").Prop<unknown, unknown> | ((() => IterableIterator<[number, unknown]>) & IterableIterator<[number, string]>) | null | undefined;
        keys: import("vue").Prop<unknown, unknown> | ((() => IterableIterator<number>) & IterableIterator<number>) | null | undefined;
        values: import("vue").Prop<unknown, unknown> | ((() => IterableIterator<unknown>) & IterableIterator<string>) | null | undefined;
        flatMap: import("vue").Prop<unknown, unknown> | ((<U_10, This_1 = undefined>(callback: (this: This_1, value: unknown, index: number, array: unknown[]) => U_10 | readonly U_10[], thisArg?: This_1 | undefined) => U_10[]) & (<U_11, This_2 = undefined>(callback: (this: This_2, value: string, index: number, array: string[]) => U_11 | readonly U_11[], thisArg?: This_2 | undefined) => U_11[])) | null | undefined;
        flat: import("vue").Prop<unknown, unknown> | ((<A_1, D_1 extends number = 1>(this: A_1, depth?: D_1 | undefined) => FlatArray<A_1, D_1>[]) & unknown[]) | null | undefined;
        toString: (() => string) | ((() => string) & (() => string) & string);
        toLocaleString: (() => string) | ((() => string) & (() => string) & string);
    }>;
    data: {
        frameStartTime: number;
        frameEndTime: number;
        frameTime: number;
        acceleration: number;
        speed: number;
        lastY: number;
        startY: number;
        currentY: number;
        translateY: number;
        inertiaFrame: number;
        touching: boolean;
        startMoveTime: number;
        endMoveTime: number;
        zeroSpeed: number;
        reBounding: boolean;
        fixBottom: boolean;
        reBoundingDuration: number;
    };
    viewAreaHight: import("vue").ComputedRef<number>;
    navListHeight: import("vue").ComputedRef<any>;
    listHeight: import("vue").ComputedRef<number>;
    transitionTimingFunction: import("vue").ComputedRef<"cubic-bezier(0.25, 0.46, 0.45, 0.94)" | "cubic-bezier(0.1, 0.57, 0.1, 1)">;
    transitionDuration: import("vue").ComputedRef<number | undefined>;
    style: import("vue").ComputedRef<any>;
    isMoveTop: import("vue").ComputedRef<boolean>;
    isMoveDown: import("vue").ComputedRef<boolean>;
    moveFollowTouch: () => void;
    moveByInertia: () => void;
    checkReboundY: () => boolean;
    navTouchStart: (e: any) => void;
    navTouchMove: (e: any) => void;
    navTouchEnd: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, readonly string[] | Readonly<{
    [x: string]: unknown;
} & {} & {
    [x: string]: import("vue").Prop<unknown, unknown> | null | undefined;
}>, {
    [x: number]: string;
} | {}>;
export default _sfc_main;
