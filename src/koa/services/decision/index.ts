import { Service } from 'typedi';
import { DecisionRepository } from '~koa/repositories/decision';

@Service()
export class DecisionService {
  constructor(private decisionRepository: DecisionRepository) {}

  public addDecision(title: string) {
    return this.decisionRepository.addDecision(title);
  }
}
