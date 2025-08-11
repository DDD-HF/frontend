import { ReactNode } from 'react';
import styled from 'styled-components';
import routes from './SidebarRoutes';
import { NavLink, Link, useLocation } from 'react-router-dom';
import SidebarSubmenu from './SideBarSubMenu';

interface RouteItem {
  path: string;
  icon: ReactNode;
  label: string;
  submenu?: RouteItem[];
}

const SidebarContainer = styled.div`
  padding: 20px;
  background: white;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const SidebarMenu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 8px 12px;
  background: #a2a1a80d;
  margin: 0;
  box-sizing: border-box;
  border-radius: 12px;
`;

const LogoContainer = styled.li`
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 1.25rem;
  display: flex:
`;

const Logo = styled.img`
  width: 2.5rem;
`;

const MenuItem = styled.li``;

const StyledNavLink = styled(NavLink)<{ $isActive?: boolean }>`
  font-weight: ${props => (props.$isActive ? '600' : 'normal')};
  background-color: ${props => (props.$isActive ? 'var(--base-200)' : 'transparent')};
`;

const ActiveIndicator = styled.span`
  position: absolute;
  inset-y: 0;
  left: 0;
  width: 0.25rem;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  background-color: var(--primary);
`;

const Sidebar = () => {
  const location = useLocation();

  const close = (e: React.MouseEvent) => {
    document.getElementById('left-sidebar-drawer')?.click();
  };

  return (
    <SidebarContainer className='drawer-side'>
      <SidebarMenu>
        <LogoContainer>
          <Link to={'/'}>
            <Logo src='/fms_logo.png' alt='Logo' />
            <img src='/text_logo.png' alt='Text Logo' />
          </Link>
        </LogoContainer>

        {routes.map((route: RouteItem, k: number) => (
          <MenuItem key={k}>
            {route.submenu ? (
              <SidebarSubmenu {...route} />
            ) : (
              <StyledNavLink end to={route.path} $isActive={location.pathname === route.path}>
                {route.icon} {route.label}
                {location.pathname === route.path && <ActiveIndicator />}
              </StyledNavLink>
            )}
          </MenuItem>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
