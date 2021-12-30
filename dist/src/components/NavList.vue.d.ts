import { PropType } from '@vue/runtime-core';
declare const _sfc_main: import("vue").DefineComponent<{
    subtractHeight: {
        type: PropType<number>;
        default: number;
        required: true;
    };
    viewClientHeight: {
        type: PropType<number>;
        default: number;
    };
    additionalY: {
        type: PropType<number>;
        default: number;
    };
    reBoundExponent: {
        type: PropType<number>;
        default: number;
        validator: (value: number) => boolean;
    };
    sensitivity: {
        type: PropType<number>;
        default: number;
        validator(this: boolean, value: number): boolean;
    };
    domHeight: {
        type: PropType<number>;
        default: number;
        validator: (value: number) => boolean;
    };
}, {
    root: import("vue").Ref<any>;
    navList: import("vue").Ref<any>;
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
}>;
export default _sfc_main;
