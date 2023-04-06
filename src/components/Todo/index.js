import { Row, Tag, Checkbox, Button, Input, Select } from "antd";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodoStatus } from "../../redux/actions";

// const priorityColorMapping = {
//   High: "red",
//   Medium: "blue",
//   Low: "gray",
// };

export default function Todo({ id, name, priority, completed, item }) {
  const [checked, setChecked] = useState(completed);
  const [value, setValue] = useState("");
  const inputRef = useRef(true);
  const dispatch = useDispatch();

  const [todoPrioriry, setTodoPrioriry] = useState(priority);

  const toggleCheckbox = () => {
    setChecked(!checked);
    console.log(completed);
    dispatch(toggleTodoStatus(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      dispatch(editTodo({ id, item: value, priority: todoPrioriry }));
    }
  };
  const changeFocus = () => {
    inputRef.current.focus();
  };

  const hamdlePrioriryChange = (e) => {
    console.log(todoPrioriry);
    setTodoPrioriry(e);
    inputRef.current.focus();
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        <Input
          ref={inputRef}
          defaultValue={item.name}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => update(item.id, value, e)}
        ></Input>
      </Checkbox>
      <div style={{display: "flex", alignItems: "center"}}>
          <Select 
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
        <Button style={{ margin: 4 }} onClick={handleDelete}>
          X
        </Button>
        <Button style={{ margin: 4 }} onClick={changeFocus}>
          Edit
        </Button>
      </div>
    </Row>
  );
}
