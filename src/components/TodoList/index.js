import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";
import {todoRemainingSelector} from "../../redux/selectors";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [todoPrioriry, setTodoPrioriry] = useState("Medium");
  const dispatch = useDispatch();
  const inputRef = useRef()
  const todoListShow = useSelector(todoRemainingSelector);
  // console.log(todoListShow);
  // const searchText = useSelector(searchTextSelector)

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: todoPrioriry,
        completed: false,
      })
    );
    setTodoName('')
    setTodoPrioriry('Medium')
    inputRef.current.focus();

  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const hamdlePrioriryChange = (value) => {
    setTodoPrioriry(value);
    inputRef.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddButtonClick();
      inputRef.current.focus();
    }
  }
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoListShow.map((todo) => (
          <Todo key={todo.id} id = {todo.id} name={todo.name} priority={todo.priority} completed = {todo.completed} item = {todo}>
          </Todo>
          ))}

      
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }}>
          <Input
          ref={inputRef}
          value={todoName} onChange={handleInputChange}
            onKeyDown = {handleKeyDown}
          
          ></Input>
          <Select
            defaultValue="Medium"
            value={todoPrioriry}
            onChange={hamdlePrioriryChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
