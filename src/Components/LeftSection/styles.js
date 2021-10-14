import styled from 'styled-components';


export const Main = styled.div `
    min-height: 100vh;
    width: 80%;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    @media screen and (max-width:1200px) {
    
        grid-template-columns: repeat(1, 1fr);
    }
    
`
export const Section = styled.div `
    grid-column: span 2;
    height: 100%;
    background-color: #00324A;
    a {
        color: #ccc;
    }
    @media screen and (max-width:780px) {
        grid-column: span 3;
    
    }
`
export const Content = styled.div`
    padding: 2rem 3rem;
    h3 {
        font-size: 1.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #f7f7f7ec;
        padding-top: 3rem;
    }
    
`

export const Profile = styled.div`
    width: 100%;
    border-bottom: 1px solid #002333;
    text-align: center;
    img {
        
        border-radius: 50%;
        border: 7px solid #002333;
        width: 15rem;
        height: 15rem;
    }

    p {
        font-size: 1.2rem;
        color: #94D9EA;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding-bottom: 1rem;
    }
    h2 {
        font-size: 2rem;
        color: white;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 1.2rem 0;
        @media screen and (max-width:390px) {     
           font-size: 1.5rem;
        }   
    }
`

export const ContactInfo = styled.div`
    ul {
        padding-top: 2rem;
    }
    li {
        padding: .4rem 0;
        display: flex;
        align-items: center;
        color: #718096;
    }

    a {
        color: #718096;
    }

    i {
     padding-right: 1rem;
     font-size: 1.2rem;
     color: #2D9CDB;
    }
    h3 {
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #f7f7f7ec;
    padding-top: 3rem;
    }
`

export const Skills = styled.div`

    
    ul {
        padding-top: 2rem;
    }

    li {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: .4rem 0;
    }
    p {
        text-transform: uppercase;
        color: #f7f7f7;
        font-size: 1rem;
    }

`
export const ProgressBar = styled.div`
    width: 100%;
    height: .4rem;
    background-color: #2f81ed5b;
    position: relative;
    border-radius: 12px;
`
export const ProgressBarJs = styled.div`
    height: 100%;
    position: absolute;
    left: 0;
    background-color: #2D9CDB;
    width: 40%;
`
export const ProgressBarHC  = styled.div`
    height: 100%;
    position: absolute;
    left: 0;
    background-color: #2D9CDB;
    width: 60%;
`

export const ProgressBarRT = styled.div`
    height: 100%;
    position: absolute;
    left: 0;
    background-color: #2D9CDB;
    width: 50%;
`

export const ProgressBarJ = styled.div`
    height: 100%;
    position: absolute;
    left: 0;
    background-color: #2D9CDB;
    width: 20%;
`

export const ReferencesSection = styled.div`

h6 {
    padding-top: 2rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #f7f7f7;
}
p {
    color: #ccc;
    padding: .4rem;
}

li {
    color: #ccc;
    padding: .2rem 0;
}
i {
    padding-right: .5rem;
    font-size: 1.2rem;
    color: #2D9CDB;
}
`