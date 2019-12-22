import { DecisionMaker, MORE_THAN_THREE_OPTIONS_NEEDED_ERROR_MESSAGE } from './decision-maker';

const PARTNER_RELATIONSHIP_DECISION_QUESTIONS = [
  { question: "공동의 가치관과 관심을 가지고 있는가?" },
  { question: "비슷한 방법으로 가치관을 추구하는가?" },
  { question: "서로를 합리적으로 대하면서 배려하는가?" },
  { question: "기꺼이 서로에게 높은 기준을 요구하는가?" },
  { question: "의견 차이를 공개하고 잘 해소하는가?" },
  { question: "의견 차이를 효율적으로 해결하는 명확한 절차가 존재하는가?" }
];

it("DecisionMaker should be initialized with more than three options, if not throw error", () => {
  const decisionMaker = new DecisionMaker();
  const options = [undefined, undefined];
  expect(() => decisionMaker.initialize({ options })).toThrowError(
    MORE_THAN_THREE_OPTIONS_NEEDED_ERROR_MESSAGE
  );
});

it('If there\'s "no" in PARTNER_RELATIONSHIP_DECISION_QUESTIONS then that relationship is not great partner relationship', () => {
  const expected = /not great partner relationship/;
  const decisionMaker = new DecisionMaker(
    "partner relationship",
    PARTNER_RELATIONSHIP_DECISION_QUESTIONS
  );
  const decision = decisionMaker.makeDecision([
    { answer: "answer", conclusion: true },
    { answer: "answer", conclusion: true },
    { answer: "answer", conclusion: true },
    { answer: "answer", conclusion: true },
    { answer: "answer", conclusion: true },
    { answer: "answer", conclusion: false }
  ]);
  expect(decision).toEqual(expect.stringMatching(expected));
});
