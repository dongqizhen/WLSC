import React from 'react';
import List from '../common/List.jsx';
import './../scss/Container.scss';
import Banner from '../common/Banner.jsx';
import { placeholder, clearFix } from 'polished';
export default class Container extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="Container">
                <Banner />
                <div className="listBox">
                    <div className="common">
                        <div className="product">
                            <div className="title">
                                <h3>热门产品推荐</h3>
                                <div className="placeholder"></div>
                            </div>
                            <ul className="clearfix">
                                <li className="left">
                                    <List />
                                </li>
                                <li className="left">
                                    <List />
                                </li>
                                <li className="left">
                                    <List />
                                </li>
                                <li className="left">
                                    <List />
                                </li>
                                <li className="left">
                                    <List />
                                </li>
                            </ul>
                        </div>
                        <div className="shop">
                            <div className="title">
                                <h3>热门店铺推荐</h3>
                                <div className="placeholder"></div>
                            </div>
                            <ul className="clearfix">
                                <li className="left">
                                    <List />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}