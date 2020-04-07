import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Popover from '@material-ui/core/Popover';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';

class GenreMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filters: {
        rating: [],
        releaseYear: [],
        genres: [
          'Action',
          'Adventure',
          'Animated',
          'Comedy',
          'Crime',
          'Drama',
          'Mystery',
          'Sci-fi',
          'Suspense',
          'Thriller',
        ],
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
    const genre = e.target.name;
    this.props.filterGenres(genre.toLowerCase(), 'genre');
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
    return this.state.filters.genres.map((filters, index) => {
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
    return (
      <List>
        <MenuList style={{ textAlign: 'center' }}>
          {'Genres'}
          <MenuItem>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
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

export default GenreMenu;
