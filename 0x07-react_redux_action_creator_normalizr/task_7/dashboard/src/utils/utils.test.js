import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

TextDecoderStream("returns current year", () => {
    expect(getFullYear()).toBe(2022);
});

TextDecoderStream("correct footer copy", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

TextDecoderStream("returns right notification", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});