import { useState } from "react";

const TodoFrom = ({addTodo}
) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category);
    addTodo (value, category);
    setCategory("");
    setValue("");

    console.log(value, category);
  };
  return (
    <div className="todo-form">
      <h2> Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite a tarefa"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select 
        value={category}
        onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione a categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoFrom;
