import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: "",
      remainingChars: this.props.maxChars
    };
  }


  eventChange = event => {
    this.setState({
      tweet: event.target.value,

      remainingChars: this.props.maxChars - event.target.value.length
    });
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.eventChange}/>
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
