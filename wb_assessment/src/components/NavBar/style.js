import styled from 'styled-components'

export const H1 = styled.h1`
    display: flex; 
    flex-direction: row; 
    color: black;   
    padding: 0 135px 0 35px; 
    text-align: left;
    @media (max-width: 558px){
        flex-direction: column; 
        text-align: center
    }     
`
export const MainDiv = styled.div`
    display: flex; 
    flex-direction: row; 
    flex-wrap: wrap; 
    margin-top: 50px;
    @media (max-width: 500px){
        display: flex; 
        flex-direction: column; 
        align-self: center; 
        align-contents: center;  
    };
    @media (max-width: 778px){
        display: flex; 
        flex-direction: column; 
        align-self: center; 
        align-contents: center;  
    }
`
export const NavContainer = styled.div`
    display: flex; 
    flex: flex-end; 
    margin-right: 100px; 
    margin-bottom: 10px;
    align-self: flex-end;
    top: 60px; 
    align-items: center;  
    justify-content: center; 
    text-decoration: none;
    @media (max-width: 778px){
        display: flex; 
        flex-direction: column; 
    }
    @media (max-width: 558px){
        display: flex; 
        flex-direction: column; 
    }
 
`
export const NavLink = styled.div`
    display: flex; 
    flex: wrap; 
    text-decoration: none; 
    padding-right: 20px;
    margin-right: 20px; 
`
export const A = styled.div`
    display: flex; 
    text-decoration: none; 
    padding-right: 20px;
    margin-right: 20px;  
`