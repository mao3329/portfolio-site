import './App.css';

// components
import { SiteTop } from './components/Top';
import { Profile } from './components/Profile';
import { Skill } from './components/Skill';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
    <SiteTop />
    <Profile />
    <Skill />
    <Portfolio />
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