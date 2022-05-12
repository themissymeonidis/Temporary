import { connect } from 'react-redux';

import {
    DEFAULT_NAVIGATION_TABS_STATE,
    mapDispatchToProps,
    mapStateToProps,
    NavigationTabsContainer as SourceNavigationTabsContainer
} from 'SourceComponent/NavigationTabs/NavigationTabs.container';

export {
    mapStateToProps,
    mapDispatchToProps,
    DEFAULT_NAVIGATION_TABS_STATE
};

/** @namespace TaskApp/Component/NavigationTabs/Container */
export class NavigationTabsContainer extends SourceNavigationTabsContainer {
    containerFunctions = {
        onTogglerClick: this.onTogglerClick.bind(this)
    };

    hideNavigationTabs() {
        document.documentElement.classList.remove('hideOnScroll');
    }

    showNavigationTabs() {
        document.documentElement.classList.remove('hideOnScroll');
    }

    onTogglerClick() {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTabsContainer);
