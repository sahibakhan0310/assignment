import React, { Component } from 'react'
import TextBox from './TextBox'
class FormLayout extends Component {
    render() {
        const {contro,...rest}=this.props;
        return (
            <TextBox {...rest} />
        )
    }
}

export default FormLayout
