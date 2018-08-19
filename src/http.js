
function buildURLFromParams(url, params){
    var keys = Object.keys(params)

    if(keys.length > 0){
        url += "?"
    }

    for(var i = 0; i < keys.length; i++){
        var name = keys[i]
        var value = params[name]
        url += name + "=" + value + "&"
    }
    
    if(url.indexOf("&", url.length - 1) !== -1){
        url = url.substring(0, url.length - 1)
    }

    return url
}

function buildResponse(xmlhttp){
    var response = {}
    response.data = xmlhttp.response
    response.status = xmlhttp.status
    response.statusText = xmlhttp.statusText
    response.headers = {}
    var headersText = xmlhttp.getAllResponseHeaders()
    var headers = headersText.split('\n')
    for(var i = 0; i < headers.length; i++){
        var headerSplit = headers[i].split(': ')
        if(headerSplit[0] !== ""){
            response.headers[headerSplit[0]] = headerSplit[1]
        }

        // Check for content-type json
        if(headerSplit[0].toLowerCase() === 'content-type'){
            if(headerSplit[1].indexOf('application/json') !== -1){
                // Parse data to object
                response.data = JSON.parse(response.data)
            }
        }
    }

    return response
}

function get(url, options){
    return new Promise(function(resolve, reject){
        var xmlhttp = new XMLHttpRequest()
        xmlhttp.onload = function() {
            if(xmlhttp.status == 200){
                resolve(buildResponse(xmlhttp))
            }
            else{
                reject(buildResponse(xmlhttp))
            }
        }

        xmlhttp.onerror = function(){
            reject(buildResponse(xmlhttp))
        }

        if(options.params){
            url = buildURLFromParams(url, options.params)
        }

        xmlhttp.open("GET", url, true)
        xmlhttp.send()
    })
}

function post(url, params){
    return new Promise(function(resolve, reject){
        var xmlhttp = new XMLHttpRequest()
        xmlhttp.onload = function(){
            if(xmlhttp.status == 200){
                resolve(buildResponse(xmlhttp))
            }
            else{
                reject(buildResponse(xmlhttp))
            }
        }

        xmlhttp.onerror = function(){
            reject(buildResponse(xmlhttp))
        }

        xmlhttp.open("POST", url, true)
        
        xmlhttp.setRequestHeader('Content-Type', 'application/json')

        xmlhttp.send(JSON.stringify(params))
    })
}