import { configureStore } from '@reduxjs/toolkit';
import users from './user/userSlice'

export default configureStore({ reducer: { users } });