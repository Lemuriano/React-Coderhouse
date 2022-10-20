export const ItemDetail = ({item})=>{
    const {Nombre, ImagenDesc, Valor, DesLarga} = item
    return(
        <div className="p-2">
            <p>Detalle Destino</p>
            <div>
                <img src={ImagenDesc} alt={Nombre}/>
            </div>
            <div>
                <h4>{Nombre}</h4>
                <h5>$ {Valor}</h5>
            </div>
            <div>
                <p>{DesLarga}</p>
            </div>
        </div>
    )
}