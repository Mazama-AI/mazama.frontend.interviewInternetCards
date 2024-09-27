export async function getDataFromAPI() {
    try {
        const headers ={
            Authorization: 'test',
            'x-api-key': process.env.REACT_APP_API_KEY
        }
        console.log("Header Object:", headers)
        const response = await fetch('https://b7kdnxa5cl.execute-api.us-east-1.amazonaws.com/prod/get-all', {
            headers,
            method: 'POST'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}