import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

import { markAsRead, setNotificationFilters } from "./notificationActionCreators";

describe("tests for notification actions", () => {
    it("should create right action for mark as read", () => {
        expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, INDEX: 1});
    });

    it("should create right action for notification filter", () => {
        expect(setNotificationFilters(NotificationTypeFilters["DEFAULT"])).toEqual({
            type: SET_TYPE_FILTER,
            filter: "DEFAULT",
        });
    });
});