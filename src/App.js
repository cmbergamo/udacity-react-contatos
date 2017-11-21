import React, { Component } from 'react';
import ContatoView from './ContatoView';
import Consulta from './Consulta';
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

	state = {
		contatos : [{
			avatar: 'qualquer',
			nome: 'Juca'
		},
		{
			avatar: 'qualquer',
			nome: 'Jorginho'
		},
		{
			avatar: 'qualquer',
			nome: 'João'
		}]
	}

	apagarContato = (cont1) => {
		this.setState( (prevState) => ({
			contatos: prevState.contatos.filter( c => c.nome !== cont1.nome )
		}) );
    }

	render() {

		return (
			<div className="App">
				<Consulta />

				{ this.state.contatos.map( (contato) => ( <ContatoView  key={contato.nome}
					contato={contato}
					apagar={this.apagarContato} /> ) )
				}

			</div>
			);
		}
	}

export default App;
