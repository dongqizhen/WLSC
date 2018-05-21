import React from 'react';

class StoreNav extends React.Component {
  constructor() {
    super();
    this.state = {};
  }


  componentDidMount() {
    
  }

  render() {
    return (
        <div className="StoreNav">
            <ul>
                <li>全部商品(99)</li>
                <li>店铺介绍</li>
                <li>店铺资料</li>
            </ul>
        </div>
    );
  }

  
}

export default StoreNav;
