import styled from 'styled-components';
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface RouteItem {
  path: string;
  icon: ReactNode;
  label: string;
  submenu?: RouteItem[];
}

interface SidebarSubmenuProps {
  submenu?: RouteItem[];
  label: string;
  icon: ReactNode;
}

const SubmenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainMenu = styled.div<{ $isExpanded: boolean }>`
  width: 100%;
  display: block;
  cursor: pointer;
`;

const ChevronIcon = styled(ChevronDownIcon)<{ $isExpanded: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.25rem;
  float: right;
  transition: all 0.5s;
  transform: ${props => (props.$isExpanded ? 'rotate(180deg)' : 'rotate(0)')};
`;

const SubmenuList = styled.div<{ $isExpanded: boolean }>`
  width: 100%;
  display: ${props => (props.$isExpanded ? 'block' : 'none')};
`;

const SubmenuItem = styled.li`
  position: relative;
`;

const ActiveIndicator = styled.span`
  position: absolute;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  inset-y: 0;
  left: 0;
  width: 0.25rem;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  background-color: var(--primary);
`;

const SidebarSubmenu = ({ submenu, label, icon }: SidebarSubmenuProps) => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const isActive = submenu?.some(m => m.path === location.pathname);
    if (isActive) setIsExpanded(true);
  }, [submenu, location.pathname]);

  return (
    <SubmenuContainer>
      <MainMenu onClick={() => setIsExpanded(!isExpanded)} $isExpanded={isExpanded}>
        {icon} {label}
        <ChevronIcon $isExpanded={isExpanded} />
      </MainMenu>

      <SubmenuList $isExpanded={isExpanded}>
        <ul>
          {submenu?.map((m, k) => (
            <SubmenuItem key={k}>
              <Link to={m.path}>
                {m.icon} {m.label}
                {location.pathname === m.path && <ActiveIndicator />}
              </Link>
            </SubmenuItem>
          ))}
        </ul>
      </SubmenuList>
    </SubmenuContainer>
  );
};

export default SidebarSubmenu;
