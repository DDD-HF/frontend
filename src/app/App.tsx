import './global/global.css';
import { DefaultLayout } from '../shared/ui';
import { MemberSearchPage } from '../pages/memberSearchPage/ui';

function App() {
  return (
    <DefaultLayout>
      <MemberSearchPage />
    </DefaultLayout>
  );
}

export default App;
