import React from 'react'
import Tarjeta from './tarjeta'

function listTarjet(props){

	return(

		<div className="row">
			
			{props.listarTarjetas.map((listar)=>{

					return (

						<Tarjeta 
							titulo={listar.titulo}
							descripcion={listar.descripcion}
							img={listar.imagen}
						/>

					)

				})

			}

		</div>

	)

}

export default listTarjet