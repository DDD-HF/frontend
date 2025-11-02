import create from 'zustand';
import { persist } from 'zustand/middleware';

export type TabType = 'basic' | 'payment' | 'additional';

interface MemberRegisterState {
  // 현재 활성 탭
  activeTab: TabType;

  // 각 탭별 폼 데이터
  basicInfo: Record<string, any>;
  paymentInfo: {
    paymentType: string;
    formData: Record<string, any>;
  };
  additionalInfo: {
    additionalType: string;
    formData: Record<string, any>;
  };

  // 액션들
  setActiveTab: (tab: TabType) => void;
  setBasicInfo: (data: Record<string, any>) => void;
  setPaymentInfo: (data: Record<string, any>) => void;
  setAdditionalInfo: (data: Record<string, any>) => void;
  changePaymentType: (newType: string) => void;
  changeAdditionalType: (newType: string) => void;

  resetAll: () => void;

  // 탭 진행 상태
  completedTabs: TabType[];
  markTabCompleted: (tab: TabType) => void;
}

export const useMemberRegisterStore = create<MemberRegisterState>(
  persist(
    set => ({
      activeTab: 'basic' as TabType,
      basicInfo: {},
      paymentInfo: {
        paymentType: 'CMS',
        formData: {},
      },
      additionalInfo: {
        additionalType: 'CASHRECEIPT',
        formData: {},
      },
      completedTabs: [] as TabType[],

      setActiveTab: (tab: TabType) => set({ activeTab: tab }),

      setBasicInfo: (data: Record<string, any>) => set({ basicInfo: data }),

      setPaymentInfo: (data: Record<string, any>) =>
        set(state => ({
          paymentInfo: {
            paymentType: data.paymentType || state.paymentInfo.paymentType,
            formData: data,
          },
        })),

      setAdditionalInfo: (data: Record<string, any>) =>
        set(state => ({
          additionalInfo: {
            additionalType: data.additionalType || state.additionalInfo.additionalType,
            formData: data,
          },
        })),

      changePaymentType: (newType: string) =>
        set(state => {
          if (state.paymentInfo.paymentType !== newType) {
            return {
              paymentInfo: {
                paymentType: newType,
                formData: { paymentType: newType },
              },
            };
          }
          return state;
        }),

      changeAdditionalType: (newType: string) =>
        set(state => {
          if (state.additionalInfo.additionalType !== newType) {
            return {
              additionalInfo: {
                additionalType: newType,
                formData: { additionalType: newType },
              },
            };
          }
          return state;
        }),

      resetAll: () =>
        set({
          activeTab: 'basic' as TabType,
          basicInfo: {},
          paymentInfo: {
            paymentType: 'CMS',
            formData: {},
          },
          additionalInfo: {
            additionalType: 'CASHRECEIPT',
            formData: {},
          },
          completedTabs: [] as TabType[],
        }),

      markTabCompleted: (tab: TabType) =>
        set((state: MemberRegisterState) => ({
          completedTabs: state.completedTabs.includes(tab) ? state.completedTabs : [...state.completedTabs, tab],
        })),
    }),
    {
      name: 'member-register-storage',
    }
  )
);
