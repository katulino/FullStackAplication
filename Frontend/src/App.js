import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabulka from './tabulka/tabulka';
import Navigace from './tabulka/Navigace';



class App extends React.Component {
  constructor(props) {
        super(props);
        this.state = { hlavicka : ["ID", "Příjmení","email", "phone"],
	               vstup:[],
                       fetchData: [],
                       loading: true,
		       				ukazFormPromenna: false,
		       				novyUzivatel: null,
                       cisloStranky: 1,
                       postId: null
        					  }
        this.novyUz = novyUzivatel => {this.setState({ novyUzivatel       												});        											}
        this.removeRadek = this.removeRadek.bind(this);
        this.ukazFormFunkce = this.ukazFormFunkce.bind(this);
        this.pridejUzivatele = this.pridejUzivatele.bind(this);
        this.editUzivatele = this.editUzivatele.bind(this);
        this.definujStranku = this.definujStranku.bind(this);
        					  
    }
    
    apiUrl() {
    		const page = this.state.cisloStranky;
          console.log(`aktualni stranka ${this.state.cisloStranky}`)
          const proxyurl = "https://cors-anywhere.herokuapp.com/";
          const url = "/api/contacts?page=" + page.toString();
          return url
    }

    async fetchData() {
          const url = this.apiUrl()

          fetch( url, {mode: 'cors'}) // https://cors-anywhere.herokuapp.com/https://example.com
                         .then(response => response.text())
                         .then(contents => console.log(contents))
                         .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
          const response = await fetch( url);
          console.log("data from " + url) 
          const data = await response.json();
          //const P = data.sort((a) => a.id)
          const PNmap = data.map(d=> [d.id, d.name,d.email, d.phone])
          //let PN = PNmap[0].sort((a, b) => a[0] - b[0])
          this.setState({ vstup: PNmap, fetchData: data, loading: false });
           }
           
    async editRadekDB(radek) {
    	const ID = radek[0]   
    	const item = {id: ID, name:radek[1], email:radek[2], phone:radek[3]}
    	await fetch('/api/contacts/'+ ID.toString(), {
      	method: 'PUT',
      	headers: {
        		'Accept': 'application/json',
        		'Content-Type': 'application/json'
      	},
      	body: JSON.stringify(item),
    	});
 }
           
     /*async postMethod(NU) {
        // POST request using fetch with async/await
		  const url = "https://jsonplaceholder.typicode.com/posts/"; 
		  const proxyurl = "https://cors-anywhere.herokuapp.com/";      
        
        const requestOptions = {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json',
            				'Accept': 'application/json', },
            body: JSON.stringify({ title: 'NU[1]' })
        };
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        this.setState({ postId: data.id });
    }*/
    postMethod2(NU){
     fetch('/api/contacts/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            mode: 'cors',
            body: JSON.stringify({
                name: NU[1], email:NU[2], phone:NU[3],
            }),
        }).then(response => response.text())
            .then(data => console.log(data))    
            .catch(error => console.log("Error detected: " + error))
		}
		
     async deleteFromDB(id) {
		await fetch(` /secured/delete/${id}`, {
      	method: 'DELETE',
      	mode: 'cors',
     	 	headers: {
         'Accept': 'application/json',
        	'Content-Type': 'application/json'
      	}
    	})
    }
         
    componentDidMount() {
          this.fetchData()
              }

    render() {
       if (this.state.loading) {
       return <div>loading data...</div>;
        }

       if (!this.state.fetchData) {
       return <div>didnt get data</div>;
       }

      console.log(this.state.vstup)

      const tabulka = <Tabulka hlavicka={this.state.hlavicka}
                               telo={this.state.vstup}
      			       smazat={this.removeRadek}
      			       ukazForm={this.state.ukazFormPromenna}
      			       formFunkce={this.ukazFormFunkce}
      			       pridatFunkce={this.pridejUzivatele}
      			       editFunkce={this.editUzivatele}
      			       cisloStranky={this.state.cisloStranky}
      			       akceNavigace = {this.definujStranku} />


        		
   return (
   <div className="App">
   	<div className="App-header">
       	<img src={logo} className="App-logo" alt="logo" /> 
       	<h2 id='title'>React example table</h2>
      </div>
      <div className="Navigace">
            <Navigace pageNumber = {this.state.cisloStranky}
                                 akce = {this.definujStranku}/>
      </div>
     		{tabulka}
    </div>
    );
  }

  removeRadek(ID) {
  	this.deleteFromDB(ID)
        this.fetchData()
        /*
  	var i=0
  	var a= []
  	for (const radek of this.state.vstup ) {      						
        i=i+1
        if (i !== ID) {
        		a.push(radek)
        }
        			}  
   this.setState({
     vstup: this.state.vstup = a 
      	
  });   */
		console.log(`mažu ted ${ID}`);
    }
    
   editUzivatele(ID,radekZmeny) {
   	this.editRadekDB(radekZmeny)
        this.fetchData()
        /*
        var i=0
  		var a= []
  		for (const radek of this.state.vstup ) {      						
        i=i+1
        if (i !== ID) {
        		a.push(radek)
        }
        else {a.push(radekZmeny)}
        			}  
   this.setState({
     vstup: this.state.vstup = a 
      	
  });     */
		console.log(`mažu ted ${ID}`);
    }
   
   
   ukazFormFunkce() {
   	var a = false
   	if (this.state.ukazFormPromenna == false) {
   		a = true;
   	}
   this.setState({
     ukazFormPridat: this.state.ukazFormPromenna = a 
      	
  });
		console.log(`ukazu formular`);
    }
    
   pridejUzivatele(NU) {
   	console.log(`pridam ve vstupu ${NU}`) 
   	this.postMethod2(NU)
   	console.log(`pridam do databaze ${NU}`);
   	this.fetchData()
  /* 	var a = this.state.vstup
   	a.push(NU)      	
   this.setState({
     		vstup: this.state.vstup = a  	
  					});
		console.log(`pridam ${NU}`);*/
		
    }

 definujStranku(cislo){
   this.setState({
     cisloStranky: this.state.cisloStranky = cislo
     });
     this.fetchData()
     console.log(`aktualni stranka ${this.state.cisloStranky}`)
     }
    }

export default App;
