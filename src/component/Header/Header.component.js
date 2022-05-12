import PropTypes from 'prop-types';

import OfflineNotice from 'Component/OfflineNotice';
import {
    CartOverlay,
    Header as SourceHeader,
    MyAccountOverlay
} from 'SourceComponent/Header/Header.component';
import { DeviceType } from 'Type/Device.type';
import { isCrawler, isSSR } from 'Util/Browser';

import './Header.override.style';

export {
    CartOverlay,
    MyAccountOverlay
};

/** @namespace TaskApp/Component/Header/Component */
export class HeaderComponent extends SourceHeader {
    static propTypes = {
        navigationState: PropTypes.shape({
            name: PropTypes.string,
            onBackClick: PropTypes.func,
            title: PropTypes.string
        }).isRequired,
        compareTotals: PropTypes.number.isRequired,
        Loading: PropTypes.bool.isRequired,
        onBackButtonClick: PropTypes.func.isRequired,
        onCloseButtonClick: PropTypes.func.isRequired,
        onSearchBarFocus: PropTypes.func.isRequired,
        onClearSearchButtonClick: PropTypes.func.isRequired,
        onMyAccountButtonClick: PropTypes.func.isRequired,
        onSearchBarChange: PropTypes.func.isRequired,
        isWishlistLoading: PropTypes.bool.isRequired,
        onEditButtonClick: PropTypes.func.isRequired,
        onMinicartButtonClick: PropTypes.func.isRequired,
        onOkButtonClick: PropTypes.func.isRequired,
        onCancelButtonClick: PropTypes.func.isRequired,
        onSearchOutsideClick: PropTypes.func.isRequired,
        onMyAccountOutsideClick: PropTypes.func.isRequired,
        onMinicartOutsideClick: PropTypes.func.isRequired,
        isClearEnabled: PropTypes.bool.isRequired,
        searchCriteria: PropTypes.string.isRequired,
        shareWishlist: PropTypes.func.isRequired,
        header_logo_src: PropTypes.string,
        logo_alt: PropTypes.string,
        logo_height: PropTypes.number,
        logo_width: PropTypes.number,
        isLoading: PropTypes.bool,
        showMyAccountLogin: PropTypes.bool,
        isCheckout: PropTypes.bool.isRequired,
        onSignIn: PropTypes.func.isRequired,
        hideActiveOverlay: PropTypes.func.isRequired,
        device: DeviceType.isRequired
    };

    static defaultProps = {
        logo_alt: 'ScandiPWA logo',
        logo_height: 25,
        logo_width: 200,
        showMyAccountLogin: false,
        header_logo_src: '',
        isLoading: true
    };

    render() {
        const {
            navigationState: { name, isHiddenOnMobile = false },
            isCheckout,
            device: { isMobile }
        } = this.props;

        if (isMobile) {
            return (
            <section
              block="header"
              elem="Wrapper"
            >
                <span className="hidden-span">1</span>
            </section>
            );
        }

        return (
            <section
              block="Header"
              elem="Wrapper"
              mods={ { isPrerendered: isSSR() || isCrawler() } }
            >
                <header
                  block="Header"
                  mods={ { name, isHiddenOnMobile, isCheckout } }
                  mix={ { block: 'FixedElement', elem: 'Top' } }
                  ref={ this.logoRef }
                >
                    { this.renderTopMenu() }
                    <nav block="Header" elem="Nav">
                        { this.renderNavigationState() }
                    </nav>
                    { this.renderMenu() }
                </header>
                <OfflineNotice />
            </section>
        );
    }
}

export default HeaderComponent;
