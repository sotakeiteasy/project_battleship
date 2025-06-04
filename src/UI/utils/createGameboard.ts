export function createGameBoard(id: string) {
  const board = document.querySelector(`#${id}`) as HTMLElement;
  const table = document.createElement("table");
  table.className = "board-table";

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("td");
      cell.className = "cell";
      cell.dataset.row = i.toString();
      cell.dataset.col = j.toString();
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  board.appendChild(table);
}
