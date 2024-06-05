import React, { useState } from 'react';
import './Calcu.css';

const Calculator = () =>{
    const [input, setInput]  = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleBackspace = () => {
        setInput(input.slice(0,-1));
    };

    const handleCalculate = () => {
        try {
            setResult(eval(input).toString());
        }catch (error){
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <h2>My Calculator</h2>
                <input type="text" value={input} readOnly />
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
            <div>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('+')}>+</button>
            </div>
            <div>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('-')}>-</button>
            </div>
            <div>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>
            </div>
            
            <div>
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={handleBackspace}>←</button>

                
            </div>
            </div>
        </div>
    );
};

export default Calculator;

