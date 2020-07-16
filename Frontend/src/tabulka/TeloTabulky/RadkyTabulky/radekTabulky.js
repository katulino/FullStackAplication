import React, { Component } from 'react';

export default class RadekTabulky extends Component {
    render() {
      const { poleBunek, ID } = this.props 
    	return (
    		<tr key = {ID}>
    			{poleBunek} 
    		</tr>    	
    );
  }
}