import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {  };
  }

  render() {
    return (
        <div className="serach">
            你好
        </div>
    );
  }

  componentDidMount() {
    //this.setState({ someKey: 'otherValue' });
  }
}

export default Search;
