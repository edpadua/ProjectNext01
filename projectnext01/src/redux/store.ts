import { configureStore } from '@reduxjs/toolkit';

import flagsSlice  from './features/flags';
import searchSlice from './features/search';


const store = configureStore({
    reducer: {
      flags:flagsSlice,
      search:searchSlice,
    }
  });

  export default store;