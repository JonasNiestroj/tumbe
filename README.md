# tumbe
HTTP library for the browser

# Features
- Promise based
- HTTP requests from your browser
- Response object

# Examples
### GET
```js
tumble.get('/get?ID=1').then(function(response){
  console.log(response)  
}).catch(function(error){
  console.log(error)  
})
```

```js
tumble.get('/get', { params: { ID: 1 }}).then(function(response){
    console.log(response)
}).catch(function(error){
    console.log(error)
})
```

### POST
```js
tumble.post('/post', { ID: 1 }).then(function(response){
    console.log(response)
}).catch(function(error){
    console.log(error)
})
```

# Response object
```json
{
    // Response data
    "data": {},
    // Response headers
    "headers": {},
    // Response status
    "status": 200,
    // Response statustext
    "statusText": "OK"
}
```

# License
MIT