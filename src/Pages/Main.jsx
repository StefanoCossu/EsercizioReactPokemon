import {Link} from "react-router-dom"

export default function Main(){
    return <div className="container mt-5">
        <div className="row pt-5">
            <div className="col-12 my-5">
                <h1 className="lead display-1 text-center">Pagina Principale</h1>
            </div>
            <div className="col-6 d-flex flex-column align-items-center">
                <h2>Qualcosa di completamente diverso</h2>
                <Link to={"/different"} className="btn btn-primary bg-success">Scopri</Link>
            </div>
            <div className="col-6 d-flex flex-column align-items-center">
                <h2>Pokemon</h2>
                <Link to={"/pokemons"} className="btn btn-primary bg-success">Vai ai Pokemon</Link>
            </div>
        </div>
    </div>
}