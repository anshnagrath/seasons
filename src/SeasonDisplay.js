import React,{Component} from 'react';
import './SeasonDisplay.css'
class SeasonDisplay extends Component{
getSeason(lat,month){
    if(month>2 && month<9){
        return lat>0?'summer':'winter'
    }else{
        return lat>0?'winter':'summer'   
    }
}

render(){
 const season = this.getSeason(this.props.lat,new Date().getMonth()+1)   
const text = season === 'winter'? 'Burr,it is chilly':'Let hit the beach'
const icon = season === 'winter'? 'snowflake':'sun';
return (
    <div className={`season-display ${season}`}>
    <i className={`icon-left massive ${icon} icon `}></i>
    <h1>{text}</h1>
    <i className={`icon-right massive ${icon} icon `}></i>
    </div>
       )
}

}
export default SeasonDisplay