import { useEffect, useState } from 'react';

function useFetch(urlAPI) {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    useEffect(()=> {    
        fetch(urlAPI)
        .then(response => response.json())
        .then(data => {setItems(data)})
        .catch(error => console.error(error))
        .finally(()=>setLoading(false))
    }, [urlAPI]);

  return (
    {loading, items}
  )
}

export default useFetch