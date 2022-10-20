import Container from "react-bootstrap/esm/Container"
import { Item } from "../Item/Item"


export const ItemList = ({destino})=>{
    return(
        <Container>
            <h1>Lista de destinos</h1>
            <div className="d-flex justify-content-around">
            {
                destino.map(elemento=>(
                    <Item key={elemento.Id} item={elemento}/>
                ))
            }
            </div>
        </Container>
    )
}