import { useGlobalState } from "../context/globalState";

function Balance(){
    
    const data = useGlobalState();


    return(
        <div>
            <h4>Balance verr</h4>
            <section>
                {JSON.stringify(data)}
            </section>
        </div>
    )
}

export default Balance;