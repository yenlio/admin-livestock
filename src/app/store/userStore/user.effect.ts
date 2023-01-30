import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { UserServiceService } from "src/app/data/service/user-service.service";
import { getuserRequest,getuserSuccess, adduserRequest,adduserSuccess, deleteuserRequest, deleteuserSuccess, updateUserRequest, updateUserSucess } from "../../store/userStore/user.actions";
import { setAPIStatus } from "../app.action";
import { Appstate } from "../appState";
import { selectUser } from "./user.selector";

@Injectable()
export class UserEffect {
    constructor(
        private actions$: Actions,
        private userService: UserServiceService,
        private store: Store,
        private appStore: Store<Appstate>
    ) { }

    loadAllUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getuserRequest),
            withLatestFrom(this.store.pipe(select(selectUser))),
            mergeMap(([, userformStore]) => {
                if (userformStore.length > 0) {
                    return EMPTY;
                }
                return this.userService
                    .get()
                    .pipe(map((data) => getuserSuccess({ allUser: data })));
            })
        )
    );

    saveNewUsers$= createEffect(()=>{
        return this.actions$.pipe(
            ofType(adduserRequest),
            switchMap((action)=>{
                // this.appStore.dispatch(
                //     setAPIStatus({
                //         apiStatus:{
                //             apiResponseMessage:'',
                //             apiStatus:''
                //         }
                //     })
                // );
                return this.userService.create(action.newUser).pipe(
                    map((data)=>{
                        this.appStore.dispatch(
                            setAPIStatus({
                                apiStatus:{
                                    apiResponseMessage:'',
                                    apiStatus:'success'
                                }
                            })
                        )
                        return adduserSuccess({newUser:data})
                    })
                )

            })
        )
    })
    deleteBooksAPI$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(deleteuserRequest),
          switchMap((actions) => {
            this.appStore.dispatch(
              setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
            );
            return this.userService.delete(actions.id).pipe(
              map(() => {
                this.appStore.dispatch(
                  setAPIStatus({
                    apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
                  })
                );
                return deleteuserSuccess({ id: actions.id });
              })
            );
          })
        );
      });

      updateBookAPI$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(updateUserRequest),
          switchMap((action) => {
            this.appStore.dispatch(
              setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
            );
            return this.userService.update(action.updateUser).pipe(
              map((data) => {
                this.appStore.dispatch(
                  setAPIStatus({
                    apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
                  })
                );
                return updateUserSucess({ updateUser: data });
              })
            );
          })
        );
      });

}