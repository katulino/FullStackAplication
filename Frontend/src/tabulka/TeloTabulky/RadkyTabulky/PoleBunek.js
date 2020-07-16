import React, { Component } from 'react';
import Bunka from './bunka';
import Tlacitko from '../../tlacitko'
import EditRadku from './EditaceRadku/editRadku'

export default class PoleBunek extends Component {
	constructor(props) {
        super(props);
        this.state = {
                   edit_ID: false,

        					 };
        this.editovat = this.editovat.bind(this);
    }
    render() {
      const { vstup, ID } = this.props
      console.log(`pisu ${vstup}`);
      var bunky = []
      var i = 1
      /*bunky.push(<Bunka bunka={this.props.ID}
                        ID_Radku={this.props.ID}
                        ID={i}/>)
      i=i+1         */
      if (this.state.edit_ID===false) {
      	for (const bunka of vstup) {
      		console.log(`pisu v poli ${bunka}`);
  				bunky.push(<Bunka bunka={bunka} 
        			ID_Radku={this.props.ID}
        			ID={i}/>
				);
				i=i+1							
		 		}
        	bunky.push(<Bunka bunka={<Tlacitko ID_Radku={this.props.ID}
        	                                   popis = {"Smazat"}
        			 		   akce={this.props.smazat} />} />,
        	           <Bunka bunka={<Tlacitko ID_Radku={this.props.ID}
        			 			 popis = {"Editovat"}
        			 			 akce={this.editovat} />
                           } />)
        } 
        else {
        	 bunky.push(<EditRadku vstup={vstup} 
        	                       ID_Radku={this.props.ID}
        			       ID={this.props.ID}
        			       editovat={this.editovat}
        			       editRadku={this.props.editovat}/>
											);
										}
    	return (
    		bunky
    );
  }
  editovat(){
   	console.log(`editace ${this.props.ID}`) 
   	var a = true
   		if (this.state.edit_ID==true) { 
   			a=false
   		}
   		else {
   			a=true
   			}    	
   	this.setState({
     		edit_ID: this.state.edit_ID = a  	
  					});
    		}
}