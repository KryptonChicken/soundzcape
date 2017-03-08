function checkFetchStatus(response) {
    return (response.status >= 200 && response.status < 300) ?
        Promise.resolve(response) :
        Promise.reject(new Error(response.statusText));
}

function jsonData(response) {
    return response.json();
}

const utils = {
    checkFetchStatus,
    jsonData
};

export default utils;
