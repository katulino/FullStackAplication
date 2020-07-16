import React, { Component } from 'react';
import Tlacitko from './tlacitko'

export default class Navigace extends Component {
  constructor(props) {
        super(props);
        this.state = {
                   pageNumber: this.props.pageNumber,
        	   ID: this.props.ID,
        					 };

        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    };
    render() {
             const navigace =  [<Tlacitko popis = {"<"}
                                          akce={this.previousPage} /> ,
                                <Tlacitko popis = {"Aktuální stránka: " + this.props.pageNumber.toString()}/>,
                                <Tlacitko popis = {">"}
                                          akce={this.nextPage} />]
           return (
                  navigace
                  );
  };
  nextPage(){
   this.setState({
     pageNumber: this.state.pageNumber=this.props.pageNumber+1
     });
     console.log(`pridam ve vstupu ${this.state.pageNumber}`)
   this.props.akce(this.state.pageNumber)
     }

   previousPage(){
       if (this.state.pageNumber > 1) {
                     this.setState({
                                    pageNumber: this.state.pageNumber=this.props.pageNumber-1
                                    });
       }
   this.props.akce(this.state.pageNumber)
     }
}
