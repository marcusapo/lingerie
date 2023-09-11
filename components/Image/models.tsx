import { ReactNode } from "react";

export interface ImgProps  {
    src?:string;
    type?:string;
    onClick?: () => void;
    text?:string;
    children?:ReactNode;
}