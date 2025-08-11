export const ROUTES = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  MEMBER: {
    LIST: '/member',
    DETAIL: '/member/:memberId',
    REGISTER: '/member/register',
  },
} as const;

export type RouteKeys = (typeof ROUTES)[keyof typeof ROUTES];

export const createMemberDetailRoute = (memberId: string | number) => `/member/${memberId}`;
