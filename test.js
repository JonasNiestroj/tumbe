get('https://jsonplaceholder.typicode.co2m/todos/1', {}).then(function(response){
    console.log(response)
}).catch(function(error){
    console.log(error)
})