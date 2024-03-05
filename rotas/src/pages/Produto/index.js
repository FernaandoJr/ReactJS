import { useParams } from 'react-router-dom'

function Produto(){

    const { id } = useParams();
    return(
        <div className="">
            <h2>
            MEU PRODUTO É {id}
            </h2>
        </div>
    )
}

export default Produto