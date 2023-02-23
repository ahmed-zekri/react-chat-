import React, {useEffect, useState} from "react";
import Fade from 'react-reveal/Fade';
import {Button} from "react-bootstrap";


const Table = () => {


    const [markers, setMarkers] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [turn, setTurn] = useState(0);
    useEffect(() => {
        checkWin(markers.filter(item => item.value === "O"))
        checkWin(markers.filter(item => item.value === "X"))


    }, [markers]);

    const checkWin = (array) => {

        array.forEach((_, index) => {
                if (index < array.length - 2) {
                    let sum = 0
                    for (let i = 0; i < 3; i++)
                        sum += array[index + i].magicSquare
                    if (sum === 15) {
                        setGameOver(true)
                    }
                }
            }
        )
    }

    const magicNumberValue = (index) => {
        // eslint-disable-next-line default-case
        switch (index) {
            case 0:
                return 2
            case 1:
                return 7
            case 2:
                return 6
            case 3:
                return 9
            case 4:
                return 5
            case 5:
                return 1
            case 6:
                return 4
            case 7:
                return 3
            case 8:
                return 8
        }
    };

    function updateCell(index) {
        if (!markers.find(item => item.index === index))
            setMarkers([...markers, {
                index: index,
                magicSquare: magicNumberValue(index),
                value: turn === 0 ? "O" : "X"
            }])
        setTurn(turn === 0 ? 1 : 0)

    }

    if (!gameOver)
        return (
            <div className="row">
                <div className="col-sm"/>
                <div className="col-sm">
                    <table className="table-bordered mt-5">
                        {Array.from(
                            {length: 3},
                            (_, row) => <tr key={row} className="tic-row">{Array.from(
                                {length: 3},
                                (_, column) => <td key={column} className="tic-box p-4"
                                                   onClick={() => updateCell(row * 3 + column)}>{markers.find(item => row * 3 + column === item.index) ? markers.find(item => row * 3 + column === item.index).value : column + 1 + 3 * row}</td>
                            )}</tr>
                        )}


                    </table>
                </div>
                <div className="col-sm"/>
            </div>
        )
    else return <Fade Left>
        <div className="row">
            <h4 className="text-center mt-5">{"Player " + (turn === 1 ? "1" : "2") + " Won"}</h4>
        </div>
        <div className="row">
            <div className="col-md-6"/>
            <div className="col">
                <input type="button" className="btn-primary" onClick={() => {
                    setGameOver(false)
                    setMarkers([])
                }} value="Retry"/>
            </div>
            <div className="col"/>
        </div>
    </Fade>
}

export default Table;