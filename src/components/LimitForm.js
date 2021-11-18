import React, {useState} from 'react'
import moment from 'moment'


const LimitForm = ({resetLimit}) => {
    const [input, setInput] = useState('')

    const date = moment().format('Do');
    console.log(date)

    const handleSubmit =(e)=> {
        e.preventDefault()
        resetLimit(input)
    }
    return (
        <>
        <h4>Reset credit limit</h4>
        <form onSubmit={handleSubmit}>
            <input 
                type='number'  
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                required
            />
            {date === '1st'? (
                <button type='submit'>Reset</button>
            ) : (
                <>
                <button type='submit' disabled>Reset</button>
                <p style={{color: 'red'}}>Cannot reset until end of month</p>
                </>
            )}
            
        </form>
        </>
    )
}

export default LimitForm
