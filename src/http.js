
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

function get(url, options){
    return new Promise(function(resolve, reject){
        var xmlhttp = new XMLHttpRequest()
        xmlhttp.onload = function() {
            if(xmlhttp.status == 200){
                resolve(xmlhttp.response)
            }
            else{
                reject(xmlhttp.response)
            }
        }

        xmlhttp.onerror = function(){
            reject(xmlhttp.response)
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
                resolve(xmlhttp.response)
            }
            else{
                reject(xmlhttp.response)
            }
        }

        xmlhttp.onerror = function(){
            reject(xmlhttp.response)
        }

        xmlhttp.open("POST", url, true)
        
        xmlhttp.setRequestHeader('Content-Type', 'application/json')

        xmlhttp.send(JSON.stringify(params))
    })
}