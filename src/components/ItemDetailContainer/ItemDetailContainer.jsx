import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

export const ItemDetailContainer = ()=>{
    const {id} = useParams();
    const [itemDestino, setItemDestino] = useState({});

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
            const destino = destinos.record.find(elemento=> elemento.Id == parseInt(id))
            setItemDestino(destino)
          })
      }, [id])
    return(
        <div className="p-5">
            <p>item detail container</p>
            <ItemDetail item={itemDestino}/>
        </div>
    )
}