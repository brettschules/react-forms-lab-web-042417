import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };
  }

  eventChange = event => {

    var text = event.target.value
    let rows = text.split("\n")
    if(rows.length === 1) {
      var rowOneWordCount = this.wordCount(rows[0])
    }
     if (rows.length === 2) {
      var rowTwoWordCount = this.wordCount(rows[1])
    }
     if (rows.length === 3) {
      var rowThreeWordCount = this.wordCount(rows[2])
    }

    
    this.setState({
      text: text
    })
  }

   wordCount(text) {
    var count = 1
    for(let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        count++
      }
    }
    return count
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange = {this.eventChange}
        />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
