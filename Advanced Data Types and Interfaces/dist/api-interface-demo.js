const API_URL = 'https://jsonplaceholder.typicode.com/users';
const getUsers = () => {
    fetch(API_URL, { method: 'GET' })
        .then((response) => {
        return response.json();
    }).then((users) => {
        users.forEach((user) => {
            console.log(`${user.name} -> ${user.company.name}`);
        });
    }).catch(err => console.log(`Error ${err}`));
};
getUsers();
//# sourceMappingURL=api-interface-demo.js.map