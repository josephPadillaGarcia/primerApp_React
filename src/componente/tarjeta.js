import React from 'react'
import plantillaWeb from '../img/category-tiles-wordpress.png'
import '../style/tarjeta.css'

class Tarjet extends React.Component{

	render(){

		const {titulo, descripcion, img} = this.props

		return (

			<div className="col-sm-4">
				<div className="card">
					<div className="info-card">
						<h3>{titulo}</h3>
						<p>{descripcion}</p>
					</div>
					<div className="img-card">
						<img src={img} />
					</div>
				</div>
			</div>
		)

	}

}

export default Tarjet