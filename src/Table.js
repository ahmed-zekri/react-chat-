import React, {useEffect, useState} from "react";


const Table = () => {


    const [markers, setMarkers] = useState([]);
    const [turn, setTurn] = useState(0);
    useEffect(() => {
        checkWin(0, markers.filter(item => item.value === "O"))
        checkWin(1, markers.filter(item => item.value === "X"))


    }, [markers]);

    const checkWin = (turn, array) => {

        array.forEach((_, index) => {
                if (index < array.length - 2) {
                    let sum = 0
                    for (let i = 0; i < 3; i++)
                        sum += array[index + i].magicSquare
                    if (sum === 15)
                        alert("Player " + (turn === 0 ? "1" : "2") + " Won")
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

    return (
        <div className="row">
            <div className="col-sm"/>
            <div className="col-sm">
                <table className="table-bordered mt-5">
                    {Array.from(
                        {length: 3},
                        (_, row) => <tr key={row} className="d-lg-table-row">{Array.from(
                            {length: 3},
                            (_, column) => <td key={column} className="d-lg-table-cell"
                                               onClick={() => updateCell(row * 3 + column)}>{markers.find(item => row * 3 + column === item.index) ? markers.find(item => row * 3 + column === item.index).value : column + 1 + 3 * row}</td>
                        )}</tr>
                    )}


                </table>
            </div>
        </div>
    )
}

export default Table;