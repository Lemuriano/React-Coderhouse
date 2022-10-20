import { useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container"
import { ItemList } from "../ItemList/ItemList"
import {useParams} from "react-router-dom"

export const ItemListContainer = () =>{
    const [destinos, setArticulos] = useState([])
    const {categoryId} = useParams();
    console.log(categoryId)


    useEffect(() => {
        fetch('https://api.jsonbin.io/v3/b/634b79860e6a79321e2a0542',{
            headers: {
                "X-Master-Key": '$2b$10$mhIDrXVJUBQ47gAJrDDjCu.UcqwmTPRpnPvDNoiPBL9vHvGzr/hlG',
            }
        })
          .then((response) => {
            return response.json()
          })
          .then((destinos) => {
            if(categoryId){
              const productsFiltered = destinos.record.filter(elm=>elm.Destino === categoryId);
              setArticulos(productsFiltered);
            } else{
              setArticulos(destinos.record)
            }})
      }, [categoryId])

    return(
        <Container>
            <ItemList destino={destinos}></ItemList>
        </Container>
    )
}