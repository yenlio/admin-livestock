import { createReducer, on } from "@ngrx/store";
import { User } from "../../data/types/entity/user";
import {adduserSuccess, deleteuserSuccess, getuserRequest,getuserSuccess, updateUserSucess } from "./user.actions";
export const initialState: ReadonlyArray<User> = [];

export const UserReducer = createReducer(
    initialState,
    on(getuserSuccess, (state, { allUser }) => {
        console.log("request in reducer");

        return allUser;
    }),
    on(adduserSuccess, (state, { newUser }) => {
        let newState = [...state];
        newState.unshift(newUser);
        return newState;
      }),
    on(deleteuserSuccess, (state, { id }) => {
        console.log(state,"delete in reducer");

        let newState =state.filter((_) => _.id != id);
        return newState;
      }),
      on(updateUserSucess, (state, { updateUser }) => {
        let newState = state.filter((_) => _.id != updateUser.id);
        newState.unshift(updateUser);
        return newState;
      })
);