import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Category from './components/Category';
import Dashboard from './components/Dashboard'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

class App extends React.Component {
  state={
            data: [],
            isLoading: true
        }
    
    componentDidMount = () =>{
        fetch('https://jsonware.com/json/688410e8f4013fbe56009d8e1621f2a4.json')
  .then(response => response.json())
  .then(result => this.setState({
      data: result.MyData,
      isLoading: false
  }));
    };
  render(){
    const { data, isLoading } = this.state;
    let noOfCat = data.length;
  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <Dashboard />
      {!this.state.isLoading && this.state.data.map((item,index) =>{

        return <Category key={index} value={item} catNo={index+1} />
      })}
      </div>
    <Footer />
    </div>
  );
  }
}

export default App;
