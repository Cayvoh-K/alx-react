import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

export function login(email, password) {
    return {
        type: LOGIN,
        user: { email, password },
    };
}

export const boundLogin = (email, password) => dispatchEvent(login(email, password));

export const logout = () => ({ type: LOGOUT });

export const boundLogout = () => dispatchEvent(logout());

export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});

export const boundDisplayNotificationDrawer = () => dispatchEvent(displayNotificationDrawer());

export const HIDENotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});

export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());