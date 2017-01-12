import React from 'react';

var Streams = React.createClass({
  componentWillMount : function() {
    this.props.fetchStreams();
  },

  render : function() {
    var streamList = this.props.streams.map(function(eachStream, index){
      return <li key={index}>
        <span>{eachStream.name}</span>
        <span>{eachStream.description}</span>
      </li>
    });

    return (
      <ul>{streamList}</ul>
    );
  }
})

export default Streams;