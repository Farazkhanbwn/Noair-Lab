import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from './store';

// ✅ Use typed dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
// ✅ Use typed selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
