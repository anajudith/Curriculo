import React from 'react'
import styled from 'styled-components';
import { FaWhatsapp, FaGithub, FaEnvelope, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import Eu from '../../images/AJAP2.jpg'
import RightSection from './PageCentro';

const LeftSection = () => {
    return (
        <Main>
            <Section>
            <Content>
                <Profile>
                    <img src={Eu} alt="" />
                    <h2>Ana Judith</h2>
                    <p>Desenvolvedora Front End</p>
                </Profile>
                <ContactInfo>
                    <h3>Contato</h3>
                    <ul>
                        <li>
                        <i><FaWhatsapp/></i> 
                        <a href="http://api.whatsapp.com/send?phone=55031982160678">(31) 98216-0678</a>
                        </li>

                        <li>
                         <i><FaEnvelope /></i>
                         <a href="mailto:ana-judth@hotmail.com?Subject=Título%20da%20mensagem">ana-judth@hotmail.com</a> 
                        </li> 

                        <li>
                            <i><FaGithub/></i>
                        <a href="https://github.com/anajudith">https://github.com/anajudith</a>
                        </li>

                        <li>
                            <i><FaLinkedinIn /></i>
                        <a href="https://www.linkedin.com/in/ana-judith-7955031ab/">www.linkedin.com/in/ana-judith-7955031ab/</a>
                        </li>

                        <li>
                            <i><FaMapMarkerAlt/></i>
                            Rua São bento 67, Marilândia. BH/MG
                        </li>
                    </ul>
                </ContactInfo>

                <Skills>
                    <h3>Skills</h3>
                    <ul>
                        <li>
                            <p>Javascript</p>
                            <ProgressBar>
                                <ProgressBarJs>
                                </ProgressBarJs>
                            </ProgressBar>

                            <p>Html</p>
                            <ProgressBar>
                                <ProgressBarJs>
                                </ProgressBarJs>
                            </ProgressBar>
                        </li>
                    </ul>
                </Skills>
            </Content>
        </Section>
        <RightSection />
        </Main>
    )
}

export default LeftSection;
const Main = styled.div `
    min-height: 100vh;
    width: 80%;
    margin: 2rem auto;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`
const Section = styled.div `
    grid-column: span 2;
    height: 100%;
    background-color: #00324A;
    a {
        color: #ccc;
    }
`
const Content = styled.div`
    padding: 2rem 3rem;
    
`

const Profile = styled.div`
    width: 100%;
    border-bottom: 1px solid #002333;
    img {
        width: 100%;
        text-align: center;
        width: 100%;
        border-radius: 50%;
        border: 7px solid #002333;
        width: 200px;
        height: 200px;
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
    }
`

const ContactInfo = styled.div`
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

const Skills = styled.div`

    h3 {
        font-size: 1.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #f7f7f7ec;
        padding-top: 3rem;
    }
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
const ProgressBar = styled.div`
    width: 100%;
    height: .4rem;
    background-color: #2f81ed5b;
    position: relative;
    border-radius: 12px;
`
const ProgressBarJs = styled.div`
    height: 100%;
    position: absolute;
    left: 0;
    background-color: #2D9CDB;
    width: 40%;
`