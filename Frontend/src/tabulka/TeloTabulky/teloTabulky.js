import React, { Component } from 'react';
import PoleBunek from './RadkyTabulky/PoleBunek';
import RadekTabulky from './RadkyTabulky/radekTabulky'

export default class TeloTabulky extends Component {
	constructor(props) {
        super(props);
        this.state = { editRadku: null };
    }
    render() {
        const vstup = this.props.vstup
        //console.log(`pisuVteleTabulky ${vstup}`);
        var radky = [] 
        var i=1
        for (var radek of vstup ) {
        		radky.push(<RadekTabulky
        		poleBunek = {<PoleBunek vstup={radek}
        										ID={radek[0]} 
        										smazat={this.props.smazat}
        										editovat={this.props.editovat}
        										  />}
        							ID = {i}
        						/>)        						
        				i=i+1
        			} 
    return (
      <tbody key="TeloTabulky">       
        			 {radky}      	
      </tbody> 
    );
  } 
  }