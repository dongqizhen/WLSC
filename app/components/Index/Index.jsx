import React from 'react';
import Header from '../common/Header.jsx'
import Footer from '../common/Footer.jsx';
import Banner from '../common/Banner.jsx';
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
                    <Footer />
                </div>
            );
        }
    }