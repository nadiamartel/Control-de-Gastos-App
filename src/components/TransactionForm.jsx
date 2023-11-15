import { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function Transaction() {

    const { addTransaction } = useGlobalState();
    const [description, setDescription] = useState();
    const [amount, setAmount] = useState(0);

    const onSubmit = (event) =>{
        event.preventDefault();
        addTransaction({
            id: 1,
            description,
            amount
        }); 
        console.log(description, amount);
    }

    return(
        <div>
            <h4>Para agregar las transacciones</h4>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Agregar descripcion"
                    onChange={(event) => setDescription(event.target.value)}
                />
                <input type="number" step="0.01" placeholder="00.00"
                    onChange={(event) => setAmount(event.target.value)}
                />
                <button>
                    Añadir Transaccion
                </button>
            </form>
        </div>
    )
}

export default Transaction;