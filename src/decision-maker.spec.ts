import { DecisionMaker, MORE_THAN_THREE_OPTIONS_NEEDED_ERROR_MESSAGE } from './decision-maker';

it('DecisionMaker should be initialized with more than three options, if not throw error', () => {
    const decisionMaker = new DecisionMaker();
    const options = [undefined, undefined];
    expect(() => decisionMaker.initialize({ options })).toThrowError(MORE_THAN_THREE_OPTIONS_NEEDED_ERROR_MESSAGE)
});
