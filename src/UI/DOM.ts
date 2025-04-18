import Player from "../classes/player";

export function Round(playerOne: Player, playerTwo: Player, playerOneShips: any, playerTwoShips: any) {
    let isFirstPlayer = true;
    const boardOne = document.querySelector(`#${'player-one-board'}`);
    const boardTwo = document.querySelector(`#${'player-two-board'}`);
    
    function createGameBoard(id: string) {
        const board = document.querySelector(`#${id}`) as HTMLElement;
        for (let i = 0; i < 10; i++) {
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



    function placeShips() { 
        
        const CarrierCoord = [1, 5];
        playerOne.board.placeShip(playerOneShips.carrier, CarrierCoord[0], CarrierCoord[1], false)
        playerOne.board.placeShip(playerOneShips.battleship, 3, 3)
        // playerOne.board.placeShip(playerOneShips.cruiser, 5, 0, false)
        // playerOne.board.placeShip(playerOneShips.submarine, 7, 4)
        // playerOne.board.placeShip(playerOneShips.destroyer, 9, 2)
        
        // playerTwo.board.placeShip(playerTwoShips.carrier, 1, 3)
        // playerTwo.board.placeShip(playerTwoShips.battleship, 3, 3)
        // playerTwo.board.placeShip(playerTwoShips.cruiser, 5, 3)
        playerTwo.board.placeShip(playerTwoShips.submarine, 7, 3)
        playerTwo.board.placeShip(playerTwoShips.destroyer, 9, 3)
    }

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

    function checkStep() {
        if (playerOne.board.allShipsSunk() || playerTwo.board.allShipsSunk()) {
            boardOne?.removeEventListener('click', handleOneClick)
            boardTwo?.removeEventListener('click', handleTwoClick)
            console.log("Game is Over")
            return;
        }

        if (isFirstPlayer) {
            boardOne?.classList.add('shadow')
            boardTwo?.classList.remove('shadow')

        } else if (!isFirstPlayer) {
            boardTwo?.classList.add('shadow')
            boardOne?.classList.remove('shadow')
        }
        
    }

    createGameBoard('player-one-board');
    createGameBoard('player-two-board');
    placeShips()
    drawShips()
    checkStep()


    function handleOneClick(e: Event) {
        if (isFirstPlayer) return;
        const cell = e.target as HTMLElement
        const col = Number(cell.dataset.col);
        const row = Number(cell.dataset.row);
        cell.classList.add('hit');
        playerOne.board.receiveAttack(row, col)
        isFirstPlayer = !isFirstPlayer
        checkStep()
    }
    function handleTwoClick(e: Event) {
        if (!isFirstPlayer) return; 
        const cell = e.target as HTMLElement
        const col = Number(cell.dataset.col);
        const row = Number(cell.dataset.row);
        cell.classList.add('hit');
        playerTwo.board.receiveAttack(row, col)
        isFirstPlayer = !isFirstPlayer
        checkStep()
    }

    boardOne?.addEventListener('click', handleOneClick)
    boardTwo?.addEventListener('click', handleTwoClick)

}