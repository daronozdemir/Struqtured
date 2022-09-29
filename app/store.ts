import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Action } from 'redux';
import profileReducer from './slices/templateSlice';
import counterReducer from '../components/counter/counterSlice';
import plannerReducer from '../components/planner/plannerSlice'


export const store = configureStore({
    reducer: {
        profile: profileReducer,
        planner: plannerReducer,
        counter: counterReducer
    },
    devTools: true
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;

export default store;