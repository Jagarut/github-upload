import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) => {
    //Using arrow function to automatically bind -this- to state.term
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
