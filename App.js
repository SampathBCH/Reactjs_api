import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Fetch from 'react-fetch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class App extends Component {
	constructor() {
  	super();
 		 this.state={items:[]};
  }
  //I could just use <Fetch url="">

  //Load the component before DOM
  //Fetch will grab the data and wait for it
  componentWillMount(){
  	fetch(`http://jsonplaceholder.typicode.com/albums`)
 		.then(result=>result.json())
    .then(items=>this.setState({items}))
  }
  render() {
  	return(
      //This is where the returned data gets loaded into the DOM.
      //This part can be broken out to its own class to make it a little neater
      //It is the first time i was workind with material-ui and so had to do it quick and dirty way.
      <div>
          {this.state.items.length ?
          	this.state.items.map(item=><MuiThemeProvider><table><TableHeader>

            </TableHeader><TableBody>
              <TableRow>
                <TableRowColumn>{item.title}</TableRowColumn>
              </TableRow>
            </TableBody></table></MuiThemeProvider>)
            : <li>Please wait...</li>
          }
      </div>

   )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));

export default App;
