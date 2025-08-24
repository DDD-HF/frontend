import { Form } from '@/shared/ui';

const BasicMemberInfoRegisterForm = () => {
    const handleSubmit = (values: Record<string, any>) => {
        console.log('제출된 값들:', values);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            initialValues={{
                name: '',
                memberNumber: '',
                mobileNumber: '',
                landlineNumber: '',
                email: '',
                isSmsSendingAllowed: 'allowed',
                registrationDate: '',
                email2: '',
                zipCode: '',
                address: '',
                detailedAddress: '',
                memo:''
            }}
        >
            {/* 첫 번째 줄 - 이름, 회원번호 */}
            <Form.Row gap={24}>
                <Form.Field name="name" label="이름" required>
                    <Form.TextInput
                        name="name"
                        placeholder="이름을 입력하세요"
                        validation={/^[가-힣]{2,10}$/}
                        validationMessage="한글 2~10자로 입력해주세요"
                    />
                </Form.Field>
                <Form.Field name="memberNumber" label="회원번호" required>
                    <Form.TextInput
                        name="memberNumber"
                        placeholder="회원번호를 입력하세요"
                    />
                </Form.Field>
            </Form.Row>

            {/* 두 번째 줄 - 휴대전화, 유선전화  */}
            <Form.Row gap={24}>
                <Form.Field name="mobileNumber" label="휴대전화" required>
                    <Form.TextInput
                        name="mobileNumber"
                        placeholder="휴대전화를 입력하세요"
                    />
                </Form.Field>
                <Form.Field name="landlineNumber" label="유선전화" required>
                    <Form.TextInput
                        name="landlineNumber"
                        placeholder="유선전화를 입력하세요"
                    />
                </Form.Field>
            </Form.Row>

            {/* 세 번째 줄 - 이메일, sms수신여부 */}
            <Form.Row gap={24}>
                <Form.Field name="email" label="이메일" required>
                    <Form.TextInput
                        name="email"
                        type="email"
                        placeholder="이메일을 입력하세요"
                    />
                </Form.Field>
                <Form.Field name="isSmsSendingAllowed" label="SMS 수신여부">
                    <Form.RadioGroup
                        name="isSmsSendingAllowed"
                        options={[
                            { value: 'allowed', label: '동의' },
                            { value: 'notAllowed', label: '미동의' }
                        ]}
                    />
                </Form.Field>
            </Form.Row>

            {/* 네 번째 줄 - 가입일, 이메일 */}
            <Form.Row gap={24}>
                <Form.Field name="registrationDate" label="가입일" required>
                    <Form.DatePicker name="registrationDate"/>
                </Form.Field>
                <Form.Field name="email2" label="이메일">
                    <Form.TextInput
                        name="email2"
                        type="email"
                        placeholder="이메일을 입력하세요"
                    />
                </Form.Field>
            </Form.Row>

            <Form.Row gap={24}>
                <Form.Field name="zipCode" label="우편번호">
                    <Form.TextInput
                        name="zipCode"
                        placeholder=""
                    />
                </Form.Field>
                <Form.Field name="address" label="주소">
                    <Form.TextInput
                        name="address"
                        placeholder=""
                    />
                </Form.Field>
            </Form.Row>

            <Form.Row>
                <Form.Field name="detailedAddress" label="상세주소">
                    <Form.TextInput
                        name="detailedAddress"
                        placeholder=""
                    />
                </Form.Field>
            </Form.Row>

            <Form.Row>
                <Form.Field name="memo" label="메모">
                    <Form.TextInput
                        name="memo"
                        placeholder=""
                    />
                </Form.Field>
            </Form.Row>

            <Form.Submit>회원 등록</Form.Submit>
        </Form>
    );
};

export default BasicMemberInfoRegisterForm;
