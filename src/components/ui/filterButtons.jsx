function FilterButtons({ filter, setFilter }) {
  return (
    <div className="btn-group mb-3" role="group">
      <button
        type="button"
        className={
          "btn btn-outline-secondary" + (filter === "all" ? " active" : "")
        }
        onClick={() => setFilter("all")}
      >
        Todo
      </button>
      <button
        type="button"
        className={
          "btn btn-outline-success" + (filter === "income" ? " active" : "")
        }
        onClick={() => setFilter("income")}
      >
        Ingresos
      </button>
      <button
        type="button"
        className={
          "btn btn-outline-danger" + (filter === "expense" ? " active" : "")
        }
        onClick={() => setFilter("expenses")}
      >
        Gastos
      </button>
    </div>
  );
}

export default FilterButtons;
