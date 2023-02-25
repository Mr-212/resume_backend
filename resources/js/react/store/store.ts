import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from './root';
import { useDispatch } from 'react-redux'
// import additionalMiddleware from 'additional-middleware';
// import logger from 'redux-logger';

// import logger from 'redux-logger';


const store = configureStore({

    reducer: rootReducer,
    // middleware: getDefaultMiddleware => {
    //     getDefaultMiddleware()
    //   .prepend(
    //     // correctly typed middlewares can just be used
    //     additionalMiddleware,
    //     // you can also type middlewares manually
    //     untypedMiddleware as Middleware<
    //       (action: Action<'specialAction'>) => number,
    //       RootState
    //     >
    //   )
    //   // prepend and concat calls can be chained
    //   .concat(logger)
    // }

});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch


export default store;
