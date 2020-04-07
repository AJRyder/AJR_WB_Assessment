import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';

class ReleaseYearMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filters: {
        rating: [],
        releaseYear: [
          1989,
          1992,
          1993,
          1995,
          1997,
          1998,
          2000,
          2003,
          2005,
          2008,
          2012,
          2013,
          2016,
          2017,
          2019,
        ],
      },
      filteredMovies: [],
    };
  }

  onChange = e => {
    const releaseYear = parseInt(e.target.name);
    this.props.filterReleaseYear(releaseYear, 'releaseYear');
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
    return this.state.filters.releaseYear.map((filters, index) => {
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
          {'Release Year'}
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

export default ReleaseYearMenu;
