fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        const resultDiv = document.getElementById('result')
        resultDiv.innertext = json.userId})





