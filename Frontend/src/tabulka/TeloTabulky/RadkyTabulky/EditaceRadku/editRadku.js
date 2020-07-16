import React, { Component } from 'react';
import Bunka from './bunka';
import UserInput from './UserInput'
import Tlacitko from './tlacitko'

export default class EditRadku extends Component {
	    constructor(props) {
        super(props);
        this.state = { vstup: this.props.vstup,vystup:this.props.vstup};

        const handleChange = (name, ID, value) => {
        			var newState = [];
        			for (const a in this.state.vystup) {
        					if (a == ID) {
        						newState.push(value)}
        					else {newState.push(this.state.vystup[a])}
        					}
        			this.setState({ [name]: value,
        						vystup: newState})        										       														
        							console.log(`zapisuji stav ${name}, ${value} ${ID}, ${newState}`);
        						}
        this.handleChangeEdit = [];

        for (const ch in this.props.vstup) {

        		this.handleChangeEdit.push(handleChange.bind(this, "zmena" + ch.toString(),ch));
        	}
        this.ulozitEditaci = this.ulozitEditaci.bind(this);

        		
    }

    
    render() {
      const { ID } = this.props
      console.log(`pisu v editoru ${this.state.vystup}`);
      var bunky = []
      var handles = []
      var i = 0

      for (const bunka of this.state.vstup) {
      		console.log(`pisu v editoru ${bunka}`);
  		const h = <Bunka bunka={<UserInput name={i.toString()} label=""
                                                   value={this.state.vstup[i]}
                                                   onChange={this.handleChangeEdit[i]} />}
        					   ID_Radku={ID}
        					   ID={i}/>
											;
		i=i+1
		bunky.push(h)
		handles.push(h)
		}
      bunky.push(<Tlacitko ID_Radku={ID}
                           popis = {"Uložit"}
        		   akce={this.ulozitEditaci} />,
                 <Tlacitko ID_Radku={ID}
                           popis = {"Storno"}
        		   akce={this.props.editovat} />)
    	return (
    			bunky
    );
  }
	ulozitEditaci () {
			const z = this.state.vystup
	
        console.log(`ulozi edit v  radku ${this.props.ID_Radku}, ${z}`);
        this.props.editRadku(this.props.ID_Radku,z)
        this.props.editovat()
     }
}