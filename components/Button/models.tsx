export interface ViewProps {
    type:string;
    size?:string;
    age?:string;
    text:string;
    id?:string;
    onclick?: () => void;
}