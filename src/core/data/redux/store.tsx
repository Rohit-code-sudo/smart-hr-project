import { configureStore } from '@reduxjs/toolkit';
import themeSettingSlice from './themeSettingSlice';
import sidebarSlice from './sidebarSlice';
import authReducer from './AuthSlice';

const store = configureStore({
  reducer: {
    themeSetting: themeSettingSlice,
    sidebarSlice: sidebarSlice,
    auth: authReducer,
  },
});

export default store;