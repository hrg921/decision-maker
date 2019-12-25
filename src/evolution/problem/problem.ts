import { EvolutionComponent } from '../evolution.component.interface';

interface ProblemArgs {
  isCompleted?: boolean;
  title: string;
}

export class Problem implements EvolutionComponent {
  public readonly isCompleted: boolean;
  public readonly title: string;

  constructor({ isCompleted, title }: ProblemArgs) {
    this.isCompleted = isCompleted || false;
    this.title = title;
  }
}
