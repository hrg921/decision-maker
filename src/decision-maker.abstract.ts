import { Decision } from './decision.interface';

export abstract class DecisionMaker {
  public abstract makeDecision(): Decision;
}
