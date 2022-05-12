import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
    DEFAULT_HEADER_STATE as SOURCE_DEFAULT_HEADER_STATE,
    HeaderContainer as SourceHeaderContainer,
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps
} from 'SourceComponent/Header/Header.container';

// TODO: implement DEFAULT_HEADER_STATE
export const DEFAULT_HEADER_STATE = SOURCE_DEFAULT_HEADER_STATE;

/** @namespace TaskApp/Component/Header/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    ...sourceMapStateToProps(state)
    // TODO extend mapStateToProps
});

/** @namespace TaskApp/Component/Header/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    ...sourceMapDispatchToProps(dispatch)
    // TODO extend mapDispatchToProps
});

/** @namespace TaskApp/Component/Header/Container */
export class HeaderContainer extends SourceHeaderContainer {
    // TODO implement logic
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
