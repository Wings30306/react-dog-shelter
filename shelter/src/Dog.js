import { Component } from "react";


class Dog extends Component {
    render() {
        let { name, src, facts } = this.props.dog
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={src} alt={name} width={"100%"} height="auto"/>
                    </div>
                    <div className="col-6">
                        <h1>{name}</h1>
                        <ul>
                            {facts.map(fact => <li>{fact}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dog