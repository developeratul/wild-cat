import { ThunkAction, ThunkDispatch } from 'redux-thunk';


export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
