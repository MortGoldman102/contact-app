import React from 'react';
import './Contact.css';


class Contact extends React.Component {
    constructor (props) {
        super(props);
        this.state ={
            isContactOnline: true 
        }
    }

    contactListHandler = () => {
        this.setState({isContactOnline: !this.state.isContactOnline})
    }

    render(){
        return(
            <div className = "Contact">
                <div className = {this.state.isContactOnline? "shadow-online": "shadow-offline"}>
                    <img src = {this.props.avatar} alt = "avatar" className="avatar"/>
                    <h1 className = "name">{this.props.name}</h1>
                    <div className = "status">
                        <div className = {this.state.isContactOnline? "status-online": "status-offline"}></div>
                        <span className = {"status-text"}>{this.state.isContactOnline? "online": "offline"}</span>

                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;