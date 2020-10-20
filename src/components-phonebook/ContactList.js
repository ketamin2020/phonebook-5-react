import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import listTransition from "../components-phonebook/list-transition.module.css";

import PropTypes from "prop-types";

export default class ContactList extends Component {
  render() {
    const { items, removeContact } = this.props;
    return (
      <TransitionGroup component="ul" className="items">
        {items.map(({ id, name, contact }) => (
          <CSSTransition key={id} timeout={400} classNames={listTransition}>
            <li key={id} className="list">
              <div className="infoContact">
                <p>Name: {name}</p> <p>Tel. {contact}</p>
              </div>
              <button
                type="button"
                className="btn cross"
                onClick={() => removeContact(id)}
              ></button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
