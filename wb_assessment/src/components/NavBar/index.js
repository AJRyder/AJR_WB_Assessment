import React from 'react'
import { NavLink } from 'react-router-dom'
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SmsIcon from '@material-ui/icons/Sms'
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import Button from '@material-ui/core/Button'
import * as ROUTES from '../../constants/routes'
import { MainDiv, H1, NavContainer } from './style';

const NavBar = () => { 
    return ( 
        <MainDiv>
            <H1>SEARCH <br/> RESULTS</H1>
            <NavContainer>

                <NavLink to={ROUTES.ALL} style={{display:"flex", 'text-decoration': 'none', "color": "gray"}}> { "All" } </NavLink>

                <NavLink to={ROUTES.MOVIES} style={{display:"flex", 'text-decoration': 'none', "color": "gray"}}> { "Movies" }<MovieIcon style={{marginLeft: "10px"}}/>  </NavLink>

                <NavLink to={ROUTES.TVSHOWS} style={{display:"flex", 'text-decoration': 'none', "color": "gray"}}> { "TV Shows" }<TvIcon style={{marginLeft: "10px"}}/></NavLink>

                <NavLink to={ROUTES.GAMESAPPS} style={{display:"flex", 'text-decoration': 'none', "color": "gray"}}> { "Games & Apps" } <SportsEsportsIcon style={{marginLeft: "10px"}}/> </NavLink>

                <NavLink to={ROUTES.BLOG} style={{display:"flex", 'text-decoration': 'none', "color": "gray"}}> { "Blog" }<SmsIcon style={{marginLeft: "10px"}}/> </NavLink>
               
                <NavLink to={ROUTES.OTHER} style={{display:"flex", 'text-decoration': 'none', "color": "gray", marginLeft: '10px'}}> { "Other" } </NavLink>
                <div>
                    <Button style={{border:"3px gray", borderColor:"gray"}}>
                        <AppsIcon/>
                    </Button>
                    <Button>
                        <ListIcon/>
                    </Button>  
                </div>

            </NavContainer>
        </MainDiv>
    )
}

export default NavBar