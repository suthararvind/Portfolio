
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background: rgb(25, 25, 36);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
    
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;





const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                As a recent graduate with a strong foundation in computer science, I am eager to apply my skills in
                 software development through an internship. I have hands-on experience with programming languages
                  such as CPP , Reactjs, JavaScript, Nodejs. I have worked on various academic projects, demonstrating my ability to collaborate, 
                  problem-solve, and learn quickly. My strong analytical skills and attention to detail enable me to 
                  write clean, efficient code. I am excited about the opportunity 
                to contribute to a dynamic development team and expand my knowledge in real-world software projects.
                </Desc>
            </Wrapper>
        </Container>
    )
}

export default Experience;