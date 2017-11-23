import React, { Component } from 'react';
import ContatoView from './ContatoView';
import Consulta from './Consulta';
import './App.css';
import 'bulma/css/bulma.css';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by'
import { Route } from 'react-router-dom';
import AddContato from './AddContato'

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
		}],

		query : ''
	}

	atualizaQuery = (query) => {
		this.setState( { query });
	}

	apagarContato = (cont1) => {
		this.setState( (prevState) => ({
			contatos: prevState.contatos.filter( c => c.nome !== cont1.nome )
		}) );
    }

	render() {
		let mostrarContatos;

		if ( this.state.query ) {
			const match = new RegExp( escapeRegExp( this.state.query ), 'i' );

			mostrarContatos = this.state.contatos.filter( (contato) => { 
				console.log(match.test(contato));
				return match.test( contato.nome ) } );
		} else {
			mostrarContatos = this.state.contatos;
		}

		mostrarContatos.sort( sortBy('nome') );

		return (
			<div className="App">
				
				<Route path='/' render={ ()=> (
						<Consulta consultar={ this.atualizaQuery } query= { this.state.query } />
						
						{ this.state.query !== '' ? (
							<label>{ `Mostrando ${ mostrarContatos.length } de ${this.state.contatos.length}` }</label>
						) : '' }

						{ mostrarContatos.map(
							(contato) => (
								<ContatoView  key={contato.nome}
									contato={contato}
									apagar={this.apagarContato} 
								/>
							)
						) } )
				} />

				<Route path="/create" component={ AddContato } />

			</div>
			);
		}
	}

export default App;
