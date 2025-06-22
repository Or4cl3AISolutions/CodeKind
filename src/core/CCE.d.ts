import * as tf from '@tensorflow/tfjs';
export declare class CoreCognitiveEngine {
    private model;
    initialize(): Promise<void>;
    process(input: tf.Tensor): Promise<tf.Tensor>;
    recursiveAbstract(input: tf.Tensor, depth?: number): Promise<tf.Tensor>;
}
//# sourceMappingURL=CCE.d.ts.map