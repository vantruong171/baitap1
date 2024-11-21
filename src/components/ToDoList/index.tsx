import {
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import "./styles.scss";
import { Button, Flex, Form, Input, Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TTask = {
  id: string;
  taskName: string;
  isDone: boolean;
};

const dataTasksList = [
  {
    id: 1,
    taskName: "task 1",
    isDone: false,
  },
  {
    id: 2,
    taskName: "task 2",
    isDone: false,
  },
  {
    id: 3,
    taskName: "task 3",
    isDone: true,
  },
];

function ToDoList() {
  const [isEditTask, setIsEditTask] = useState(false);
  const [doneTask, setDoneTask] = useState<TTask | null>(null);
  const [tasks, setTasks] = useState<TTask[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  const [form] = Form.useForm();

  const syncTaskToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  useEffect(() => {
    syncTaskToLocalStorage();
  }, [tasks]);

  const columns: TableProps<TTask>["columns"] = [
    {
      title: "Task",
      dataIndex: "taskName",
      key: "taskName",
      render: (text, record: TTask) => {
        // isEditTask ? (
        //   <div className="display-flex">
        //     <Input />
        //     <Button>ok</Button>
        //     <Button>cancel</Button>
        //   </div>
        // ) :
        return (
          <p
            className={`
            taskName ${record.isDone ? "taskName__done" : "taskName"}
          `}
          >
            {text}
          </p>
        );
      },
    },
    {
      title: "Actions",
      key: "actions",
      width: "30%",
      render: (_, record: TTask) => {
        return (
          <Flex gap={10}>
            <Button
              type="primary"
              color="default"
              onClick={() => onClickDoneTask(record)}
            >
              <CheckOutlined />
            </Button>
            <Button type="dashed" onClick={() => onClickEditTask(record)}>
              <EditOutlined />
            </Button>
            <Button
              color="danger"
              variant="outlined"
              onClick={() => handleDeleteTask(record)}
            >
              <DeleteOutlined />
            </Button>
          </Flex>
        );
      },
    },
  ];

  const onClickDoneTask = (record: TTask) => {
    record.isDone = !record.isDone;
    console.log("🚀 ~ onClickDoneTask ~ record.isDone:", record.isDone);
    setDoneTask(record);
    form.setFieldsValue(record);
  };

  const onClickEditTask = (record: TTask) => {
    setIsEditTask(true);
    console.log("onClickEditTask");
  };

  const handleDeleteTask = (record: TTask) => {
    const newTasksList = tasks.filter((_student) => _student.id !== record.id);
    setTasks(newTasksList);
  };

  const onFinish = (values: Omit<TTask, "id">) => {
    if (doneTask) {
      const _tasks = [...tasks];
      const indexEdit = _tasks.findIndex((task) => task.id === doneTask.id);
      if (indexEdit > -1) {
        _tasks[indexEdit] = {
          ...values,
          id: doneTask.id,
        };

        setTasks(_tasks);
      }
      form.resetFields();
      setIsEditTask(false);
      setDoneTask(null);
      return;
    }

    const newTasks: TTask = {
      ...values,
      id: uuidv4(),
    };
    setTasks([...tasks, newTasks]);
    form.resetFields();
    setIsEditTask(false);
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list-wrapper">
        <div className="todo-list-header">
          <h2 className="todo-list-header__title">Todo list application</h2>

          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item<TTask>
              name="taskName"
              rules={[{ required: true, message: "Please input task!" }]}
            >
              <div className="display-flex">
                <Input />
                <Button htmlType="submit" type="primary" shape="circle">
                  <PlusCircleOutlined style={{ fontSize: "30px" }} />
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>

        <Table<TTask> columns={columns} dataSource={tasks} rowKey={"id"} />
      </div>
    </div>
  );
}

export default ToDoList;
