import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '..';

const DefaultLayoutArea = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'lt ct';
  height: 100dvh;
`;

const DefaultLayoutSidebarArea = styled.div`
  grid-area: lt;
  width: 300px;
`;

const DefaultLayoutContentArea = styled.div`
  grid-area: ct;
    padding: 1rem;
`;

const DefaultLayout = () => {
  return (
    <DefaultLayoutArea>
      <DefaultLayoutSidebarArea>
        <Sidebar />
      </DefaultLayoutSidebarArea>
      <DefaultLayoutContentArea>
        <Outlet />
      </DefaultLayoutContentArea>
    </DefaultLayoutArea>
  );
};

export default DefaultLayout;
