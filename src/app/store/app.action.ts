import { createAction, props } from "@ngrx/store";
import { Appstate } from "./appState";

export const setAPIStatus = createAction(
    '[API] success or failure status',
    props<{apiStatus: Appstate}>()
);