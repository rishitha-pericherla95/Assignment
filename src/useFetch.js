import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    

    setTimeout(() => {
      fetch(url,{mode: 'no-cors',
      method: "post",
      headers: {
           "Content-Type": "application/json",
           "Access-Control-Allow-Origin" : "*"
      }
     })
      .then(res => {
        // if (!res.ok) { // error coming back from server
        //   throw Error('errorr');
        // } 
        // const json_data =res.json();
        // console.log("res",json_data);
        // console.log(res)
        return JSON.parse(res);
      })
      .then(data => {
          console.log(data);
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
       
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
    
      })
    }, 1000);


   
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;