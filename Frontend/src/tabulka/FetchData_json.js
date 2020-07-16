import React from "react";

export default class FetchData extends React.Component {
  state = {
    loading: true,
    persons: []
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ persons: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading data...</div>;
    }

    if (!this.state.persons) {
      return <div>didn't get data</div>;
    }

    const PN = []
    const PNu = []
    const PNmail = []
    for (const person of this.state.persons){
          PN.push(person.name)
          PNu.push(person.username)
          PNmail.push(person.email)

          }
    const data =  [PN,PNu,PNmail]
    return (
      {data}

    );
  }
}
