import React from 'react';

class ComponentOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Random Title",
            subtitle: "Random Sub-Title",
            options: ["test option one", "test option two", "test option three"],
        };
        this.handleTestFunction = this.handleTestFunction.bind(this);
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

    handleTestFunction(){
        console.log('handleTestFunction');
    }

    render() {
        return (
            <div>
                <h1 className={"header__title"}>{this.state.title}</h1>
                <h2 className={"header__subtitle"}>{this.state.subtitle}</h2>
                <div className="container">
                    <div className="widget">
                        <ul>
                            {this.state.options.length > 1 && this.state.options.map((option) => (<li key={option}>{option}</li>))}
                        </ul>
                    </div>
                    <div>
                        <button
                            onClick={this.handleTestFunction}
                        >
                            Button
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ComponentOne;
