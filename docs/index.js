const nav = ['Arrays', 'Objects', 'Strings', 'Functions', 'Promises']

nav.map((element) => {
    const newItem = document.createElement('li');

    document.getElementById('nav-bar').appendChild(newItem)

    newItem.innerText = element

})