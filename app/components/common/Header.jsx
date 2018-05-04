import React from 'react';
import styles from './scss/Header.scss'
//console.log(styles)
class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="header">
                <div className="head">
                    <div>
                        <ul className="clearfix">
                            <li>登陆/我的商城</li>
                            <li>购物车</li>
                            <li>商家中心</li>
                            <li className="last">网来商城App</li>
                        </ul>
                    </div>
                    
                </div>
                
                <div className="search clearfix">
                    <div className="logo"></div>
                    <div className="searchContainer"></div>
                </div>   
            </div>

        );
    }

    componentDidMount() {}
}

export default Header;