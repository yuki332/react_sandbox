import React from 'react';
import style from './style.scss';
import Board from '../board/Board';

class Game extends React.Component {
    render() {
        return (
            <div className={style.game}>
                {/*<div className={style.game-board}>*/}
                <div>
                    <Board />
                </div>
                <div className={style.info}>
                    <div>{/* status */}</div>
                    <ol>{/* todo */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;