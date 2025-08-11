import { ReactNode } from 'react';
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon';
import UserIcon from '@heroicons/react/24/outline/UserIcon';
import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon';
import MapIcon from '@heroicons/react/24/outline/MapIcon';
import WalletIcon from '@heroicons/react/24/outline/WalletIcon';
import styled from 'styled-components';

interface RouteItem {
  path: string;
  icon: ReactNode;
  label: string;
  submenu?: RouteItem[];
}

const MainIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const SubmenuIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const routes: RouteItem[] = [
  {
    path: '/dashboard',
    icon: (
      <MainIcon>
        <Squares2X2Icon />
      </MainIcon>
    ),
    label: '대시보드',
  },

  // 회원 메뉴
  {
    path: '',
    icon: (
      <MainIcon>
        <UserIcon />
      </MainIcon>
    ),
    label: '회원관리',
    submenu: [
      {
        path: '/member',
        icon: (
          <SubmenuIcon>
            <UserGroupIcon />
          </SubmenuIcon>
        ),
        label: '회원 목록',
      },
      {
        path: '/member/address',
        icon: (
          <SubmenuIcon>
            <MapIcon />
          </SubmenuIcon>
        ),
        label: '주소지 목록',
      },
      {
        path: '/member/payment',
        icon: (
          <SubmenuIcon>
            <WalletIcon />
          </SubmenuIcon>
        ),
        label: '결제수단 목록',
      },
    ],
  },
];

export default routes;
