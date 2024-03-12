
async function fetchingDataGet(url: string): Promise<any> {
 try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data`);
    }
    const data = await response.json();
    return data;
 } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
 }
}

export default fetchingDataGet;