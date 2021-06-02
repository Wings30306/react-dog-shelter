import { Component } from "react";
import { NavLink } from "react-router-dom"


class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" exact to="/">DogShelter</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            {this.props.dogs.map(dog => <NavLink className="nav-link" exact to={`/${dog.name}`}>{dog.name}</NavLink>)}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav