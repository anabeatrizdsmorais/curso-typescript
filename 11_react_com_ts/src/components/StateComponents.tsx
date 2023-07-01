import React, {useState, ChangeEvent} from 'react'

const StateComponents = () => {

    const [text, setText] = useState<string | null>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        let value = event.target.value;
        setText(value)
    }

    return (
        <div>
            <p>
                O texto é {text}
            </p> 
            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default StateComponents