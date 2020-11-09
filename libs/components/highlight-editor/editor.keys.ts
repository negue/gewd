export const KEY_BACKSPACE = "Backspace";
export const KEY_DELETE = "Delete";
export const KEY_ENTER  = "Enter";
export const KEY_ESCAPE  = "Escape";
export const KEY_TAB  = "Tab";
export const KEY_ARROW_UP = "ArrowUp";
export const KEY_ARROW_DOWN = "ArrowDown";
export const KEY_ARROW_LEFT = "ArrowLeft";
export const KEY_ARROW_RIGHT = "ArrowRight";
export const KEY_SHIFT = "Shift";
export const KEY_ALT = "Alt";
export const KEY_CTRL = "Control";
export const KEY_META = "Meta";
export const KEY_CAPS_LOCK = "CapsLock";

export const ALL_CHARS_REGEX = /^[1234567890a-zA-ZäöüÄÖÜ,;.:\-_#+`´?(){}|\[\]@]+$/;

export const IGNORE_KEY_EVENTS = [
  KEY_ARROW_UP, KEY_ARROW_DOWN,
  KEY_ARROW_LEFT, KEY_ARROW_RIGHT,
  KEY_SHIFT, KEY_ALT, KEY_CTRL,
  KEY_META, KEY_CAPS_LOCK, KEY_ESCAPE
];
