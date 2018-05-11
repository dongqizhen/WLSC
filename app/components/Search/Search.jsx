import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Breadcrumb from '../common/Breadcrumb.jsx';
import { Header } from '../common/Header.jsx';
import Cassify from './Cassify.jsx';
class Search extends React.Component {
  constructor() {
    super();
    this.state = {  };
  }

  render() {
    return (
        <div className="serach">
          <Header />
          <Breadcrumb history={this.props.history} />
          <Cassify />
        </div>
    );
  }

  componentDidMount() {
    //this.setState({ someKey: 'otherValue' });
  }
}

export default Search;
