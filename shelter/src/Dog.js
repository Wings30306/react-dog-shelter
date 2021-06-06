import { Component } from "react";
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
                            <div className="card-body">
                                <h1 className="card-title">
                                    {name}
                                </h1>
                                <h4 className="card-subtitle tex-muted">
                                    {age} years old
                                </h4>
                                <ul className="list-group list-group-flush">
                                    {facts.map((fact, i) => <li key={i} className="list-group-item">{fact}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dog