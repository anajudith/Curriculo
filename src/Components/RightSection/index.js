import React from "react";
import { Section, Main, About, Container, Timeline, LeftContent, RightContent, TlContent} from './styles'

const RightSection = () => {
    return (
        <Section>
            <Main>
                <About>
                    <h2>Sobre mim</h2>
                    <p>
                    Sou mulher, tenho 20 anos, atualmente cursando Bacharelado em Sistemas de Informação na Pontifícia Universidade Católica de Minas Gerais, tenho 
                    interesse na área de desenvolvimento de software, gostaria de aprender mais sobre as melhores práticas de engenharia e arquitetura de
                    software. Tenho experiência nas tecnologias front-end, como Html, Javascript,
                    Css, ReactJs.
                    <br/>
                    Estagiando na empresa Zup Innovation, como desenvolvedora front end, aprendendo sobre boas práticas de Javascript e React, realizando também testes com Jest.
                </p>
                </About>

                <Container>
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
                    <Timeline>
                        <LeftContent>
                            <h5>Alma viva</h5>
                            <p>10/2020 - 01/2021</p>
                        </LeftContent>
                        <RightContent>
                            <TlContent>
                                <h5>Representante de telemarketing</h5>
                                <p>
                                Trabalhando de call center atendimento ao cliente, na área de retenção.  
                                </p>
                            </TlContent>
                        </RightContent>
                    </Timeline>      
                </Container>
                <Container>
                    <h2>Escolaridade</h2>
                    <Timeline>
                        <LeftContent>
                            <h5>Zup Innovation</h5>
                            <p>02/2021 - 12/2021</p>
                        </LeftContent>
                        <RightContent>
                            <TlContent>
                                <h5>Pontifícia Universidade Católica de Minas Gerais</h5>
                                <p>
                                O Curso de Sistemas de Informação tem por objetivo formar 
                                um bacharel capaz de compreender, desenvolver, utilizar e adaptar tecnologias da informação, atuando de maneira ética, social e humana.  
                                </p>
                            </TlContent>
                        </RightContent>
                    </Timeline>
                    <Timeline>
                        <LeftContent>
                            <h5>Escola estadual Maestro Villa Lobos</h5>
                            <p>02/2017 - 12/2019</p>
                        </LeftContent>
                        <RightContent>
                            <TlContent>
                                <h5>Ensino Médio</h5>
                                <p>
                                 Ensino básico.
                                </p>
                            </TlContent>
                        </RightContent>
                    </Timeline>    
                </Container>
                <Container>
                    <h2>Cursos</h2>
                    <Timeline>
                        <LeftContent>
                            <h5>Udemy</h5>
                            <p>02/2021 - 12/2021</p>
                        </LeftContent>
                        <RightContent>
                            <TlContent>
                                <h5>Lorem ipsum</h5>
                                <p>
                                  
                                </p>
                            </TlContent>
                        </RightContent>
                    </Timeline>
                    <Timeline>
                        <LeftContent>
                            <h5>Udemy</h5>
                            <p>02/2017 - 12/2019</p>
                        </LeftContent>
                        <RightContent>
                            <TlContent>
                                <h5>Lorem Ipsum</h5>
                                <p>
                                 Ensino básico.
                                </p>
                            </TlContent>
                        </RightContent>
                    </Timeline>
                </Container>     
            </Main>
        </Section>
    )
}

export default RightSection;





