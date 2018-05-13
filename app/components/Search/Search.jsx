import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Breadcrumb from '../common/Breadcrumb.jsx';
import { Header } from '../common/Header.jsx';
import Cassify from './Cassify.jsx';
import ReactPaginate from 'react-paginate';
import './scss/paginate.scss'
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
          <div className="paginationContainer">
            <ReactPaginate previousLabel={"<上一页"}
                        nextLabel={"下一页>"}
                        breakLabel={<a>...</a>}
                        breakClassName={"break-me"}
                        pageCount={20}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                        pageClassName={"tag"} />
          </div>
          
        </div>
    );
  }

  componentDidMount() {
    //this.setState({ someKey: 'otherValue' });
  }
}

export default Search;
