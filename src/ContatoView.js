import React from 'react';
import { Link } from 'react-router-dom';

function ContatoView( props ) {

    const { avatar, nome} = props.contato;

    return (
			<div className='columns is-1 is-centered'>
				<div className='column' key={nome + '_avatar'} name="avatar">
					<figure className="image is-64x64">
						<img src="https://bulma.io/images/placeholders/256x256.png" alt='logo' />
					</figure>
				</div>
				<div className='column is-10' key={nome + '_contato'} name="contato">{nome}</div>
				<div className='column is-danger' key={nome + '_delete'} name="delete">
					<Link className='delete is-danger' to={{ hash: '#'}} onClick={ () => props.apagar(props.contato) } />
				</div>
			</div>
        )

}

export default ContatoView