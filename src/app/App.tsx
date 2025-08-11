import './global/global.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from '@/shared/config';

import { DefaultLayout } from '@/shared/ui';
import { DashBoard } from '@/pages/mainDashBoard';
import { MemberSearchPage } from '@/pages/memberSearchPage';
import { MemberDetailPage } from '@/pages/memberDetailPage';
import { MemberRegisterPage } from '@/pages/memberRegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.DASHBOARD} replace />} />

          <Route path={ROUTES.DASHBOARD} element={<DashBoard />} />
          <Route path={ROUTES.MEMBER.LIST} element={<MemberSearchPage />} />
          <Route path={ROUTES.MEMBER.DETAIL} element={<MemberDetailPage />} />
          <Route path={ROUTES.MEMBER.REGISTER} element={<MemberRegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
