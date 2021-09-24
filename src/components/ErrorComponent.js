import React, { Component } from 'react'

class ErrorComponent extends Component {
    render() {
        return (
            <div className='error'>{this.props.children}</div>
        )
    }
}

export default ErrorComponent
