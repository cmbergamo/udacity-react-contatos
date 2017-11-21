import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'

class Consulta extends Component {

	state = {
		query: ''
	}

	busca = (query) => {
		this.setState( { query } )
	}

	render() {
		return (<div className='section'>
				<form>
					<div className="field">
						<div className="control has-icons-left">
							<input className="input" type="text" placeholder="Pesquisa" value={this.state.query} onChange={(event) => this.busca(event.target.value)} />
							<label>{ JSON.stringify(this.state) }</label>
							<span className="icon is-small is-left">
								<i className="fa fa-search"></i>
							</span>
						</div>
					</div>
				</form>
			</div> )
	}

}

export default Consulta