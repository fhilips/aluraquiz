import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget/index.js';
import QuizBackground from '../src/components/QuizBackGround/index.js';
import Footer from '../src/components/Footer/index.js';
import GitHubCorner from '../src/components/GitHubCorner/index.js';



/* const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroungImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>The legend of zelda</h1>
            </Widget.Header>            
            <p>lorem ipsum doilor sit amet...</p>
          </Widget.Content>         
        </Widget>     
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com"/>
    </QuizBackground>
    )
}
