import React, { Component } from 'react';
import Tlacitko from './tlacitko'

export default class Navigace extends Component {
    render() {
    	this.akce = this.props.akce
      const ID_Radku = this.props.ID_Radku;
      this.classname = ID_Radku+ "_Button";
    return (
      [<Tlacitko popis = {"<"}
                akce={this.previousPage} /> ,
                  <Tlacitko popis = {this.state.pageNumber}/>,
                  <Tlacitko popis = {">"}
                            akce={this.nextPage} />]
    );
  }
}