import React, { Component } from 'react';

export default class BunkaHlavicky extends Component {
    render() {
        const { bunkaHlavicky,ID_Radku, ID  } = this.props;
        const classname = ID_Radku + ID
        //
    return (
      <th key={classname}>
	        {bunkaHlavicky} 
      </th>
    );
  }
}