import PropTypes from 'prop-types';

import CartIcon from 'Component/CartIcon';
import HomeIcon from 'Component/HomeIcon';
import Logo from 'Component/Logo';
import MenuIcon from 'Component/MenuIcon';
import Toggler from 'Component/Toggler';
import UserIcon from 'Component/UserIcon';
import { NavigationTabs as SourceNavigationTabs } from 'SourceComponent/NavigationTabs/NavigationTabs.component';
import { DeviceType } from 'Type/Device.type';
import media from 'Util/Media';
import { LOGO_MEDIA } from 'Util/Media/Media';

import {
    ACCOUNT_TAB,
    CART_TAB,
    MENU_TAB
} from './NavigationTabs.config';

import './NavigationTabs.override.style';

/** @namespace TaskApp/Component/NavigationTabs/Component */
export class NavigationTabsComponent extends SourceNavigationTabs {
    static propTypes = {
        navigationState: PropTypes.shape({
            name: PropTypes.string,
            onBackClick: PropTypes.func,
            title: PropTypes.string
        }).isRequired,

        header_logo_src: PropTypes.string,
        logo_alt: PropTypes.string,
        logo_height: PropTypes.number,
        logo_width: PropTypes.number
    };

    static defaultProps = {
        logo_alt: 'ScandiPWA logo',
        logo_height: 25,
        logo_width: 200,
        showMyAccountLogin: false,
        header_logo_src: '',
        isLoading: true
    };

    static propTypes = {
        device: DeviceType.isRequired
    };

    defaultStateName = MENU_TAB;

    stateMap = {
        [MENU_TAB]: {
            menu: true
        },
        [CART_TAB]: {
            minicart: true
        },
        [ACCOUNT_TAB]: {
            account: true
        }
    };

    renderMap = {
        menu: this.renderMenuButton.bind(this),
        account: this.renderAccountButton.bind(this),
        minicart: this.renderMinicartButton.bind(this)
    };

    renderHomeButton(isActive = false) {
        const { onHomeButtonClick } = this.props;

        return (
            <button
              key="home"
              block="NavigationTabs"
              elem="Button"
              aria-label="Home"
              onClick={ onHomeButtonClick }
            >
                <HomeIcon isActive={ isActive } />
            </button>
        );
    }

    renderMenuButton(isActive = false) {
        const { onMenuButtonClick } = this.props;

        return (
            <button
              key="menu"
              block="NavigationTabs"
              elem="Button"
              aria-label="Go to menu and search"
              onClick={ onMenuButtonClick }
            >
                <MenuIcon isActive={ isActive } />
            </button>
        );
    }

    renderAccountButton(isActive = false) {
        const { onMyAccountButtonClick } = this.props;

        return (
            <button
              key="account"
              block="NavigationTabs"
              elem="Button"
              onClick={ onMyAccountButtonClick }
              aria-label="Open my account"
            >
                <UserIcon isActive={ isActive } />
            </button>
        );
    }

    renderMinicartItemsQty() {
        const { cartTotals: { items_qty } } = this.props;

        if (!items_qty) {
            return null;
        }

        return (
            <span
              aria-label="Items in cart"
              block="Header"
              elem="MinicartItemCount"
            >
                { items_qty }
            </span>
        );
    }

    renderMinicartButton(isActive = false) {
        const { onMinicartButtonClick } = this.props;

        return (
            <button
              key="mincart"
              block="NavigationTabs"
              elem="Button"
              onClick={ onMinicartButtonClick }
              aria-label="Minicart"
            >
                <div block="Header" elem="MinicartWrapper">
                    <div
                      block="Header"
                      elem="Button"
                      mix={ { block: 'NavigationTabs', elem: 'Icon', mods: { isActive } } }
                      mods={ { isVisible: true, type: 'minicart' } }
                    >
                        <CartIcon isActive={ isActive } />
                    </div>
                    { this.renderMinicartItemsQty() }
                </div>
            </button>
        );
    }

    renderLogoImage() {
        const { onHomeButtonClick } = this.props;
        const {
            header_logo_src,
            logo_alt
        } = this.props;

        // if no src defined from the backend, pass null in order to display placeholder
        // and prevent unnecessary load of corrupted resource
        const logoSrc = header_logo_src ? media(header_logo_src, LOGO_MEDIA) : null;

        return (
            <button
              key="home"
              block="NavigationTabs"
              elem="Button"
              aria-label="home"
              onClick={ onHomeButtonClick }
            >
                <Logo
                  src={ logoSrc }
                  alt={ logo_alt }
                  title={ logo_alt }
                />
            </button>
        );
    }

    renderToggler() {
        const { isActive } = this.props;
        const { onTogglerClick } = this.props;
        return (
            <button
              key="toggler"
              block="NavigationTabs"
              elem="Button"
              aria-label="toggler"
              onClick={ onTogglerClick }
            >
                <div block="Header" elem="MinicartWrapper">
                    <div
                      block="Header"
                      elem="Button"
                      mix={ { block: 'NavigationTabs', elem: 'Icon', mods: { isActive } } }
                      mods={ { isVisible: true, type: 'minicart' } }
                    >
                        <Toggler isActive={ isActive } />
                    </div>
                    { this.renderMinicartItemsQty() }
                </div>
            </button>
        );
    }

    render() {
        const { navigationState: { isHidden }, device } = this.props;

        if (!device.isMobile) {
            return null;
        }

        return (
            <footer
              block="NavigationTabs"
              mods={ { isHidden } }
              mix={ { block: 'FixedElement', elem: 'Top' } }
            >
                <nav block="NavigationTabs" elem="Nav">
                    { this.renderToggler() }
                    { this.renderLogoImage() }
                    { this.renderNavigationState() }
                </nav>
            </footer>
        );
    }
}

export default NavigationTabsComponent;
