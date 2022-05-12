import { getStaticReducers as baseGetStaticReducers } from 'SourceStore/index';
import TogglerReducer from 'Store/Toggler/Toggler.reducer';

/** @namespace TaskApp/Store/Index/getStaticReducers */
export const getStaticReducers = () => ({
    ...baseGetStaticReducers(),
    TogglerReducer
});

export default function injectStaticReducers(store) {
    Object.entries(getStaticReducers()).forEach(([name, reducer]) => store.injectReducer(name, reducer));
    return store;
}
