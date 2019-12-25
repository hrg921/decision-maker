import { EvolutionComponent } from '../evolution.component.interface';

interface GoalArgs {
  isCompleted?: boolean;
  title: string;
}

export class Goal implements EvolutionComponent {
  public readonly title: string;

  constructor({ title }: GoalArgs) {
    this.title = title;
  }
}
