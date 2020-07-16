import React, { Component } from 'react';

export default class Bunka extends Component {
    render() {
        const { bunka,ID_Radku, ID } = this.props;
        const classname = this.props.ID_Radku+this.props.ID
        console.log(`pisu v bunce ${bunka}, ${classname}`)
    return (
      <td key={classname}>
        {this.props.bunka} 
      </td>
    );
  }
}
