import { useState, useEffect } from 'react';



export const useFetchDataPost = (url:string, body:any) => {
 const [data, setData] = useState(null);
 const [isLoading, setIsLoading] = useState<boolean>(true);
 const [error, setError] = useState<any>(null);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
            method: 'POST', // Especificamos que queremos usar el método POST
            headers: {
                'Content-Type': 'application/json', // Indicamos que el cuerpo de la solicitud es JSON
            },
            body: JSON.stringify(body), // Convertimos el objeto body a una cadena JSON
        });
        if (!response.ok) throw new Error('Error fetching data');
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [url]); // Añadimos body a las dependencias para que el efecto se ejecute de nuevo si cambia

 return { data, isLoading, error };
};