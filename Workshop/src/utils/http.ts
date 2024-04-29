export const fetchUtil = <T>(url: string, httpConfig?: RequestInit) => {
    //fetch api
    return fetch(url, httpConfig)
        .then((response) => response.json())
        .then((data: T) => data)
        .catch((error) => {
            console.error(`Error: ${error}`);
        });
};