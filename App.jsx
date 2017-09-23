import React from 'react';

 
class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
     data_updated: '[]',
      data: '[]'
     
    };
    
    this._updateState = this._updateState.bind(this);
  };
  _updateState(e){

   
     
  //check if input is valid json and show errors
    try {
       var myObject = JSON.parse(e.target.value);
    } catch (e) {

     alert(e); // You get an error.
    }
 
  //format json objects in new order and structure
    var json_data = myObject[0];

    var house = json_data[0];
    var exterior = myObject[1];  
    var interior = myObject[2];
    var window_1 = interior[0];
    var door = interior[1];
    var window_2 = interior[2];

    house.children = exterior;
    house.children[0].children[0] = window_1;
    house.children[0].children[1] = window_2;
    house.children[2].children[0] = door;

  //format json as string
    const house_string = JSON.stringify(house,'false', 4); 

  //set states
    this.setState({data: e.target.value});
    this.setState({data_updated: house_string});


}

  
  render() {
  const data_updated  = this.state.data_updated;

    return (   
        <Content myDataProp = {this.state.data} 
          updateStateProp = {this._updateState} 
          myDataPropUpdated = {this.state.data_updated}
          />
       
    );
  };
}

   
class Content extends React.Component {
  render() {

    return (
      <div> 
        <span>
            <h2>Parse Json here</h2>
             <textarea rows="40" type="text" value = {this.props.myDataProp} onChange = {this.props.updateStateProp} /> </span>
             <span>
             <h2>Cleaned Json</h2>
             <textarea rows="40" type="text"  value = {this.props.myDataPropUpdated} readOnly/>
             </span>
         </div>
    );
  }
}

export default App;