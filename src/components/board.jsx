import React, {Component} from 'react';
import Box from './board-box';
import calculateWinner from '../utils/isWinner.js';
import {addSymbol} from '../actions';
import {useSelector} from 'react-redux';
import { connect } from "react-redux";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [],
            playerTurn: true,
            moves: 0
        };
    }

    

    componentDidMount() {
        console.log("Board");
    }


    handleClick(i) {
        
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i] || this.moves === 25) {
            return;
        }
        
        let turn;
        squares[i] = this.state.playerTurn ? 'X' : 'O';
        turn = this.state.playerTurn ? 'X' : 'O';

        this.setState({
            squares: squares,
            playerTurn: !this.state.playerTurn,
            
        });
        this.props.addSymbol({squares});
    }


    renderSquare(i) {
        return (
            <Box
                value={this.state.squares[i]}
                
                onClick={() => this.handleClick(i) && this.moves++}
            />
        );
    }

    render() {

        
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else if (this.state.moves === 25) {
            status = 'Tie';
        } else {
            status = 'Next player: ' + (this.state.playerTurn ? 'X' : 'O');

        }


        return (
            <div>
                
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}{this.renderSquare(3)}{this.renderSquare(4)}
                </div>
                <div className="board-row">
                    {this.renderSquare(5)}{this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}{this.renderSquare(9)}
                </div>
                <div className="board-row">
                    {this.renderSquare(10)}{this.renderSquare(11)}{this.renderSquare(12)}{this.renderSquare(13)}{this.renderSquare(14)}
                </div>
                <div className="board-row">
                    {this.renderSquare(15)}{this.renderSquare(16)}{this.renderSquare(17)}{this.renderSquare(18)}{this.renderSquare(19)}
                </div>
                <div className="board-row">
                    {this.renderSquare(20)}{this.renderSquare(21)}{this.renderSquare(22)}{this.renderSquare(23)}{this.renderSquare(24)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    squares: state.squares
  });

export default connect(mapStateToProps, {
    addSymbol
  })(Board);