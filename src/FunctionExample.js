import React from 'react';
class Parent extends React.Component {
    constructor(props) {
        super(props)

        // Bind the this context to the handler function
        this.handler = this.handler.bind(this);

        // Set some state
        this.state = {
            messageShown: false
        };
    }

    // This method will be sent to the child component
    handler() {
        this.setState({
            messageShown: !this.state.messageShown
        });
    }

    // Render the child component and set the action property with the handler as value
    render() {
        
        return (
        <div>
        <Child action={this.handler}/>
        {this.state.messageShown && <h1>test</h1>}
        </div>

        )
    }
}

class Child extends React.Component {
    render() {
        return (
            <div>
                {/* The button will execute the handler function set by the parent component */}
                <button onClick={this.props.action} />
            </div>
        )
    }
}
export default Parent