import React, { Component } from 'react';

export default class Tlacitko extends Component {
    render() {
    	this.akce = this.props.akce
      const ID_Radku = this.props.ID_Radku;
      this.classname = ID_Radku+ "_Button";
    return (
      <td key={this.classname}>
        <button onClick={() =>this.akce(ID_Radku)} >{this.props.popis}</button>
      </td>
    );
  }
}