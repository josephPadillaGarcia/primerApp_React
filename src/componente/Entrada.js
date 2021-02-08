import React from 'react'
import '../style/tarjeta.css'

function entrada(props){

	return (

		<div className="cont">
			<div className="infoEntrada">
				<h1>Hola {props.username}</h1>
				<p>Aqui tienes algunas opciones de plantillas para tus páginas</p>
			</div>
		</div>

	)

}

export default entrada