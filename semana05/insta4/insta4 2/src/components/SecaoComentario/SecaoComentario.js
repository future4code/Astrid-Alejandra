import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorComentario: ''
	}

	onChangeComentario = (event) => {
		this.setState({valorComentario: event.target.value})
	}
//fiquei com dúvidas se era isso o que devia ser feito, mas fui olhar o site de exemplo, e estava assim, então acho que é isso. 

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
