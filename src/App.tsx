import "./App.css";
import { useState } from "react";
import CodeQlPopup from "./features/codeql-popup/components/codeql-popup";
import ErrorNotificationIcon from "./features/error-notification-icon/components/error-notification-icon";
import { messages } from "./data/messages";

function App() {
  const [currentMessage, setCurrentMessage] = useState(
    messages[Math.floor(Math.random() * messages.length)]
  );

  const handleDismiss = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setCurrentMessage(randomMessage);
  };

  return (
    <>
      <ErrorNotificationIcon />
      <CodeQlPopup message={currentMessage} onDismiss={handleDismiss} />
    </>
  );
}

export default App;
