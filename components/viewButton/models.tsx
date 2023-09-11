import { ColorType } from "../../atomic/constants/color";

export interface viewButtonProps {
    text:string;
    margin?:string;
    type?:string;
    id?:string;
    onclick?:() => void;
    color?:ColorType;
}