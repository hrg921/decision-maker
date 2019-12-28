import { Service } from 'typedi';

import { DecisionEntity } from './decision.entity';
import { decisionRepository } from './decision.typeorm.repository';

@Service()
export class DecisionRepository {
  public async addDecision(title: string): Promise<DecisionEntity> {
    const newDecision = decisionRepository.create({ title });
    const savedDecision = await decisionRepository.save(newDecision);
    return {
      ...savedDecision,
      id: savedDecision.id.toString()
    };
  }
}
