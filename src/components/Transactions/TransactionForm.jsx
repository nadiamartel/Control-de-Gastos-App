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
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                />
                <input type="number" step="0.01" placeholder="00.00"
                    onChange={(event) => setAmount(event.target.value)}
                    className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                />
                <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
                    Añadir
                </button>
            </form>
        </div>
    )
}

export default Transaction;