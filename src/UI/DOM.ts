export default function createGameBoard(id: string) {
    const board = document.querySelector(`#${id}`) as HTMLElement;
    for (let i = 0; i < 1; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = i.toString() ;
            cell.dataset.col = j.toString();
            row.appendChild(cell);
        }
        board.appendChild(row) ;
    }
}
