export type Encoded<T,K extends keyof T> = Omit<T,K> & {
    [V in K]: string
};