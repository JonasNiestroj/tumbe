get('/api/test', {params: {ID: 1, TEST: 2}}).then(function(response){
    console.log(response)
}).catch(function(error){
    console.log("ERROR GOT ", error)
})