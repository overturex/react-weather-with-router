import React from 'react';
import ReactDOM from 'react-dom';

class ErrorModal extends React.Component{
  componentDidMount(){
    var modalMarkup = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{this.props.title}</h4>
        <p>{this.props.message}</p>
        <button type="button" className="button hollow" data-close="">OK</button>
      </div>
    );

    ReactDOM.render(modalMarkup, ReactDOM.findDOMNode(this));

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render(){
    return(
      <div></div>
    );
  }
}

ErrorModal.defaultProps = {
  title: 'Error',
}

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
}

export default ErrorModal;
