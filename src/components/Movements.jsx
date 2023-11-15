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
            <section>
                <h4>Ingresos</h4>
                <p>${income}</p>
            </section>

            <section>
                <h4>Egresos</h4>
                <p>${expense}</p>
            </section>
        </div>
    )
}

export default Movements;