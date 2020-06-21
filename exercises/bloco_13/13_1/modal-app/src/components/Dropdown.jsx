import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css'

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      clickedItem: this.props.content[0].id,
    }

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleDropdown() {
    return this.setState(state => {
      return {isOpen: !state.isOpen};
    });
  }

  handleClick(id) {
    this.setState({clickedItem: id});
  }

  render() {
    const { children, content } = this.props;

    const {item} = content.find(({id}) => id === this.state.clickedItem);
    
    return (
      <div className='container'>
        <h1>{children}</h1>
        <div
          className="dropdown-btn"
          onClick={this.toggleDropdown}  
        >
          {item}
        </div>
        <div className={this.state.isOpen ? 'dropdown-menu' : 'dropdown-menu-hidden'}>
          {content.map(({id, item}) => (
            <div key={id} onClick={() => this.handleClick(id)}>
              <div>{item}</div>
              <br />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Dropdown.defaultProps = {
  children: 'Minha lista',
}

Dropdown.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.number, item: PropTypes.string}),
  ).isRequired,
  children: PropTypes.string,
}

export default Dropdown;
