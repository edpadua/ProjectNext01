import { configureStore } from '@reduxjs/toolkit';

import flagsSlice  from './features/flags';
import searchSlice from './features/search';
import { useSelector, TypedUseSelectorHook } from 'react-redux';


export const store = configureStore({
    reducer: {
      flags:flagsSlice,
      search:searchSlice,
    }
  });

export type RootState= ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState>=useSelector;


 