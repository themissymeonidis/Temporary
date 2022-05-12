import propTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { changeStatus } from 'Store/Toggler/Toggler.action';

import Toggler from './Toggler.component';

/** @namespace TaskApp/Component/Toggler/Container/mapStateToProps */
export const mapStateToProps = (_state) => ({
    isEnabled: _state.TogglerReducer.sidebarState
});

/** @namespace TaskApp/Component/Toggler/Container/mapDispatchToProps */
export const mapDispatchToProps = (_dispatch) => ({
    changeStatus: (state) => _dispatch(changeStatus(state))
});

/** @namespace TaskApp/Component/Toggler/Container */
export class TogglerContainer extends PureComponent {
    static propTypes = {
        isEnabled: propTypes.bool.isRequired,
        changeStatus: propTypes.func.isRequired
    };

    containerFunctions = {
        onTogglerClick: this.onTogglerClick.bind(this)
        // getData: this.getData.bind(this)
    };

    onTogglerClick() {
        const { changeStatus } = this.props;
        changeStatus(this.state);
    }

    containerProps() {
    }

    render() {
        return (
            <Toggler
              { ...this.props }
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TogglerContainer);
