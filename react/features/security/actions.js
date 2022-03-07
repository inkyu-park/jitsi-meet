// @flow

import { toggleDialog, hideDialog } from '../base/dialog';

import { SecurityDialog, CookieDialog, CertificationDialog } from './components/security-dialog';

import { AUTHENTICATE_ACCOUNT, SET_ACCOUNT_INFO } from './actionTypes';
/**
 * Action that triggers toggle of the security options dialog.
 *
 * @returns {Function}
 */

export function authenticateAccount() {
    return {
        type: AUTHENTICATE_ACCOUNT
    };
}

export function setAccountInfo(accountInfo: Object) {
    return {
        type: SET_ACCOUNT_INFO,
        stfNo: accountInfo?.stfNo,
        status: accountInfo?.status
    };
}

export function toggleSecurityDialog() {
    return function(dispatch: (Object) => Object) {
        dispatch(toggleDialog(SecurityDialog));
    };
}

export function CloseCertificationAndOpenSecurityDialog() {
    return function(dispatch: (Object) => Object) {
        dispatch(hideDialog(CertificationDialog));
        setTimeout(() => {
            dispatch(toggleDialog(SecurityDialog));
        }, 300);
    };
}

export function toggleCookieDialog() {
    return function(dispatch: (Object) => Object) {
        dispatch(toggleDialog(CookieDialog));
    };
}

export function toggleCertificationDialog() {
    return function(dispatch: (Object) => Object) {
        dispatch(toggleDialog(CertificationDialog));
    };
}