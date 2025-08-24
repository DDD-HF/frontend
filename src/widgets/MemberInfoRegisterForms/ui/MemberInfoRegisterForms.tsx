import { BasicMemberInfoRegisterForm, PaymentsMemberInfoRegisterForm } from "@/features/member-register";
import { Tabs } from "@/shared/ui";

const MemberInfoRegisterForms = () => {
    return (
        <Tabs defaultTab={'basic'}>
            <Tabs.List>
                <Tabs.Tab id='basic'>기본 정보</Tabs.Tab>
                <Tabs.Tab id='payments'>결제수단 정보</Tabs.Tab>
                <Tabs.Tab id='additional'>부가 정보</Tabs.Tab>
                <Tabs.Tab id='history'>상담 및 변경이력</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel id='basic'>
                <BasicMemberInfoRegisterForm/>
            </Tabs.Panel>

            <Tabs.Panel id='payments'>
                <PaymentsMemberInfoRegisterForm/>
            </Tabs.Panel>

            <Tabs.Panel id='additional'>
                <h2>additional</h2>
            </Tabs.Panel>

            <Tabs.Panel id='history'>
                <h2>history</h2>
            </Tabs.Panel>

        </Tabs>
    )
}

export default MemberInfoRegisterForms;