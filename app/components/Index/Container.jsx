import React from 'react';
import List from '../common/List.jsx';

export default class Container extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    <h2>热门产品推荐</h2>
                    <List />
                </div>
                <div>
                    <h2>热门店铺推荐</h2>
                    <List />
                </div>
          </div>
        );
    }
}