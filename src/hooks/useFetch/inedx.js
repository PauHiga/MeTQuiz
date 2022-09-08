import { useEffect, useState } from 'react';

function useFetch(urlAPI) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(()=> {    
        fetch(urlAPI)
        .then(response => response.json())
        .then(data => {setData(data)})
        .catch(error => console.error(error))
        .finally(setLoading(false))
    }, [urlAPI]);

  return (
    {loading, data}
  )
}

export default useFetch