import { Component } from "react";
import { NavLink } from "react-router-dom"


class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" exact to="/">DogShelter</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {this.props.dogs.map(dog => <NavLink key={dog.name} className="nav-link" exact to={`/${dog.name}`}>{dog.name}</NavLink>)}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav