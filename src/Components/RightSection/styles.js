import styled from 'styled-components';

export const Section = styled.div`
    grid-column: span 5;
    background-color: #f7f7f7;
    height: 100%;
    @media screen and (max-width:780px) {
        grid-column: span 4;
}
`

export const Main = styled.div`
    padding: 2rem 3rem;
    padding-bottom: 2rem;

h2 {
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #2F80ED;
        margin-bottom: 1.2rem;
        position: relative;
    }

    h2::after {
        content: "";
        position: absolute;
        width: 60%;
        height: .2rem;
        background-color: #ccc;
        border-radius: 12px;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    @media screen and (max-width:823px) {
        h2::after{
            width:40%;
        }
    }
    @media screen and (max-width:681px) {
    h2::after {
        width: 30%;
    }
}
`

export const About = styled.div`
    padding-bottom: 2rem;
    
    p {
        line-height: 1.6rem;
        color: #718096;
        font-size: 1.1rem; 
    }
`

export const Container = styled.div`
    padding-bottom: 2rem;
    h2{

    }
`
export const Timeline = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    p {
        line-height: 1.6rem;
        color: #718096;
        font-size: 1.1rem;
    }
    @media screen and (max-width:780px) {
    .timeline {
        grid-template-columns: repeat(1, 1fr);
    }
}

    
`

export const LeftContent = styled.div`
h5 {
        letter-spacing: 1px;
        font-size: 1.3rem;
        color: #002333;
        text-transform: uppercase;
    }

`

export const RightContent = styled.div`
`

export const TlContent = styled.div`

    border-left: 1px solid #ccc;
    padding-left: 2rem;
    position: relative;
    padding-bottom: 2rem;
    h5 {
        letter-spacing: 1px;
        font-size: 1.3rem;
        color: #2D9CDB;
        text-transform: uppercase;
    }

    h5::before{
        content: "";
        position: absolute;
        width: .7rem;
        height: .7rem;
        background-color: #2D9CDB;
        border-radius: 50%;
        transform: translateX(-50%);
        left: 0;
    }

`
