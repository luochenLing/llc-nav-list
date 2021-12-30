declare const llcNavList: import("./utils/with-install").SFCWithInstall<import("@vue/runtime-core").DefineComponent<{
    subtractHeight: {
        type: import("@vue/runtime-core").PropType<number>;
        default: number;
        required: true;
    };
    viewClientHeight: {
        type: import("@vue/runtime-core").PropType<number>;
        default: number;
    };
    additionalY: {
        type: import("@vue/runtime-core").PropType<number>;
        default: number;
    };
    reBoundExponent: {
        type: import("@vue/runtime-core").PropType<number>;
        default: number;
        validator: (value: number) => boolean;
    };
    sensitivity: {
        type: import("@vue/runtime-core").PropType<number>;
        default: number;
        validator(this: boolean, value: number): boolean;
    };
    domHeight: {
        type: import("@vue/runtime-core").PropType<number>;
        default: number;
        validator: (value: number) => boolean;
    };
}, {
    root: import("@vue/reactivity").Ref<any>;
    navList: import("@vue/reactivity").Ref<any>;
    props: Readonly<{
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        subtractHeight: number;
        viewClientHeight: number;
        additionalY: number;
        reBoundExponent: number;
        sensitivity: number;
        domHeight: number;
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
    viewAreaHight: import("@vue/reactivity").ComputedRef<number>;
    navListHeight: import("@vue/reactivity").ComputedRef<any>;
    listHeight: import("@vue/reactivity").ComputedRef<number>;
    transitionTimingFunction: import("@vue/reactivity").ComputedRef<"cubic-bezier(0.25, 0.46, 0.45, 0.94)" | "cubic-bezier(0.1, 0.57, 0.1, 1)">;
    transitionDuration: import("@vue/reactivity").ComputedRef<number | undefined>;
    style: import("@vue/reactivity").ComputedRef<any>;
    isMoveTop: import("@vue/reactivity").ComputedRef<boolean>;
    isMoveDown: import("@vue/reactivity").ComputedRef<boolean>;
    moveFollowTouch: () => void;
    moveByInertia: () => void;
    checkReboundY: () => boolean;
    navTouchStart: (e: any) => void;
    navTouchMove: (e: any) => void;
    navTouchEnd: (e: any) => void;
}, unknown, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, Record<string, any>, string, import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    subtractHeight?: unknown;
    viewClientHeight?: unknown;
    additionalY?: unknown;
    reBoundExponent?: unknown;
    sensitivity?: unknown;
    domHeight?: unknown;
} & {
    subtractHeight: number;
    viewClientHeight: number;
    additionalY: number;
    reBoundExponent: number;
    sensitivity: number;
    domHeight: number;
} & {}>, {
    subtractHeight: number;
    viewClientHeight: number;
    additionalY: number;
    reBoundExponent: number;
    sensitivity: number;
    domHeight: number;
}>>;
export { llcNavList };
