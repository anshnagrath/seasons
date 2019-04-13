import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class  App extends Component{
state={
    lat:null,
    errorMessage:''
}
 componentDidMount(){
     console.log('Mounted')
     window.navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position)
        this.setState({lat:position.coords.latitude})
    },(err)=>{  this.setState({errorMessage:err.message})
                console.error(err)
            }
    )
 }
render(){
    if(!this.state.lat && this.state.errorMessage){
        return <div>Error:{this.state.errorMessage}</div>
    }else if(this.state.lat && !this.state.errorMessage){
        return <div><SeasonDisplay lat={this.state.lat}></SeasonDisplay></div>
    }else{
        return <Spinner/>

    }  
  
}
}

ReactDOM.render(<App />, document.getElementById('root'));
