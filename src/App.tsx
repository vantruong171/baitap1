import {
  CheckOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import "./app.scss";
import { Button, Form, Input, Pagination } from "antd";

function App() {
  return (
    <div className="todo-list-container">
      <div className="todo-list-wrapper">
        <div className="todo-list-header">
          <h2 className="todo-list-header__title">Todo list appliacation</h2>
          <Form className="todo-list-header__form">
            <Input size="large" placeholder="Please input task name..." />
            <Button className="todo-list-header__bnt-add-task">
              <PlusCircleOutlined style={{ fontSize: "30px" }} />{" "}
            </Button>
          </Form>
          <div className="divider" />
        </div>

        <div className="todo-list-main">
          <div className="task">
            <p className="task__name">task 3 </p>
            <div className="task__groups-btn">
              <Button className="task__btn-done">
                <CheckOutlined />
              </Button>
              <Button className="task__btn-del">
                <DeleteOutlined />
              </Button>
            </div>
          </div>
          <div className="divider" />

          <div className="task">
            <p className="task__name">task 2 </p>
            <div className="task__groups-btn">
              <Button className="task__btn-done">
                <CheckOutlined />
              </Button>
              <Button className="task__btn-del">
                <DeleteOutlined />
              </Button>
            </div>
          </div>
          <div className="divider" />

          <div className="task">
            <p className="task__name">asdasdsadas </p>
            <div className="task__groups-btn">
              <Button className="task__btn-done">
                <CheckOutlined />
              </Button>
              <Button className="task__btn-del">
                <DeleteOutlined />
              </Button>
            </div>
          </div>
          <div className="divider" />

          <div className="task">
            <p className="task__name task__name--color">ahihi... </p>
            <div className="task__groups-btn">
              <Button className="task__btn-done">
                <CheckOutlined />
              </Button>
              <Button className="task__btn-del">
                <DeleteOutlined />
              </Button>
            </div>
          </div>
          <div className="divider" />

          <div className="task">
            <p className="task__name task__name--color">di ngu thoi </p>
            <div className="task__groups-btn">
              <Button className="task__btn-done">
                <CheckOutlined />
              </Button>
              <Button className="task__btn-del">
                <DeleteOutlined />
              </Button>
            </div>
          </div>
          <div className="divider" />
        </div>

        <div className="todo-list-pagination">
          <div className="divider" />
          <Pagination align="center" defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
}

export default App;
