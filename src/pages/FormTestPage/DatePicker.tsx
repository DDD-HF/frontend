import DatePicker from "react-datepicker";
import CustomDateInput from "./CustomDateInput";

<DatePicker
  selected={formData.joinDate}
  onChange={handleDateChange}
  dateFormat="yyyy.MM.dd"
  customInput={<CustomDateInput />}
/>;
