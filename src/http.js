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

        xmlhttp.open("GET", url, true)
        xmlhttp.send()
    })
}