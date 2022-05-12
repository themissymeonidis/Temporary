import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Menu from 'Component/Menu';

import './Toggler.style';

/** @namespace TaskApp/Component/Toggler/Component */
export class TogglerComponent extends PureComponent {
    static propTypes = {
        isEnabled: PropTypes.bool,
        isActive: PropTypes.bool,
        onTogglerClick: PropTypes.func
    };

    static defaultProps = {
        isEnabled: false,
        isActive: false,
        onTogglerClick: false
    };

    renderCloseButton() {
        const { onTogglerClick } = this.props;
        return (
            <svg
              block="XIcon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              onClick={ onTogglerClick }
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z" />
            </svg>
        );
    }

    render() {
        const { isEnabled } = this.props;
        const { isActive } = this.props;
        const { onTogglerClick } = this.props;

        if (isEnabled === false) {
            return (
                <svg
                  block="MenuIcon"
                  mods={ { isActive } }
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  onClick={ onTogglerClick }
                  xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
            );
        }

        return (
            <div className="my-div">
                { this.renderCloseButton() }
                <Menu />
            </div>
        );
    }
}

export default TogglerComponent;
