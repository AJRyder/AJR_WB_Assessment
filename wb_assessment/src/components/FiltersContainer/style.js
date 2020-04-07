import styled from 'styled-components'

export const MainDiv = styled.div`
    display: "flex"; 
    flex-Direction: "row"; 
    flex: "wrap";
}
`
export const FilterBtnDiv = styled.div`
    display:"flex"; 
    position: "absolute"; 
    right: "135px";
    @media(max-width: 750px){ 
        display:"flex"; 
        position: "absolute"; 
        right: "135px";
    }
    @media(min-width: 500px){
        display: "flex";
        flex-direction: "column"; 
        flex: "wrap"; 
    }
`