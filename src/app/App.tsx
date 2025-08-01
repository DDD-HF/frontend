import "./global/global.css";
import { DefaultLayout } from "../shared/ui";
import { FormTestPage } from "../pages/FormTestPage";

function App() {
  return (
    <DefaultLayout>
      <FormTestPage />
    </DefaultLayout>
  );
}

export default App;
