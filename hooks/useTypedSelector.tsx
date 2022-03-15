import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '@reduxStore/index';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
