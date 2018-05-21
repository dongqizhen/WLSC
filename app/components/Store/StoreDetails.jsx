import React from 'react';
import { Header } from '../common/Header.jsx';
import StoreHeader from './StoreHeader.jsx';

export default class StoreDetailes extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className="storeDetailes">
                <Header bannerHeaderStyle={false} />
                <StoreHeader />
            </div>
        )
    }
}