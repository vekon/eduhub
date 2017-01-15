import React from 'react';
import { Link } from 'react-router';

var Streams = React.createClass({
  componentWillMount : function() {
    this.props.fetchStreams();
  },

  render : function() {
    var streamList = this.props.streams.map(function(eachStream, index){
      return <div className="stream" key={eachStream.stream_id}>
        <Link to={"/stream/view/"+eachStream.stream_id}>{eachStream.name}</Link>
        {" "}
        <span>{eachStream.description}</span>
      </div>
    });

    return (
      <div className="">
        <Link to="/stream/new"><input type="button" value="Add Stream"/></Link>
        <div className="stream-list">{streamList}</div>
      </div>
    );
  }
});

export default Streams;