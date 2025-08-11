import { Tabs } from '@/shared/ui';

const MEmberInformation = () => {
  return (
    <Tabs defaultTab='basic'>
      <Tabs.List>
        <Tabs.Tab id='basic'>기본 정보</Tabs.Tab>
        <Tabs.Tab id='payments'>결제수단 정보</Tabs.Tab>
        <Tabs.Tab id='additional'>부가 정보</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id='basic'>
        <h2>import</h2>
      </Tabs.Panel>

      <Tabs.Panel id='payments'>
        <h2>payments</h2>
      </Tabs.Panel>

      <Tabs.Panel id='additional'>
        <h2>additional</h2>
      </Tabs.Panel>
    </Tabs>
  );
};

export default MEmberInformation;
