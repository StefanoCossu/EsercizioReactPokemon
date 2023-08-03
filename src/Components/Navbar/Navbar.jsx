
import { Link} from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"

export default function Navbar() {

    
    return (
    <nav className="fixed-top container-fluid">
        <div className="row">
            <div className="col-6 d-flex justify-content-center align-items-center">
                <h2>Sono la navbar</h2>
                <Link to="/" className="btn btn-primary ms-5">Pagina principale</Link>
            </div>         
                <SearchBar/>
        </div>
    </nav>
    )
}



