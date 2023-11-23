import { useGlobalState } from "../context/GlobalState";

function Movements() {

    const { transactions } = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
                    .filter((item) => item > 0)
                    .reduce((accumulated, item) => (accumulated += item), 0)

    const expense = amounts
                    .filter(item => item < 0)
                    .reduce((accumulated, item) => (accumulated += item), 0) * -1;

    return (
        <div>
            <section className="flex justify-between my-2">
                <h4>Ingresos</h4>
                <h1>${income}</h1>
            </section>

            <section className="flex justify-between my-2">
                <h4>Egresos</h4>
                <h1>${expense}</h1>
            </section>
        </div>
    )
}

export default Movements;