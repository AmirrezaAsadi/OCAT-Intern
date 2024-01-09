import type { Sequelize } from 'sequelize';
import { Assessment } from './Assessment';
import { User } from './User';

export {
  Assessment, User,
};

export function initModels(sequelize: Sequelize) {
  Assessment.initModel(sequelize);
}
