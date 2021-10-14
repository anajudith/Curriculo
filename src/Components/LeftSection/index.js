import React from 'react'
import {Main, Section, Content, Profile, ContactInfo, Skills, ProgressBar, 
ProgressBarJs, ProgressBarHC, ProgressBarRT, ProgressBarJ, ReferencesSection   } from './styles'
import { FaWhatsapp, FaGithub, FaEnvelope, FaLinkedinIn, FaMapMarkerAlt, FaFax } from "react-icons/fa";
import Eu from '../../images/AJAP2.jpg'
import RightSection from '../RightSection/index';

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
                        </li>
                        <li>
                            <p>Html/CSS</p>
                            <ProgressBar>
                                <ProgressBarHC>
                                </ProgressBarHC>
                            </ProgressBar>
                        </li>
                        <li>
                            <p>React</p>
                            <ProgressBar>
                                <ProgressBarRT>
                                </ProgressBarRT>
                            </ProgressBar>
                        </li>
                        <li>
                            <p>JEST</p>
                            <ProgressBar>
                                <ProgressBarJ>
                                </ProgressBarJ>
                            </ProgressBar>
                        </li>
                    </ul>
                </Skills>
                <ReferencesSection>
                    <h3>Referencias</h3>
                    <h6>Zup Innovation</h6>
                    <p>Estagiaria Front End</p>
                    <ul>
                        <li>
                            <i><FaFax /></i>
                            <a href="https://www.zup.com.br/contato">Contato ZUP</a>
                        </li>
                    </ul>
                </ReferencesSection>
            </Content>
        </Section>
        <RightSection />
        </Main>
    )
}

export default LeftSection;
