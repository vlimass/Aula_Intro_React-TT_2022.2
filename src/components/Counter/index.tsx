import { useState } from 'react';
import './style.css';

export function Counter() {
    const [value, setValue] = useState(1);

    function incrementValue() {
        setValue(value + 1);  // Imutabilidade por trás dos panos
    }

    return (
        <div className="post">
            <button onClick={() => setValue(value + 1)}>{value}</button>
        </div>
    )
}