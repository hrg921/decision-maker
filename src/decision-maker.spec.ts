import { DecisionMaker } from './decision-maker';

it('DecisionMaker should be initialized with more than three options, if not throw error', () => {
    const options = [undefined, undefined];
    expect(() => DecisionMaker.initialize({ options })).toThrowError()
});
