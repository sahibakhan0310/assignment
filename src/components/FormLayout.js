import React, { Component } from 'react'
import TextBox from './TextBox'
class FormLayout extends Component {
    render() {
        const {control,...rest}=this.props;
        return (
            <TextBox {...rest} />
        )
    }
}

export default FormLayout
