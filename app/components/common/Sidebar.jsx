import React from 'react';
import './scss/Sidebar.scss'

export default class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            hideTipIsSHow:false,
            keysWord:''
        }
    }

    componentDidMount(){ 
    }

    mouseEnterEvent(parmas){
        
        this.setState({
            hideTipIsSHow:true,
            keysWord:parmas
        })
               
        
    }

    mouseLeaveEvent(parmas){
        
    }

    render(){
        return(
            <div className="sidebar">
                <div className="shoppingCar">
                    <p><i></i><span>购物车</span></p>
                </div>
                <div className="feedback" onMouseEnter={this.mouseEnterEvent.bind(this,'FEEDBACK')} >
                    
                </div>
                <div className="backTop" onMouseEnter={this.mouseEnterEvent.bind(this,'BACKTOP')}>
                    
                </div>
                <span className={`feedbackHide ${this.state.hideTipIsShoe && this.state.keysWord == 'FEEDBACK' : 'active'? '' }`}>用户反馈</span>
                <span className="backTopHide">回顶部</span>
            </div>
        )
    }
}