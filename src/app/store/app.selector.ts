import { createFeatureSelector } from '@ngrx/store';
import { Appstate } from './appState';

export const selectAppState = createFeatureSelector<Appstate>('appState');