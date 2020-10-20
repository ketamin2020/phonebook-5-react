import React, { Component } from "react";

export default class ContactCreator extends Component {
  state = {
    name: "",
    number: "",
  };

  handleAddContact = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { name, number } = this.state;
    const { createTask } = this.props;
    e.preventDefault();
    createTask(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="group">
            <input
              type="text"
              name="name"
              required
              value={this.state.name}
              onChange={this.handleAddContact}
            />
            <span className="bar"></span>
            <label>Name</label>
          </div>

          <div className="group">
            <input
              type="tel"
              name="number"
              required
              value={this.state.number}
              onChange={this.handleAddContact}
            />
            <span className="bar"></span>
            <label>Number </label>
          </div>

          <button className="glow-on-hover" type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
