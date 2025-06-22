import * as tf from '@tensorflow/tfjs';
export interface EthicalConstraint {
    dimension: string;
    weight: number;
    threshold: number;
}
export declare class SigmaMatrixLayer {
    private constraints;
    private ethicalTensor;
    private recursionDepth;
    constructor(constraints?: EthicalConstraint[]);
    private initializeEthicalTensor;
    processWithEthics(input: tf.Tensor): Promise<tf.Tensor>;
    calculateEntropy(output: tf.Tensor): number;
    generateERPS(input: tf.Tensor): Promise<{
        output: tf.Tensor;
        entropy: number;
        confidence: number;
    }>;
    updateConstraints(feedback: number, learningRate?: number): void;
}
//# sourceMappingURL=SMRL.d.ts.map