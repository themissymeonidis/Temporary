// TODO update this import when renamed
import { CHANGESTATUS } from './Toggler.action';

/** @namespace TaskApp/Store/Toggler/Reducer/getInitialState */
export const getInitialState = () => ({
    sidebarState: true
});

/** @namespace TaskApp/Store/Toggler/Reducer/TogglerReducer */
export const TogglerReducer = (state = getInitialState(), action) => {
    switch (action.type) {
    case CHANGESTATUS:
        return {
            ...state,
            sidebarState: !state.sidebarState
        };
    default:
        return state;
    }
};

export default TogglerReducer;
