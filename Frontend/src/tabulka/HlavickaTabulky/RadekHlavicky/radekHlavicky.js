import React, { Component } from 'react';
import BunkaHlavicky from './bunkaHlavicky'

export default class RadekHlavicky extends Component {
    render() {
      const { vstup } = this.props
      this.bunky = []
      var i = 0
      for (const bunka of vstup ) {
        				this.bunky.push(<BunkaHlavicky bunkaHlavicky={bunka} 
        														 ID_Radku={this.props.ID} 
        														 ID={i} />)
        				i=i+1
        				}  
    	return (
    	<tr key="Radek Hlavicky">
    		{this.bunky} 
    	</tr>     	
    );
  }
}