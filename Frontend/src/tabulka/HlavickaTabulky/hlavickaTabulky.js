import React, { Component } from 'react';
import RadekHlavicky from './RadekHlavicky/radekHlavicky'

export default class HlavickaTabulky extends Component {
    render() {
        const { vstup } = this.props
    return (
      <thead key="Hlavicka">       
        			 <RadekHlavicky vstup={this.props.vstup} ID={"_h"} />
      </thead>
    );
  }
}