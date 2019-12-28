import { getRepository } from 'typeorm';

import { Decision } from './decision.typeorm.entity';

export const decisionRepository = getRepository(Decision);
