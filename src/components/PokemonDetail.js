import React, { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { PokemonConsumer } from './Pokemon-Context';

class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match: "",
            pokemon_details: [],
            name: ""
        };
    }

    componentDidMount() {
        let url = window.location.href;
        let url_split = url.split('/');
        let pokemon_name = url_split[url_split.length - 1];


        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon_name)
            .then(res => res.json())
            .then(pokemon_details => this.setState({
                pokemon_details,
                name: pokemon_name
            }))
            .catch(error => console.log('parsing failed', error))
    }
    
    render() {
        const { name, pokemon_details } = this.state;
        console.log(pokemon_details)
        function catchPokemon() {
            if (Math.random() >= 0.5) {
                return prompt("You caught " + name + ". Please Enter A Nickname For This Pokemon");
            } else {
                alert(" Catch " + name + " Failed. Please Try Again");
                return false;
            }
        }
        return (
            <PokemonConsumer>
                {({ updatepokemon }) => (
                <Container id="pokemonDetail">
                    <Row className="justify-content-center mb-4">
                        <Col sm={8} md={6} lg={4}>
                            <h1 className="display-4 fw-bold text-light text-center text-capitalize">{name}</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mb-4">
                        <Col sm={8} md={6} lg={4}>
                            <img draggable="false" className="w-100 rounded" src={"/pokemon/" + name + ".jpg"} title={"Pokemon - " + name} alt={"Pokemon - " + name} />
                        </Col>
                    </Row>
                    <Row className="justify-content-center mb-4">
                        <Col xs={6} sm={3} lg={2}>
                            <Button className="w-100 text-capitalize" color="primary" onClick={event => {
                                let nickname = catchPokemon();
                                if (nickname) {
                                    updatepokemon([{ name: name, nickname: nickname }]);
                                    alert("Pokemon Successfully Added to My Pokemon List");
                                }
                            }}>Catch {name}</Button>
                        </Col>
                        <Col xs={6} sm={3} lg={2}>
                            <Link to="/my-pokemon-list">
                                <Button color="warning" className="w-100">My Pokemon</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Col sm={6} md={4} lg={3} xl={3} className="mb-3">
                            <Card body>
                                <Card.Title tag="h5">Stats</Card.Title>
                                <Card.Text>
                                    <ul>
                                        {
                                            pokemon_details.stats ?
                                                pokemon_details.stats.map(item => {
                                                    const { stat } = item;
                                                    return (
                                                        <li className="text-capitalize" key={stat.name}>{stat.name}</li>
                                                    );
                                                }) : null
                                        }
                                    </ul>
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col sm={6} md={4} lg={3} xl={3} className="mb-3">
                            <Card body>
                                <Card.Title tag="h5">Types</Card.Title>
                                <Card.Text>
                                    <ul>
                                        {
                                            pokemon_details.types ?
                                                pokemon_details.types.map(item => {
                                                    const { type } = item;
                                                    return (
                                                        <li className="text-capitalize" key={type.name}>{type.name}</li>
                                                    );
                                                }) : null
                                        }
                                    </ul>
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col sm={ 6} md={ 4} lg={ 3} xl={ 3} className="mb-3">
                            <Card body>
                                <Card.Title tag="h5">Held Items</Card.Title>
                                <Card.Text>
                                    <ul>
                                        {
                                            pokemon_details.held_items ?
                                                pokemon_details.held_items.map(item_hi => {
                                                    const { item } = item_hi;
                                                    return (
                                                        <li className="text-capitalize" key={item.name}>{item.name}</li>
                                                    );
                                                }) : null
                                        }
                                    </ul>
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col sm={ 6} md={ 4} lg={ 3} xl={ 3} className="mb-3">
                            <Card body>
                                <Card.Title tag="h5">Moves</Card.Title>
                                <Card.Text>
                                    <ul>
                                        {
                                            pokemon_details.moves ?
                                                pokemon_details.moves.map(item => {
                                                    const { move } = item;
                                                    return (
                                                        <li className="text-capitalize" key={move.name}>{move.name}</li>
                                                    );
                                                }) : null
                                        }
                                    </ul>
                                </Card.Text>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                )}
            </PokemonConsumer>
        );
    }
}

export default PokemonDetail