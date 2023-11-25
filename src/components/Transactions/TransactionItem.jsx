import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {

    const { deleteTransaction } = useGlobalState();

    return (
        <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center text-sm">
            <p>{transaction.description}</p>
            <div className="flex items-center">
                <span className="mr-2">${transaction.amount}</span>
                <button onClick={() => {
                    deleteTransaction(transaction.id);
                }}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                >
                    x
                </button>
            </div>
        </li>
    )
}

export default TransactionItem;