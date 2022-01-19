import React, { Component } from "react";
import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";
import { PokemonConsumer } from "./Pokemon-Context";


class MyPokemonList extends Component {
    render() {
        return (
            <PokemonConsumer>
                {({ pokemon, releasepokemon }) => (
                    <React.Fragment>
                        <Container>
                            <Container>
                                <Row>
                                    <div className="d-flex justify-content-center">
                                        <Col sm={8} md={6} lg={4}>
                                            <h1 className="text-center">My Pokemon</h1>
                                            <p className="text-center">List Captured Pokemon</p>
                                        </Col>
                                    </div>
                                </Row>

                                <Row className="mt-10">
                                {
                                    pokemon.length > 0 ? pokemon.map(item => {
                                        const { name, nickname } = item
                                        console.log(Object.keys(pokemon).length                                        )
                                        return (
                                            <Col xs={6} sm={4} lg={3} xl={2} className="myPokemon mb-4" key={Math.random()}>
                                                <Card className="h-100">
                                                    <CardImg draggable="false" top src={"pokemon/" + name + ".jpg"} title={"Pokemon - " + name} alt={"Pokemon - " + name} className="h-100 p-4" />
                                                    <Card.Body>
                                                        <Card.Title className="text-capitalize text-center" tag="h4">{nickname}</Card.Title>
                                                        <Card.Subtitle tag="h6" className="text-capitalize text-center">{name}</Card.Subtitle>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Button outline className="w-100" color="primary" onClick={() => releasepokemon(name)}>Release</Button>
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        )
                                    }) : ""
                                }
                                </Row>
                            </Container>
                        </Container>
                    </React.Fragment>
                )}
            </PokemonConsumer>
        )
    }
}

export default MyPokemonList