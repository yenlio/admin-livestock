import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/data/types/entity/user';

export const getuserRequest = createAction(
  '[User] get-user-request'
);

export const getuserSuccess = createAction(
  '[User] get-user-success',
  props<{ allUser: User[] }>()
);
//add user
export const adduserRequest = createAction(
  '[User] add-user-request',
  props<{ newUser: User }>()
);

export const adduserSuccess = createAction(
  '[User] add-user-success',
  props<{ newUser: User }>()
);
//delete user
export const deleteuserRequest = createAction(
  '[User] delete-user-request',
  props<{ id: any }>()
);

export const deleteuserSuccess = createAction(
  '[User] delete-user-success',
  props<{ id: any }>()
);
//edit
export const updateUserRequest = createAction(
  '[User] update-user-request',
  props<{ updateUser: User }>()
);

export const updateUserSucess = createAction(
  '[User] update-user-success',
  props<{ updateUser: User }>()
);