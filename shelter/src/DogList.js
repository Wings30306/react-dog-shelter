import { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css"


class DogList extends Component {
    render() {
        return (
            <div className="container DogList">
                <div className="row">
                    {this.props.dogs.map(dog => (
                        <Link key={dog.name} className="col-md-6 col-lg-4" exact to={`/${dog.name.toLowerCase()}`}>
                            <img className="rounded-circle img-thumbnail" src={dog.src} alt={dog.name}/>
                            <h2>{dog.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default DogList