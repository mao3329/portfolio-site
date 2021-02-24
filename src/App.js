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
  margin-bottom: 30px;
`;

function App() {
  return (
    <>
      <SiteTop />
      <PageMenu />
      <ContentTitle id="profile" ><i className="fas fa-male" />Profile</ContentTitle>
      <Profile />
      <ContentTitle id='skills'><i className="fas fa-cog" />Skills</ContentTitle>
      <Skill />
      <ContentTitle id='portfolios' ><i className="fas fa-sitemap" />Portfolios</ContentTitle>
      <Portfolio />
      <ContentTitle id='contacts' ><i className="fas fa-envelope" />Contact</ContentTitle>
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