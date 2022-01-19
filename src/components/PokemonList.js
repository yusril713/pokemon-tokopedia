import React, { Component } from "react";
import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PokemonConsumer } from "./Pokemon-Context";


class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pokemons: []
        };
    }
    
    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=10")
            .then(res => res.json())
            .then(parsedJSON => parsedJSON.results.map(data => (
                {
                    name: `${data.name}`,
                    url: `${data.url}`,
                    thumbnail: `${data.name}.jpg`

                }
            )))
            .then(pokemons => this.setState({ pokemons }))
            .catch(error => console.log('parsing failed', error))
    }
    
    render() {
        const { pokemons } = this.state;
        return(
            <PokemonConsumer>
            {({ pokemon, releasepokemon }) => (
            <div>
                <Container>
                    <Row>
                        <div className="d-flex justify-content-center">
                            <h2>Pokemon List</h2>
                        </div>
                        <hr/>
                    </Row>
                    <Row className="mt-20">
                    {
                        pokemons.length > 0 ? pokemons.map(item => {
                            const { name, thumbnail } = item;
                            let urlDetail = "/detail/" + name;
                            var count = 0
                            for (var i = 0; i < pokemon.length; i++) {
                                
                                if (pokemon[i].name === name) {
                                    count += 1
                                }
                            }

                            return (
    
                                <Col md={3} sm={6} xs={12}>
                                    <Card className="h-100">
                                        <CardImg draggable="false" top src={"pokemon/" + thumbnail} title={"Pokemon - " + name} alt={"Pokemon - " + name}/>
                                        <Card.Body>
                                            <Card.Title className="text-capitalize text-center" tag="h4">{name}</Card.Title>                               
                                            <Card.Title className="text-capitalize text-center" tag="h4">Owned Total: {count}</Card.Title>                               
                                        </Card.Body>
                                        <Card.Footer>
                                            <div className="d-flex justify-content-center">
                                                <NavLink key={name} to={urlDetail}>
                                                    <Button className="btn btn-danger btn-sm">View</Button>
                                                </NavLink>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            );
                        }) : null
                    }
                    </Row>
                </Container>
            </div>
            )}
            </PokemonConsumer>
        )
    }
}

export default PokemonList