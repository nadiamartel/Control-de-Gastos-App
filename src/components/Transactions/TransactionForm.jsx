import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function Transaction() {

    const { addTransaction } = useGlobalState();
    const [description, setDescription] = useState();
    const [amount, setAmount] = useState(0);

    const onSubmit = (event) =>{
        event.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            description,
            amount: +amount //para convertirlo de str a num
        }); 
        console.log(description, amount);
    }

    return(
        <div>
            <h4>Agregar las transacciones:</h4>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Agregar descripcion"
                    onChange={(event) => setDescription(event.target.value)}
                />
                <input type="number" step="0.01" placeholder="00.00"
                    onChange={(event) => setAmount(event.target.value)}
                />
                <button>
                    Añadir
                </button>
            </form>
        </div>
    )
}

export default Transaction;