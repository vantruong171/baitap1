import { PlusCircleOutlined } from "@ant-design/icons";
import "./app.scss";
import { Button, Form, Input, Space } from "antd";

function App() {
  return (
    <div className="todo-list-container">
      <div className="todo-list-wrapper">
        <div className="todo-list-header">
          <h2 className="todo-list-header__title">Todo list appliacation</h2>
          <Form className="todo-list-header__form">
            <Input size="large" placeholder="Please input task name..." />
            <Button type="primary">
              <PlusCircleOutlined />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
