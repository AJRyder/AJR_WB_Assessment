import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class RatingMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filters: {
        rating: ['G', 'PG', 'PG-13', 'R', 'NC-17', 'UR'],
        releaseYear: [],
        isChecked: null,
      },
      filteredMovies: [],
    };
  }

  async componentDidMount() {
    const movies = await fetch('/api');
    const moviesToJson = await movies.json();
    this.setState({
      movies: moviesToJson,
    });
  }
  onChange = e => {
    const rating = e.target.name;
    this.props.filterRatings(rating, 'rating');
  };

  handleChecked = e => {
    let filters = this.state.filters;
    filters.forEach(filters => {
      if (filters.value === e.target.value)
        filters.isChecked = e.target.checked;
    });
    this.setState({ filters: filters });
  };

  renderCheckBoxes() {
    return this.state.filters.rating.map((filters, index) => {
      return (
        <label key={index}>
          <input
            onChange={this.onChange}
            type='checkbox'
            name={filters}
          />
          {filters}
        </label>
      );
    });
  }

  render() {
    // console.log(this.state.filteredMovies, this.state.movies);

    return (
      <List>
        <MenuList>
          {'MPAA Rating'}
          <MenuItem>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              {this.renderCheckBoxes()}
            </div>
          </MenuItem>
        </MenuList>
      </List>
    );
  }
}

export default RatingMenu;
