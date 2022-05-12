import Link from 'Component/Link';
import { CookiePopup as SourceCookiePopup } from 'SourceComponent/CookiePopup/CookiePopup.component';

import './CookiePopup.override.style';

/** @namespace TaskApp/Component/CookiePopup/Component */
export class CookiePopupComponent extends SourceCookiePopup {
    renderCookieLink() {
        const { cookieLink } = this.props;

        if (!cookieLink) {
            return null;
        }

        return (
            <Link
              block="CookiePopup"
              elem="Link"
              to={ cookieLink }
            >
                { __('Learn More') }
            </Link>
        );
    }

    renderCookieText() {
        const { cookieText } = this.props;
        const extraCookieText = ' regarding GDPR laws';

        return (
            <p block="CookiePopup" elem="Content">
                { cookieText }
                { this.renderCookieLink() }
                { extraCookieText }
            </p>
        );
    }

    renderCTA() {
        return (
            <div
              block="CookiePopup"
              elem="CTA"
              onClick={ this.acceptCookies }
              onKeyDown={ this.acceptCookies }
              role="button"
              tabIndex={ 0 }
            >
                    { __('ACCEPT') }
            </div>
        );
    }

    render() {
        const { cookieText } = this.props;
        const { isAccepted } = this.state;

        if (!cookieText || isAccepted) {
            return null;
        }

        return (
            <div block="CookiePopup">
                    { this.renderCookieText() }
                    { this.renderCTA() }

            </div>
        );
    }
}

export default CookiePopupComponent;
