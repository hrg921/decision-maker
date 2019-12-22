it("Completed Evolution has Goal, Problem, Diagnosis, Design, Action", () => {
  const completedEvolution = new Evolution({
    goal: new Goal({ title: "goal" }),
    problem: new Problem({ title: "problem" }),
    diagnosis: new Diagnosis({ title: "diagnosis" }),
    design: new Design({ title: "design" }),
    action: new Action({ title: "action" })
  });

  expect(completedEvolution.state).toEqual("completed");
});
