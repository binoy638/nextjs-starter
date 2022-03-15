import { useDispatch } from 'react-redux';

import { AppDispatch } from '@reduxStore/index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTypedDispatch = () => useDispatch<AppDispatch>();
