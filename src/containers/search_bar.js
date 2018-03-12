import React, { Component } from 'react'

export default class SearchBar extends Component {
  
  constructor(props){
    super(props);

    this.state = { term: '' };

    // function binding
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event) {
    this.setState( {term: event.target.value} );
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    //kick off action, through reducer, through to redux
  }

  render(){
    return(
      <form 
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input 
          placeholder="Search for a City"
          className="form-control"
          value={ this.state.term }
          onChange={ this.onInputChange } />
        <span className="input-group-btn">
          <button 
            type="submit"
            className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// mapStateToProps
function mapStateToProps(state) {
  return
}

// export default connect(mapStateToProps)(SearchBar)