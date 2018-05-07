import React from 'react';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
import Container from './Container.jsx';
/* import styles from '../common/scss/Header.css' */
import Banner from '../common/Banner.jsx';
import Sidebar from '../common/Sidebar.jsx';

export default class Index extends React.Component {
        constructor() {
            super();
            this.state = {};
        }

        componentDidMount() {
            // this.setState({ });
           
        }

        render() {
            return (
                <div ref="container">
                    <Header />
                    <Banner />
                    <Container />
                    <Sidebar  parentNode={this} />
                    <Footer />
                </div>
            );
        }
    }