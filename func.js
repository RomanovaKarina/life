import { useEffect, useState } from 'react'
import './App.css'

const LyfeCycle = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        const sendPostRequest = async () => {
            try {
                const response = await fetch("https://todo-redev.herokuapp.com/api-docs/", {
                    method: "GET",
                    headers: {
                        accept: 'application/json',
                    }
                })
                const data = await response;
                console.log("data: ", data);
            } catch (error) {
                console.log("error: ", error);
            }
        }
        sendPostRequest()
        console.log('element mount')
    }, [])

    useEffect(() => {
        if (count % 2 !== 0) {
            console.log('update')
            console.log(count)
        }
    }, [count])

    useEffect(() => () => { console.log('delete') })

    return <div>
        <button onClick={handleClick}>click</button>
    </div>
}
export default LyfeCycle
