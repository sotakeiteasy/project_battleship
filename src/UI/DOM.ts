import Player from "../classes/player";

export function Round(playerOne: Player, playerTwo: Player, playerOneShips: any, playerTwoShips: any) {
    let isFirstPlayer = true;
    const boardOne = document.querySelector(`#${'player-one-board'}`);
    const boardTwo = document.querySelector(`#${'player-two-board'}`);
    const newRoundBtn = document.querySelector(".newRoundBtn")

    if (boardOne) boardOne.textContent = "";
    if (boardTwo) boardTwo.textContent = "";


    function createGameBoard(id: string) {
        const board = document.querySelector(`#${id}`) as HTMLElement;
        
        // Создаем таблицу вместо grid для более предсказуемых границ
        const table = document.createElement('table');
        table.className = 'board-table';
        
        for (let i = 0; i < 10; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('td');
                cell.className = 'cell';
                cell.dataset.row = i.toString();
                cell.dataset.col = j.toString();
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        
        board.appendChild(table);
    }

    function placeShips(player: Player, playerShips: { [key: string]: any }) {
        const shipsArr = [] = Object.values(playerShips)
        for (let i = 0; i < 5; i++) {
            let isPlace: any = false

            while (!isPlace) {
                console.log(playerShips[1])
                const randomCol = Math.floor(Math.random() * 10);
                const randomRow = Math.floor(Math.random() * 10);
                const vertical = Math.random() < 0.5
                const Coord = [randomCol, randomRow];
                isPlace = player.board.placeShip(shipsArr[i], Coord[0], Coord[1], vertical)
            }
        }
        
        // playerTwo.board.placeShip(playerTwoShips.carrier, 1, 3)
        // playerTwo.board.placeShip(playerTwoShips.battleship, 3, 3)
        // playerTwo.board.placeShip(playerTwoShips.cruiser, 5, 3)
        // playerTwo.board.placeShip(playerTwoShips.submarine, 7, 3)
        // playerTwo.board.placeShip(playerTwoShips.destroyer, 9, 3)
    }
    placeShips(playerOne, playerOneShips)
    placeShips(playerTwo, playerTwoShips)


    function drawShips() {
        const PlayerOneCoords = playerOne.board.getShipCoord()
        PlayerOneCoords.forEach(([x, y]) => {
            const cell = boardOne?.querySelector(`[data-row="${x}"][data-col="${y}"]`);
            cell?.classList.add('ship')
        })

        const PlayerTwoCoords = playerTwo.board.getShipCoord()
        PlayerTwoCoords.forEach(([x, y]) => {
            const cell = boardTwo?.querySelector(`[data-row="${x}"][data-col="${y}"]`);
            cell?.classList.add('ship')
        })
    }

    function computerAttack(Row: number | null = null, Col: number | null = null) {
        changeDisplay("Computer is attacking...")
        setTimeout(() => {
            if (Row === null || Col === null) {
                Row = Math.floor(Math.random() * 10);
                Col = Math.floor(Math.random() * 10);
            } else {
                const directions = [
                    {dx: -1, dy: 0}, 
                    {dx: 1, dy: 0},  
                    {dx: 0, dy: -1}, 
                    {dx: 0, dy: 1}   
                ];
                const randomDirection = directions[Math.floor(Math.random() * directions.length)];
                Row = Row + randomDirection.dx
                Col = Col + randomDirection.dy

                if (Row < 0 || Row > 9 || Col < 0 || Col > 9) {
                    return computerAttack(Row, Col)
                }
            }

            const cell = boardOne?.querySelector(`[data-row="${Row}"][data-col="${Col}"]`);
            if (cell?.classList.contains("hit")) {
                computerAttack(Row, Col)
            } else {
                cell?.classList.add("hit");
                const hitShip = playerOne.board.receiveAttack(Row, Col)
                if (hitShip) {
                    checkStep()
                    return computerAttack(Row, Col)
                } else {
                    isFirstPlayer = !isFirstPlayer;
                    checkStep()
                    changeDisplay("Your turn")
                }
            }
        }, 500)
    }

    function changeDisplay(text: string) {
        const display = document.querySelector('.display') as HTMLElement;
        display.textContent = text;
    }

    function checkStep() {
        if (isFirstPlayer) { 
            const markedCells = playerTwo.board.markSunkenShips()
            markedCells.forEach(([x, y]) => {
                const cell = boardTwo?.querySelector(`[data-row="${x}"][data-col="${y}"]`);
                cell?.classList.add('hit');
            });
        } else if (!isFirstPlayer) {
            const markedCells = playerOne.board.markSunkenShips()
            markedCells.forEach(([x, y]) => {
                const cell = boardOne?.querySelector(`[data-row="${x}"][data-col="${y}"]`);
                cell?.classList.add('hit');
            });
        }  
    
        if (playerOne.board.allShipsSunk()) {
            boardTwo?.removeEventListener('click', handleTwoClick)
            changeDisplay("Game Over. You lose")
            return;
        } else if (playerTwo.board.allShipsSunk()) {
            boardTwo?.removeEventListener('click', handleTwoClick)
            changeDisplay("Game Over. You win")
            return;
        }

        if (isFirstPlayer) {
            // boardOne?.classList.add('shadow')
            boardTwo?.classList.remove('shadow')
        } else if (!isFirstPlayer) {
            boardTwo?.classList.add('shadow')
            // boardOne?.classList.remove('shadow')
            computerAttack()
        }  
    }

    createGameBoard('player-one-board');
    createGameBoard('player-two-board');
    drawShips()
    checkStep()

    // function handleOneClick(e: Event) {
    //     if (isFirstPlayer) return;
    //     const cell = e.target as HTMLElement
    //     const col = Number(cell.dataset.col);
    //     const row = Number(cell.dataset.row);
    //     cell.classList.add('hit');
    //     playerOne.board.receiveAttack(row, col)
    //     isFirstPlayer = !isFirstPlayer
    //     checkStep()
    // }

    function handleTwoClick(e: Event) {
        if(newRoundBtn) newRoundBtn.textContent = "New Round"

        if (!isFirstPlayer) return; 
        const cell = e.target as HTMLElement
        if(cell.dataset.row === undefined || cell.dataset.col == undefined) return
        if (cell?.classList.contains("hit")) {
            return
        } 
        const col = Number(cell.dataset.col);
        const row = Number(cell.dataset.row);
        cell.classList.add('hit');
        const hitShip = playerTwo.board.receiveAttack(row, col)
        if (!hitShip) {
            isFirstPlayer = !isFirstPlayer;
            checkStep()
        } else {
            checkStep()
        }
    }

    // boardOne?.addEventListener('click', handleOneClick)
    boardTwo?.addEventListener('click', handleTwoClick)
}