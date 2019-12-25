import { Evolution } from './evolution';

it("Completed Evolution has Goal, Problem, Diagnosis, Design, Action and all the components are completed", () => {
  const completedEvolution = new Evolution();

  completedEvolution.goal = { isCompleted: true, title: "goal" };
  completedEvolution.problem = { isCompleted: true, title: "problem" };
  completedEvolution.diagnosis = { isCompleted: true, title: "diagnosis" };
  completedEvolution.design = { isCompleted: true, title: "design" };
  completedEvolution.action = { isCompleted: true, title: "action" };

  expect(completedEvolution.state).toEqual("completed");
});

it(
  'is about the methodology how to achieve goal. And I defined this process "evolution"'
);
