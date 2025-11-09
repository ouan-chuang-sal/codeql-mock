import "./App.css";
import CodeQlPopup from "./features/codeql-popup/components/codeql-popup";
import ErrorNotificationIcon from "./features/error-notification-icon/components/error-notification-icon";

function App() {
  return (
    <>
      <ErrorNotificationIcon />
      <CodeQlPopup />
    </>
  );
}

export default App;
