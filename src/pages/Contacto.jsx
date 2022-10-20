import Container from "react-bootstrap/esm/Container"

export const ContactoPage = () =>{
    return(
        <Container className="d-flex flex-column justify-content-center">
            <h1>Contacto</h1>
            <form className="d-flex flex-column" action="">
                <div className="row justify-content-around">
                    <label className="col-2 ms-0" htmlFor="contactoNombre">Nombre</label>
                    <input className="col-2 ms-0" type="text" id="contactoNombre"/>
                    <label className="col-2 ms-0" htmlFor="contactoApellido">Apellido</label>
                    <input className="col-2 ms-0" type="text" id="contactoApellido"/>
                </div>
                <label className="col-12" htmlFor="contactoEmail">Email</label>
                <input className="col-12" type="email" id="contactoEmail"/>
                <label className="col-12" htmlFor="contactoTel">Telefono</label>
                <input className="col-12" type="phone" id="contactoTel"/>
                <label className="col-12" htmlFor="contactoCheck">Acepto terminos y condiciones</label>
                <input className="col-12" type="checkbox" id="contactoCheck"/>
                <input className="col-12" type="submit" value="Enviar"/>
            </form>
        </Container>
    )
}