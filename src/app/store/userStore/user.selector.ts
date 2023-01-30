import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../data/types/entity/user';

export const selectUser = createFeatureSelector<User[]>('demoUser');

export const selectUserById = (UserId: string) =>
  createSelector(selectUser, (user: User[]) => {
    var userbyId = user.filter((_) => _.id == UserId);
    if (userbyId.length == 0) {
      return null;
    }
    return userbyId[0];
  });