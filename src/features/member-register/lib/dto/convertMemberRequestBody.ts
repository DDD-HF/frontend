interface AllData {
  basic: Record<string, any>;
  payment: Record<string, any>;
  additional: Record<string, any>;
}

export const convertMemberRequestBody = (allData: AllData) => {
  const { basic, payment, additional } = allData;

  const member = {
    status: 'ACTIVE',
    name: basic.name,
    memberNumber: basic.memberNumber,
    email: basic.email,
    zipCode: basic.zipCode,
    address: basic.address,
    detailedAddress: basic.detailedAddress,
    mobileNumber: basic.mobileNumber,
    landlineNumber: basic.landlineNumber,
    registrationDate: basic.registrationDate,
    isSmsSendingAllowed: basic.isSmsSendingAllowed === 'allowed',
    memo: basic.memo,
  };

  // 결제수단 변환
  const paymentMethod = (() => {
    const { paymentType, formData } = payment;

    switch (paymentType) {
      case '카드':
        return {
          paymentMethodType: paymentType,
          card: {
            paymentMethodId: Date.now(),
            isRecurringPaymentAgreed: true,
            cardNumber: formData.cardNumber,
            cardHolderName: basic.name,
            cardHolderType: '개인',
            dateOfBirth: '19950515',
            businessRegistrationNumber: null,
          },
        };
      case 'CMS':
        return {
          paymentMethodType: paymentType,
          cms: {
            paymentMethodId: Date.now(),
            isRecurringPaymentAgreed: true,
            bankName: formData.bank,
            accountNumber: formData.accountNumber,
            accountHolderName: basic.name,
            accountHolderType: '개인',
            dateOfBirth: '19950515',
            businessRegistrationNumber: null,
            consentInformation: 'CMS 동의 완료',
          },
        };
      default:
        return {}; // 혹은 throw Error
    }
  })();

  // 증빙 정보 변환
  const proof = (() => {
    if (additional.additionalType === 'CASHRECEIPT') {
      return {
        proofType: '현금영수증',
        cashReceipt: {
          proofId: Date.now(),
          isAutomatedIssuance: additional.issuanceMethod === '자동',
          cashReceiptInformation: additional.cashReceiptInformation,
        },
      };
    } else if (additional.additionalType === 'TAXINVOICE') {
      return {
        proofType: '세금계산서',
        taxInvoice: {
          proofId: Date.now(),
          isAutomatedIssuance: additional.issuanceMethod === '자동',
          memberType: 'BUSINESS',
          taxType: 'GENERAL',
          registrationNumber: '501-81-12345',
          tradeName: '스타트업 코리아',
          representativeName: basic.name,
          itemName: '서비스 결제',
          issuanceType: 'EMAIL',
        },
      };
    }
    return {};
  })();

  return {
    member,
    paymentMethod,
    proof,
  };
};
