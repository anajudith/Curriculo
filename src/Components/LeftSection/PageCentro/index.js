import React from "react";
import styled from 'styled-components';


const RightSection = () => {
    return (
        <Section>
            <Content>
                <About>
                    <h2>Sobre mim</h2>
                    <p class="para">
                    Sou mulher, tenho 20 anos, atualmente cursando Bacharelado em Sistemas de Informação na Pontifícia Universidade Católica de Minas Gerais, tenho 
                    interesse na área de desenvolvimento de software, gostaria de aprender mais sobre as melhores práticas de engenharia e arquitetura de
                    software. Tenho experiência nas tecnologias front-end, como Html, Javascript,
                    Css, ReactJs.
                    <br/>
                    Estagiando na empresa Zup Innovation, como desenvolvedora front end, aprendendo sobre boas práticas de Javascript e React, realizando também testes com Jest.
                </p>
                </About>

                <Experience>
                    <h2>Experiências</h2>
                    <Timeline>
                        <LeftContent>
                            <h5>Zup Innovation</h5>
                            <p>02/2021 - 12/2021</p>
                        </LeftContent>
                        <RightContent>
                            <TlContent>
                                <h5>Estagiaria front End</h5>
                                <p>
                                    Minha missão na empresa foi focado no aprendizado, onde tive
                                     a oportunidade de conhecer o framework React, e poder trabalhar com ele. 
                                     Tive vivência de projeto, e pude desenvolver projetos para contruibuir com o time.  
                                </p>
                            </TlContent>
                        </RightContent>
                    </Timeline>
                </Experience>
            </Content>
        </Section>
    )
}

export default RightSection;

const Section = styled.div`
    grid-column: span 5;
    background-color: #f7f7f7;
    height: 100%;
`

const Content = styled.div`
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
`

const About = styled.div`
    padding-bottom: 2rem;
    
    p {
        line-height: 1.6rem;
        color: #718096;
        font-size: 1.1rem; 
    }
`

const Experience = styled.div`
    padding-bottom: 2rem;
    h2{

    }
`
const Timeline = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    p {
        line-height: 1.6rem;
        color: #718096;
        font-size: 1.1rem;
    }
    

    
`

const LeftContent = styled.div`
h5 {
        letter-spacing: 1px;
        font-size: 1.3rem;
        color: #002333;
        text-transform: uppercase;
    }

`

const RightContent = styled.div`
`

const TlContent = styled.div`

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



