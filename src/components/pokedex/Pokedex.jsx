import React, { Component} from 'react'
import {pokedex} from '../../utils/mock-data'

import './Pokedex.css'

import {
    Row, Col, Card, CardImg, CardBody,
    CardTitle, Button, Input, FormGroup, Form, 
    InputGroup, InputGroupAddon
  } from 'reactstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokedex,
            searchValue: '',
            filteredPokemon: pokedex
        }
    }

    getImageColor = (el) => {
        return el.alive ? 'alive' : 'dead'
    }

    getButtonColor = (el) => {
        return el.alive ? 'danger' : 'success'
    }

    getAction = (el) => {
        return el.alive ? 'Debilitar' : 'Restaurar HP'
    }

    handlerToggleAlive = (pokemon) => {
        const i = this.state.pokedex.findIndex(x => x.id === pokemon.id)

        return (event) => {
            const nP = this.state.pokedex;
            nP[i].alive = !nP[i].alive;
            
            this.setState({
                pokedex: nP
            })
        }
    }

    handlerOnChange = event => {
        const lowercasedSearch = event.target.value.toLowerCase()
        
        const filtered = this.state.pokedex.filter(pokemon =>  pokemon.name.toLowerCase().includes(lowercasedSearch))

        this.setState({
            searchValue: event.target.value,
            filteredPokemon: filtered
        })
    }

    render () {
        const {filteredPokemon} = this.state

        return (
            <div>
                <Row>
                    <Col xs="12">
                        <Form>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon className="input-group-text" addonType="prepend">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </InputGroupAddon>
                                    <Input type="email" onChange={this.handlerOnChange} name="email" id="exampleEmail" value={this.state.searchValue} placeholder="Buscar Pokemon por nombre..." />
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>


                <Row className="pokedex-app-list">
                    {filteredPokemon.length > 0 ?
                        filteredPokemon.map( pokemon => {
                            return (
                                <Col key={pokemon.id} xs="12" sm="6" md="3">
                                    <Card className="poke-card">
                                        <div className={`poke-card-status ${this.getImageColor(pokemon)}`}></div>
                                        <CardImg top width="100%" src={pokemon.img} className={`poke-card-img ${this.getImageColor(pokemon)}`} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>{pokemon.name} · <span>Nivel: {pokemon.lvl}</span> </CardTitle>
                                            <Button color={this.getButtonColor(pokemon)} onClick={this.handlerToggleAlive(pokemon)}>{this.getAction(pokemon)}</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })

                        : (
                            <Col xs="12">
                                <h2>Fack it! No hemos conseguido {this.state.searchValue} en nuestra base de datos :(</h2>
                            </Col>
                        )
                    }
                </Row>
            
            </div>
        )
    }

}

export default Table;