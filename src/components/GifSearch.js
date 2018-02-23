import React from "react";

class GifSearch extends React.Component {
  state = {
    input: ""
  };

  handleInput = input => this.setState({ input });

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.props.submitHandler(this.state.input);
        }}
      >
        <input
          type="text"
          name="search"
          value={this.state.input}
          onChange={event => this.handleInput(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default GifSearch;
