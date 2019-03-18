import { DbEntity } from './dbEntity.type';
import { BlEntity } from './blEntity.type';

export function createTree(db: DbEntity[]): BlEntity[] {
  const root = db.find(elem => elem.parentId = null);
  
};
