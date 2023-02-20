import React, {useState} from "react";


const Table = () => {


    const [numbers, setNumbers] = useState([]);
    const [number, setNumber] = useState(0);


    return (
        <div>
            <input
                type="number"
                placeholder="Type your counter..."
                value={number}
                onChange={() => {
                    setNumber(number + 1)
                    setNumbers([...numbers, number])
                }}
            />
            <div>
                <table border={1}>
                    {numbers.map(n => (<tr>
                        {Array.from(
                            {length: n},
                            (value, index) => <td>{index}</td>
                        )}
                    </tr>))}
                </table>
            </div>
        </div>
    )
}

export default Table;