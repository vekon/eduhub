import React from 'react';

var AddStream = React.createClass({
  
  getInitialState: function() {
    return {
      name: '',
      desc: '',
      submitValue: 'Save'
    };
  },

  componentDidMount : function() {
    if (this.props.id) {
      this.props.fetchStream(this.props.id);
    }
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.activeStream !== nextProps.activeStream) {
      this.setState({
        name: nextProps.activeStream.name,
        desc: nextProps.activeStream.description,
        submitValue: 'Update'
      });
    }
  },

  nameChangeHandler: function(e) {
    this.setState({
      name: e.target.value
    });
  },

  descChangeHandler: function(e) {
    this.setState({
      desc: e.target.value
    });
  },

  onSubmit: function(e) {
    e.preventDefault();
    if (!this.state.name || !this.state.desc) {
      return;
    }
    this.props.submitStream(this.state.name, this.state.desc, this.props.id);
  },

  deleteHandler: function() {
    this.props.deleteStream(this.props.id);
  },

  render : function() {

    return (
      <form onSubmit={this.onSubmit}>
        StreamName : <input type="text" value={this.state.name} onChange={this.nameChangeHandler}/>
        Description : <input type="text" value={this.state.desc} onChange={this.descChangeHandler}/>

        <input type="submit" value={this.state.submitValue}/>
        { this.props.id &&
          <input type="button" value='Delete' onClick={this.deleteHandler}/>
        }
      </form>
    );
  }
})

export default AddStream;