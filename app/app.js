import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({
  render : function() {
    return <div className="">
      <div className="header bg-primary">Header</div>
      <div className="row">
        <div className="col-md-1 left-nav">
          <div className="nav-item bg-info"><Link to="/">Streams</Link></div>
          <div className="nav-item bg-info"><Link to="/academy">Academy</Link></div>
        </div>
        <div className="col-md-11 feature-container">
          {this.props.children}
        </div>
      </div>
    </div>
  }	
});

export default App;