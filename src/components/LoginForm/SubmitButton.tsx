import React from "react";

import Button from "@mui/material/Button";

import useLoginForm from "@/hooks/useLoginForm";
import useTodoListContext from "@/hooks/useTodoListContext";

const SubmitButton: React.FC = () => {
  const [{ id, password }] = useLoginForm();
  const { fetchTodoList } = useTodoListContext();

  const handleSubmit = () => fetchTodoList(id, password);

  return (
    <Button
      disabled={!id || !password}
      variant="contained"
      onClick={handleSubmit}
      sx={{ marginTop: "10px" }}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
