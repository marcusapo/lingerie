import { BigBox } from "../bigBox"
import {Box} from '../BoxItem'
import { ViewButton } from "../viewButton"
import './style.css'

export const AllProduct = () => {
    return (
        <div>
            <BigBox id="bigBoxAll">
                <div className="product">
                    <h1>Produtos</h1>
                    <ViewButton id="vbAll" margin='margin' text="Ver todos"/>
                </div>
                <div className="dadItemBig">
                    <div style={{marginLeft:-20, gap:0}}>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                    </div>
                    <div>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                    </div>
                    <div id="noneCellS">
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                    </div>
                    <div id="noneCell">
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                    </div>
                    <div id="none10">
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                        <Box id="ml" type="" description="Descrição do item aprensetado"/>
                    </div>
                </div>
            </BigBox>
        </div>
    )
}