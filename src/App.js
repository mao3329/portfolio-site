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
    </>
  );
}

export default App;