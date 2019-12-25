import { EvolutionComponent } from './evolution.component.interface';

interface EvolutionComponentArgs {
  isCompleted?: boolean;
  title: string;
}

export abstract class EvolutionComponent implements EvolutionComponent {
  public readonly isCompleted: boolean;
  public readonly title: string;

  constructor({ isCompleted, title }: EvolutionComponentArgs) {
    this.isCompleted = isCompleted || false;
    this.title = title;
  }
}
ㅎ