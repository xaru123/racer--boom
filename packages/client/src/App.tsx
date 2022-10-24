import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignInPage from './pages/SignIn';
import GamePage from '@/pages/GamePage';
import LeaderboardPage from '@/pages/LeaderboardPage';
import ForumPage from '@/pages/ForumPage';
import ForumDialogPage from '@/pages/ForumDialogPage';
import {AudioSetup} from '@/components/AudioSetup/AudioSetup';
import {ErrorBoundaryComponent} from '@/components/ErrorBoundaryComponent';

import './index.less';

function App() {
  return (
      <>
        <ErrorBoundaryComponent>
          <header>
            <AudioSetup/>
          </header>
          <Router>
            <Routes>
              <Route path="/" element={<SignInPage/>}/>
              <Route path="/game" element={<GamePage health={2}/>}/>
              <Route path="/leaderboard" element={<LeaderboardPage/>}/>
              <Route path="/forum" element={<ForumPage/>}/>
              <Route path="/forum/:id" element={<ForumDialogPage/>}/>
            </Routes>
          </Router>
        </ErrorBoundaryComponent>
      </>
  );
}

export default App;
