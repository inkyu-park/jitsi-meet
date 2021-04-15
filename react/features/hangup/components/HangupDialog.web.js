import React, { Component } from 'react';
import { Dialog } from '../../base/dialog';

/**
 * Implements a React {@link Component} which displays the component
 * {@code VideoQualitySlider} in a dialog.
 *
 * @extends Component
 */
export default class HangupDialog extends Component {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <Dialog
                cancelKey = 'dialog.confirmNo'
                okKey = 'dialog.confirmYes'
                onCancel = { this._onCancel }
                onSubmit = { this._onSubmit }
                //titleKey = 'liveStreaming.start'
                titleKey = "화상교육 종료"
                width = { 'small' }>
                <div className = 'live-stream-dialog'>
                    온라인 화상교육를 나가시겠습니까?
                </div>
            </Dialog>
        );
    }

    _onSubmit: () => void;

    // _onCancel() {
    //     return true;
    // }

    _onSubmit() {
        //window.alert("제발");
        document.location.href = "https://live-learning.hwgeneralins.com/custom_index.html";
        //window.opener = null;
        //window.open("about:blank", "_self");
        //window.close();
        //_extDoHangup();
    }
}
