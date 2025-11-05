import { useMemberRegisterStore } from '@/widgets/MemberInfoRegisterForms/model/useMemberRegisterStore';
import { BasicMemberInfoRegisterForm, PaymentsMemberInfoRegisterForm, AdditionalMemberInfoRegisterForm } from '@/features/member-register';

import styled from 'styled-components';

const TabContainer = styled.div`
  margin-bottom: 32px;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e7eb;
`;

const Tab = styled.div<{ $active: boolean; $completed: boolean }>`
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  color: ${props => (props.$active ? '#3b82f6' : props.$completed ? '#059669' : '#6b7280')};
  border-bottom-color: ${props => (props.$active ? '#3b82f6' : 'transparent')};
  transition: all 0.2s ease;
`;

const FormContainer = styled.div`
  min-height: 500px;
`;

const MemberInfoRegisterForms = () => {
  const { activeTab, completedTabs } = useMemberRegisterStore();

  const tabs = [
    { key: 'basic', label: '기본정보' },
    { key: 'payment', label: '결제정보' },
    { key: 'additional', label: '추가정보' },
  ] as const;

  const renderActiveForm = () => {
    switch (activeTab) {
      case 'basic':
        return <BasicMemberInfoRegisterForm />;
      case 'payment':
        return <PaymentsMemberInfoRegisterForm />;
      case 'additional':
        return <AdditionalMemberInfoRegisterForm />;
      default:
        return <BasicMemberInfoRegisterForm />;
    }
  };

  return (
    <div>
      <TabContainer>
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.key} $active={activeTab === tab.key} $completed={completedTabs.includes(tab.key)}>
              {tab.label}
            </Tab>
          ))}
        </TabList>
      </TabContainer>

      <FormContainer>{renderActiveForm()}</FormContainer>
    </div>
  );
};

export default MemberInfoRegisterForms;
