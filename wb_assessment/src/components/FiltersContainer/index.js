import React, { Component } from 'react'
import GenreMenu from '../GenreMenu/'
import RatingMenu from '../RatingMenu'
import ReleaseYearMenu from '../ReleaseYearMenu'
import { MainDiv, FilterBtnDiv, H1, NavContainer } from './style';
import Button from '@material-ui/core/Button'


class FiltersContainer extends Component {
    state = {
        isLoading: false,
        movies: [],
        errors: null,
        search: "",
        filteredMovies: []
    }

    render() {
        return (
            <div className="filters-container" 
                style={{
                    display: "flex", 
                    flexDirection: "row", 
                    flex: "wrap",}}>
                <ReleaseYearMenu filterReleaseYear={this.props.filterReleaseYear}/>
                
                <GenreMenu filterGenres={this.props.filterGenres}/>
                
                <RatingMenu filterRatings={this.props.filterRatings} />
                
                <FilterBtnDiv>
                    <Button style={{display: "flex", flex: "flex-end", textAlign: "center", marginRight: "20px", border: "3px gray"}}>
                        Clear Filters
                    </Button>

                    <Button style={{display: "flex", flex: "flex-end", textAlign: "center", marginRight: "20px", border: "3px gray"}} 
                    multiPropsFilter={this.props.multiPropsFilter}>
                        Apply Filters
                    </Button>

                    <Button>X</Button>
                </FilterBtnDiv>
            </div>
        )
    }
}

export default FiltersContainer