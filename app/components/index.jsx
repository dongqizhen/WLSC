import React from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
import Header from './common/Header.jsx';
import Footer from './common/Footer.jsx';
import Container from './Index/Container.jsx';
/* import styles from '../common/scss/Header.css' */
/* import Banner from '../common/Banner.jsx'; */
import Sidebar from './common/Sidebar.jsx';
import Search from './Search/Search.jsx';


const routes=[
    {
        path:'/',
        component:Container,
        exact:true
    },
    {
        path:'/search',
        component:Search
    }
]
    


const RouteWithSubRoutes = (route) => {
   return(
        <Route path={route.path} exact={route.exact} render={props => {
              return  <route.component {...props} routes={route.routes} />
        }
            
        }/>
   ) 
}
    


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
                <Router pasename="/">
                    <div>
                        <Header />

                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))} 
                        <Sidebar />
                        <Footer />
                    </div>
                </Router>
                
            );
        }
    }