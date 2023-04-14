import "./CantidadesCarrito.scss"
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { useContext } from "react";
import { CarritoContexto } from "../../Context/CarritoContexto";




const CantidadesCarrito = ({ cantidad, id, stock }) => {

    const { editarCantidad } = useContext(CarritoContexto)

    return (
        <div className="cantidad-contenedor">
            <button
                onClick={() => { editarCantidad(id, -1) }}
                className="icon-restar"
                disabled= {cantidad === 1}
                >
                
                <RemoveCircleSharpIcon />
            </button>
            <span className="carrito-cantidad">Cantidad: {cantidad} </span>
            <button
                onClick={() => { editarCantidad(id, 1) }}
                className="icon-sumar"
                disabled= {cantidad === stock}>
                <AddCircleSharpIcon />
            </button>

        </div>
    )
}

export default CantidadesCarrito