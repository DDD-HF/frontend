import { styled } from 'styled-components';

const DefaultLayoutArea = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'hd hd' 'lt ct';
  height: 100dvh;
`;

const DefaultLayoutHeaderArea = styled.div`
  height: 60px;
  grid-area: hd;
  background: red;
`;

const DefaultLayoutSidebarArea = styled.div`
  grid-area: lt;
  width: 222px;
  background: blue;
`;

const DefaultLayoutContentArea = styled.div`
  grid-area: ct;
  border: 1px solid green;
`;

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;

  return (
    <DefaultLayoutArea>
      <DefaultLayoutHeaderArea></DefaultLayoutHeaderArea>
      <DefaultLayoutSidebarArea></DefaultLayoutSidebarArea>
      <DefaultLayoutContentArea>{children}</DefaultLayoutContentArea>
    </DefaultLayoutArea>
  );
};

export default DefaultLayout;
