import React from 'react';
import './../scss/Filter.scss';
export default class Filter extends React.Component {
    constructor() {
        super();
        this.state = {
            lists:[
                {id:1,name:"配件"},
                {id:2,name:"耗材"},
                {id:3,name:"整机"},
                {id:4,name:"人工"}
            ],
            addClass:1
        };
    }

    handleBackgroundColor(addClass){
        console.log(addClass);
        this.setState({
            addClass:addClass
        })
    }

    render() {
        return (
            <div className="filter">
                <div className="common">
                    <div className="bigSort">
                        <ul>
                        {
                            this.state.lists.map((value,index,array)=>{
                                return <li key={Date.now()+'key'+value.id} className={this.state.addClass==value.id?"active":""}  onClick={()=>this.handleBackgroundColor(value.id)}>{value.name}</li>
                            })
                        }
                        </ul>
                    </div>
                    <div className="codeSort">
                        <div className="codeIndex">
                            <ul>
                                <li>A-G</li>
                                <li>H-N</li>
                                <li>O-T</li>
                                <li>U-Z</li>
                            </ul>
                        </div>
                        <div className="lineBox clearfix">
                             <span className="leftArrow"></span>
                             <div className="line"></div>
                             <span className="rightArrow"></span>
                        </div>
                    </div>
                    <div className="filterResult">
                        <ul className="clearfix">
                            <li>治疗机用x射线管</li>
                            <li>治疗机用x射线管</li>
                            <li>治疗机用x射线管</li>
                            <li>治疗机用x射线管</li>
                            <li>治疗机用x射线管</li>
                            <li>治疗机线管</li>
                            <li>治疗机用x射线管</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}