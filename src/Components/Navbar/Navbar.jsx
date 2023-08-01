import {Link} from "react-router-dom"
export default function Navbar() {

    
    return (
    <nav className="fixed-top container-fluid">
        <div className="row">
            <div className="col-6 d-flex justify-content-center">
                <h2>Sono la navbar</h2>
                <Link to="/" className="btn btn-primary">Pagina principale</Link>
            </div>
        </div>
    </nav>
    )
}



