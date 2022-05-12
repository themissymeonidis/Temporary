import {
    DemoNotice as SourceDemoNotice
} from 'SourceComponent/DemoNotice/DemoNotice.component';

import './DemoNotice.override.style';

export class DemoNoticeComponent extends SourceDemoNotice {
    render() {
        return (
            <h1 className="hidden-h1">
                1234
            </h1>
        );
    }
}

export default DemoNoticeComponent;
