import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Button, Select, Paper, Grid } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FiltersContainer from './components/FiltersContainer';
import { keys } from '@material-ui/core/styles/createBreakpoints';

class App extends Component {
  state = {
    isLoading: true,
    movies: [],
    errors: null,
    search: '',
    filters: {
      rating: ['G', 'PG', 'PG-13', 'R', 'NC-17', 'UR'],
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
    filteredMovies: {
      rating: [],
      genre: [],
      releaseYear: [],
    },

    otherMovies: [],
  };

  async componentDidMount() {
    const movies = await fetch('/api');
    const moviesToJson = await movies.json();
    this.setState({
      movies: moviesToJson,
      otherMovies: [...moviesToJson],
    });
  }

  doSetFilter = (filter, name) => {
    this.state.filteredMovies[name].includes(filter)
      ? this.setState(
          {
            filteredMovies: {
              ...this.state.filteredMovies,
              [name]: this.state.filteredMovies[name].filter(m => {
                return m !== filter;
              }),
            },
          },
          () =>
            this.setState({
              otherMovies: [...this.multiPropsFilter()],
            }),
        )
      : this.setState(
          {
            filteredMovies: {
              ...this.state.filteredMovies,
              [name]: [...this.state.filteredMovies[name], filter],
            },
          },
          () =>
            this.setState({
              otherMovies: [...this.multiPropsFilter()],
            }),
        );
  };

  // function should take updated filteredMovies array(full of filters keys)
  // compare which keys are clicked and 
  // map back through the moviesList
  // to setState on OtherMovies array
  multiPropsFilter = (
    movies = this.state.movies,
    filteredMovies = this.state.filteredMovies,
  ) => {
    const filterKeys = Object.keys(filteredMovies);
    return movies.filter(movie => {
      return filterKeys.every(key => {
        if (!filteredMovies[key].length) return true;
        if (Array.isArray(movie[key])) {
          return movie[key].some(keyEle => {
            return filteredMovies[key].includes(keyEle);
          });
        }
        return filteredMovies[key].includes(movie[key]);
      });
    });
  };

  render() {
    console.log(this.state.filteredMovies, this.state.otherMovies);
    const { movies, filteredMovies, error, otherMovies } = this.state;
    const movieList = otherMovies.map((d, i) => (
      <>
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '250px',
            margin: '0 1px 0 1px',
          }}
        >
          <img
            style={{ marginBottom: '20px' }}
            class='posters'
            src={d.image}
          />
          <p style={{ color: 'grey', marginLeft: '10px' }}>
            Movies
            <h4
              style={{
                color: 'black',
                font: 'garamond',
                marginBottom: '60px',
              }}
            >
              {d.title}
            </h4>
          </p>
        </div>
      </>
    ));
    return (
      <div className='App' style={{ margin: '0 135px 0 135px' }}>
        <NavBar />

        <div
          class='Filter-Container'
          style={{ padding: '20px 35px 0' }}
        >
          <div>
            <FiltersContainer
              style={{ display: 'flex', height: '35px' }}
              filterRatings={this.doSetFilter}
              filterGenres={this.doSetFilter}
              filterReleaseYear={this.doSetFilter}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            verticalAlign: 'center',
            justifyContent: 'space-evenly',
            marginTop: '20px',
            marginBottom: '60px',
          }}
        >
          {movieList}
          {/* conditionally render otherMovies 
          array instead if filteredMovies array != empty array */}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '-20px',
            marginBottom: '20px',
            padding: '0px',
          }}
        >
          <button>
            <h3>LOAD MORE</h3>
          </button>
        </div>
      </div> //end of app component
    );
  }
}

export default App;
