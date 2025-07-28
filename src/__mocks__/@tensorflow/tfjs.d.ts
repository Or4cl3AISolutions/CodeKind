import { type Mock } from "vitest";
type MockTensor = {
    dataSync: Mock<any[], any>;
    mul: Mock<any[], any>;
    relu: Mock<any[], any>;
    sigmoid: Mock<any[], any>;
    sub: Mock<any[], any>;
    square: Mock<any[], any>;
    sum: Mock<any[], any>;
};
export declare const tensor1d: Mock<any[], MockTensor>;
export declare const scalar: Mock<[value: number], {}>;
export declare const mul: Mock<[a: MockTensor, b: MockTensor], MockTensor>;
export declare const relu: Mock<[tensor: MockTensor], MockTensor>;
export declare const sigmoid: Mock<[tensor: MockTensor], MockTensor>;
export declare const sub: Mock<[a: MockTensor, b: MockTensor], MockTensor>;
export declare const mean: Mock<[tensor: MockTensor], {
    dataSync: Mock<[], number[]>;
}>;
export declare const abs: Mock<[tensor: MockTensor], MockTensor>;
export declare const grad: Mock<[f: (t: MockTensor) => any], Mock<[t_val: any], MockTensor>>;
declare const _default: {
    tensor1d: Mock<any[], MockTensor>;
    scalar: Mock<[value: number], {}>;
    mul: Mock<[a: MockTensor, b: MockTensor], MockTensor>;
    relu: Mock<[tensor: MockTensor], MockTensor>;
    sigmoid: Mock<[tensor: MockTensor], MockTensor>;
    sub: Mock<[a: MockTensor, b: MockTensor], MockTensor>;
    mean: Mock<[tensor: MockTensor], {
        dataSync: Mock<[], number[]>;
    }>;
    abs: Mock<[tensor: MockTensor], MockTensor>;
    grad: Mock<[f: (t: MockTensor) => any], Mock<[t_val: any], MockTensor>>;
};
export default _default;
//# sourceMappingURL=tfjs.d.ts.map