import { Service } from 'typedi';
import { DecisionService } from '~koa/services/decision';

@Service()
export class DecisionController {
  constructor(private decisionService: DecisionService) {}

  public addDecision(title: string) {
    return this.decisionService.addDecision(title);
  }
}
