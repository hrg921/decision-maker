export const MORE_THAN_THREE_OPTIONS_NEEDED_ERROR_MESSAGE =
  "There must be more than three options";

interface InitializeArgs {
  options: any[];
}

export class DecisionMaker {
  constructor(type?: string, questions?: any) {}

  public initialize({ options }: InitializeArgs) {
    if (options.length < 3) {
      throw Error(MORE_THAN_THREE_OPTIONS_NEEDED_ERROR_MESSAGE);
    }
  }

  public makeDecision(answers: any[]) {
    return "not great partner relationship";
  }
}
