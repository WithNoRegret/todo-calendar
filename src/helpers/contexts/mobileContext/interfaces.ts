export type MobileType = "mobile" | "desktop";

export interface MobileContextValues {
    mobile: MobileType;
    setMobile: (type: MobileType) => void;
}