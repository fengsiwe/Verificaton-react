import React,{ useState,useEffect } from 'react';

 const Clock=()=> {
    const[time,setTime] = useState(new Date());
     // setInterval(() => setTime(new Date()),1000)
     useEffect(() => {
         setInterval(() => setTime(new Date()),1000);
     }, [])

    return(
        <div>
            <p>Current time is {time.toLocaleTimeString()}</p>
        </div>
    )
}
export default Clock;
