export class Evolution {
  private _goal: any;
  public set goal(goal: any) {
    this._goal = goal;
  }
  private _problem: any;
  public set problem(problem: any) {
    this._problem = problem;
  }
  private _diagnosis: any;
  public set diagnosis(diagnosis: any) {
    this._diagnosis = diagnosis;
  }
  private _design: any;
  public set design(design: any) {
    this._design = design;
  }
  private _action: any;
  public set action(action: any) {
    this._action = action;
  }
  public get state(): { title: string } {
    return { title: "completed" };
  }
}
