import React from "react";
import styled from "styled-components";
import { useState } from "react";

function Form() {
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: ''
    })

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    return (
        <FormStyled>
            <div className="input-control">
                <input 
                    type="text"
                    value={title}
                    name={'title'}
                    placeholder="Salary Title"
                    onChange={handleInput('title')}
                />
            </div>
        </FormStyled>
    )
}

const FormStyled = styled.form`

`;

export default Form