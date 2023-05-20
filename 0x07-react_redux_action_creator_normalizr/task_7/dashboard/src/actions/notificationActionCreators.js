import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsRead = (index) => {
    return {
        type: MARK_AS_READ,
        index,
    };
};

export const boundmarkAsAread = (index) => dispatchEvent(markAsAread(index));

export const setNotificationFilters = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
};

export const boundsetNotificationFilter = (filter) => dispatchEvent(setNotificationFilters(filter));