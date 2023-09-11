import { ImgProps } from "./models"

export const Image = ({src, type,text, onClick}:ImgProps) => {
    return (
        <img className={`${type} ${text}`} src={src} onClick={onClick} />
    )
}