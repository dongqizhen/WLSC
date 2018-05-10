import React from 'react';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
import Container from './Container.jsx';

/* import styles from '../common/scss/Header.css' */
import Banner from '../common/Banner.jsx';
import Filter from './Filter.jsx';
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
                <div>
                    <Header />
                    <Banner />
                    <Filter />
                    <Container />
                    <Footer />
                </div>
            );
        }
    }