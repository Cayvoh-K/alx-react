import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

import { login, logout, hideNotificationDrawer, displayNotificationsDrawer } from "./uiActionCreators";

describe("tests for UI notification action actors", () => {
    it("should create proper action for login", () => {
        const email = "mosekevin12@gmail.com";
        const password = "cayvoh";
    
        expect(login(email, password)).toEqual({
            type: LOGIN,
            user: { email: "mosekevin12@gmail.com", password: "cayvoh" },
        });
    });

    it("should create proper action for logout", () => {
        expect(logout()).toEqual({ type: LOGOUT });
    });

    it("should create proper action for displaying notification drawer", () => {
        expect(displayNotificationsDrawer()).toEqual({
            type: DISPLAY_NOTIFICATION_DRAWER,
        });
    });

    it("should create proper action for hiding notification drawer", () => {
        expect(hideNotificationDrawer()).toEqual({
            type: HIDE_NOTIFICATION_DRAWER,
        });
    });
});