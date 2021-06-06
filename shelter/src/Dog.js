import { Component } from "react";
import { Link } from "react-router-dom";
import "./Dog.css"


class Dog extends Component {
    render() {
        let { name, age, src, facts } = this.props.dog
        return (
            <div className="Dog container">
                <div className="row">
                    <div className="card">
                        <div className="card-image">
                            <img className="img-thumbnail" src={src} alt={name} width={"100%"} height="auto" />
                        </div>
                        <div className="align-left card-body">

                            <h1 className="card-title">
                                {name}
                            </h1>
                            <h4 className="card-subtitle tex-muted">
                                {age} years old
                                </h4>
                        </div>
                        <ul className="list-group list-group-flush">
                            {facts.map((fact, i) => <li key={i} className="list-group-item">{fact}</li>)}
                        </ul>

                        <div className="card-body">
                            <Link to="/dogs" className="btn btn-lg btn-info">BACK</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dog