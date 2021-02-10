import React from 'react'
import Entrada from '../componente/Entrada.js'
import ListarTarjetas from '../componente/listarTarjetas.js'

import imgWordPress from '../img/category-tiles-wordpress.png'
import imgEcommerce from '../img/category-tiles-ecommerce.png'
import imgSite from '../img/category-tiles-site-templates.png'
import imgMarketing from '../img/category-tiles-marketing.png'
import imgCMS from '../img/category-tiles-cms-themes.png'
import imgBlogging from '../img/category-tiles-blogging.png'

class App extends React.Component{

	constructor(props){

		super(props)

		this.state = {

			data: [{
						"id": 1,
						"titulo": "WordPress Themes",
						"descripcion": "Thousands of WordPress themes",
						"imagen": imgWordPress
					},{
						"id": 2,
						"titulo": "eCommerce Templates",
						"descripcion": "Beautiful website templates",
						"imagen": imgEcommerce	
					},{
						"id": 3,
						"titulo": "Site Templates",
						"descripcion": "HTML and website templates",
						"imagen": imgSite
					},{
						"id": 4,
						"titulo": "Marketing Templates",
						"descripcion": "Email, newsletter and landing page templates.",
						"imagen": imgMarketing
					},{
						"id": 5,
						"titulo": "CMS Templates",
						"descripcion": "Over 1,700 CMS website templates",
						"imagen": imgCMS
					},{
						"id": 6,
						"titulo": "Blogging",
						"descripcion": "Blogger templates and themes",
						"imagen": imgBlogging
					}]

		}

	}

	render(){

		return(

			<div className="hola">
				<Entrada

					username= "Joseph"

				/>

				<div className="container">
					<ListarTarjetas

						listarTarjetas={this.state.data}

					/>					
				</div>
			</div>		

		)

	}

}

export default App