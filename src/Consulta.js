import React from 'react';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'

function Consulta( props ) {
	
	return (
		<div className='section'>
			<form key='query'>
				<div className="field">
					<div className="control has-icons-left">
						<input className="input"
							type="text"
							placeholder="Pesquisa"
							value={ props.query }
							onChange={(event) => props.consultar( event.target.value )}
						></input>
						
						<span className="icon is-small is-left">
							<i className="fa fa-search"></i>
						</span>
					</div>
				</div>
			</form>
		</div>
	)

}

export default Consulta