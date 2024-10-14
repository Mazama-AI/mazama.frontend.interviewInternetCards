// const fetch = require('node-fetch');

async function getCards() {
    const apiUrl = 'https://b7kdnxa5cl.execute-api.us-east-1.amazonaws.com/prod/get-all';

    const myHeaders = new Headers();
    myHeaders.append("x-api-key", process.env.REACT_APP_API_KEY);
    myHeaders.append("Authorization", "postman");

    try {
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow"
          };
        const response = await fetch(apiUrl, requestOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data?.Items;
    } catch (error) {
        console.error('Error fetching cards:', error);
    }
}

export default getCards;