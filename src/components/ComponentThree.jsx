import React from 'react';
import {connect} from "react-redux";
import {isEmptyObject} from "jquery";

import {
    getEarthquakesData,
    getEarthquakesCatalog
} from "../store/actions/map-actions";
import Navbar from "./Navbar";

class ComponentThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Component Three",
            subtitle: "Using Redux"
        };
        this.requestEarthquakeData = this.requestEarthquakeData.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    async requestEarthquakeData(){
        console.log('requestEarthquakeData');
        await this.props.getEarthquakesData();
        console.log('Using Redux DATA: ');
        console.log(this.props.earthquakeData);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <h1 className={"header__title"}>{this.state.title}</h1>
                <h2 className={"header__subtitle"}>{this.state.subtitle}</h2>
                <div className="container">
                    <div>
                        <button
                            onClick={this.requestEarthquakeData}
                        >
                            Get Earthquake Data
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    catalogs: state.mapReducer.catalogs,
    earthquakeData: state.mapReducer.earthquakeData
});

const mapDispatchToProps = {
    getEarthquakesData,
    getEarthquakesCatalog
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentThree);
