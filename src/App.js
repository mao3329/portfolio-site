import './App.css';
import styled from 'styled-components';

// components
import { SiteTop } from './components/Top';
import { PageMenu } from './components/PageMenu';
import { Profile } from './components/Profile';
import { Skill } from './components/Skill';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

const ContentTitle = styled.h1`

`;

function App() {
  return (
    <>
      <SiteTop />
      <PageMenu />
      <ContentTitle id="profile" >Profile</ContentTitle>
      <Profile />
      <ContentTitle id='skills'>Skills</ContentTitle>
      <Skill />
      <ContentTitle id='portfolios' >Portfolios</ContentTitle>
      <Portfolio />
      <ContentTitle id='contacts' >Contact</ContentTitle>
      <Contact />
      <div className="footer">
        <div>
          <p className="copyright">Copyright&copy;  2021  Masaki Takebe.  All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default App;