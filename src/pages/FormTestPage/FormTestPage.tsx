import { useState, useMemo } from "react";
import { PageTemplate } from "../../shared/ui";

import DatePicker from "react-datepicker";
import CustomDateInput from "./CustomDateInput";

import { FormRow } from "./../../shared/ui/Form/Layout/FormRow/FormRow";
import { FormField } from "./../../shared/ui/Form/Layout/FormRow/FormRow";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./FormTestPage.module.scss";
import { styled } from "styled-components";

const DefaultLayoutHeaderArea = styled.div`
  height: 60px;
  grid-area: hd;
  background: red;
`;

import {
  MemberPageFooter,
  MemberPageHeader,
} from "../../widgets/memberSearchForm/ui";

/* ** to do
  - 조건 및 진행 방향
  3. 폼 레이아웃 잡기
  4. input(각 사용성에 맞는 ex.textfield) 
  4-1. dropdown
  4-2. datepicker
  4-3. select 기타 등등 컴포넌트 생성  
  그리고 모든 input 을 다루는 최상위 컴포넌트에서 
  각 input 들의 상태(입력값)를 관리하는 로직이 들어가면 됨.
  5. 인풋하단에 에러 에러 메세지 대체
  - 8/16 Todo
  상태값 처리
  투두로 관리하기
  컴포넌트화, 스타일은 후에 하기
  onChange={handleChange} 값 추가
  -----------------------------------------------
  설치 datepicker
  npm install react-datepicker date-fns
  npm install --save-dev @types/react-datepicker
** */

// 폼 데이터 타입
type FormData = {
  name: string;
  memberNo: string;
  mobileNo:string;
  landlineNo:string;
  service:string;
  memo: string;
  joinData: Date | null;
};
// 초기값 
const initialForm: FormData = {
  name: "",
  memberNo: "",
  mobileNo:"",
  landlineNo: "",
  service: "",
  memo: "",
  joinDate: new Date(),
}
const FormTestPage = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);

  // 입력/셀렉트/텍스트에어리어 공통 변경 핸들러
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 날짜만 따로
  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({ ...prev, joinDate: date }));
  };

  return (
    <PageTemplate>
      <PageTemplate.Header>
        <MemberPageHeader />
      </PageTemplate.Header>
      <PageTemplate.Content>
        <div className="page-body use-gnb">
          <div className="container">
            <div
              className={`${styles["container-inner"]} ${styles["border-box"]}`}
            >
              <div className={styles.formGrid}>
                {/* 1줄에 2개 */}
                <FormRow col={2}>
                  <div className={styles.formField}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange} //바인딩: onChange
                      className={styles.formInput}
                      placeholder="이름"
                    />
                  </div>
                  <div className={styles.formField}>
                    <input 
                      type="text"
                      name="memberNo"
                      value={formData.memberNo} 
                      onChange={handleChange}
                      placeholder="회원번호"/>
                  </div>
                </FormRow>
                {/* 1줄에 4개 */}
                <FormRow col={4}>
                  <div className={styles.formField}>
                    <input
                      type="text"
                      name="mobileNo"
                      value={formData.mobileNo}
                      className={styles.formInput}
                      placeholder="휴대전화"
                    />
                  </div>
                  <div className={styles.formField}>
                    <input 
                      type="text"
                      name="landlineNo"
                      value={formData.landlineNo}
                      onChange={handleChange} 
                      placeholder="유선전화" 
                    />
                  </div>
                  <div className={styles.formField}>
                    <div className="width--full">
                      <DatePicker
                        selected={formData.joinDate}
                        onChange={handleDateChange}
                        dateFormat="yyyy.MM.dd"
                        maxDate={new Date()}
                        minDate={new Date("2000-01-01")}
                        customInput={
                          <CustomDateInput placeholder="가입일 선택" />
                        }
                        className="customDatepicker"
                      />
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange} 
                      className={styles.selectBox} 
                      defaultValue="">
                      <option 
                        value="" 
                        disabled 
                        hidden>
                        선택
                      </option>
                      <option value="cms">CMS</option>
                      <option value="other">Other option</option>
                    </select>
                  </div>
                </FormRow>
                {/* 1줄에 3개 */}
                <FormRow col={3}>
                  <div className={styles.formField}>
                    <input
                      type="text"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleChange} 
                      className={styles.formInput}
                      placeholder="휴대전화"
                    />
                  </div>
                  <div className={styles.formField}>
                    <input 
                      type="text"
                      name="landlineNo"
                      value={formData.landlineNo}
                      onChange={handleChange} 
                      placeholder="유선전화" 
                    />
                  </div>
                  <div className={styles.formField}>
                    <div className="width--full">
                      <DatePicker
                        selected={formData.joinDate}
                        onChange={handleDateChange}
                        dateFormat="yyyy.MM.dd"
                        maxDate={new Date()}
                        minDate={new Date("2000-01-01")}
                        customInput={
                          <CustomDateInput placeholder="가입일 선택" />
                        }
                        className="customDatepicker"
                      />
                    </div>
                  </div>
                </FormRow>
                {/* 1줄에 1개 (전체 넓이) */}
                <FormRow col={1}>
                  <div className={styles.formField}>
                    <textarea
                      name="memo"
                      value={formData.memo}
                      onChange={handleChange} 
                      className={styles.textarea}
                      placeholder="메모(full-width)"
                      rows={4}
                    />
                  </div>
                </FormRow>
                <FormRow col={1}>
                  <div className="width--full">
                    <DatePicker
                      selected={formData.joinDate}
                      onChange={handleDateChange}
                      dateFormat="yyyy.MM.dd"
                      maxDate={new Date()}
                      minDate={new Date("2000-01-01")}
                      customInput={
                        <CustomDateInput placeholder="가입일 선택" />
                      }
                      className="customDatepicker"
                    />
                  </div>
                </FormRow>
                <FormRow col={1}>
                  <div className={styles.formField}>
                  <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange} ㄴ
                      className={styles.selectBox} 
                      defaultValue="">
                      <option value="" disabled hidden className="placeholder">
                        선택하세요
                      </option>
                      <option value="someOption">Some option</option>
                      <option value="otherOption">Other option1 </option>
                      <option value="otherOption"> Other option2 </option>
                    </select>
                  </div>
                </FormRow>
                <FormRow col={1}>
                  <div className={styles.formField}>
                    <input 
                    type="text" 
                    placeholder="full area" 
                    />
                  </div>
                </FormRow>
              </div>
            </div>
          </div>
        </div>
      </PageTemplate.Content>
      <PageTemplate.Footer>
        <MemberPageFooter />
      </PageTemplate.Footer>
    </PageTemplate>
  );
};

export default FormTestPage;
