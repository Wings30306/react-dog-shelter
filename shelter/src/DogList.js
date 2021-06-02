import { Component } from "react";
import { Link } from "react-router-dom";


class DogList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.dogs.map(dog => (
                        <Link className="col-4" exact to={`/${dog.name.toLowerCase()}`}>
                            <img src={dog.src} alt={dog.name} width={"100%"} height="auto"/>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default DogList