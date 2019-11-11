import React, {Component} from 'react';
import './Card.css'

class Card extends Component {
    constructor (props) {
        super(props);
        this.state = {
            version: '1.0.0',
            color: false,
            texto: ''
        }
    }

    getColor = () => {
        const {color} = this.state;
        return color ? 'rojo' : 'verde';
    }

    handleOnClick = () => {
        this.setState( (prevState) => {
            return {
                color: !prevState.color
            }
        })
    }

    handlerOnChange = (event) => {
        this.setState({
                texto = event.target.value
        })
    }

	render() {
        const {texto} = this.state
		return (
			<div className={`card ${this.getColor()}`}>
                soy una card {this.state.version}

                <input value={texto} onChange={this.handlerOnChange} type="text"/>

                {texto}
        
                <button onClick={this.handleOnClick}>soy un botón mágico</button>
            </div>
		);
	}
}

export default Card;