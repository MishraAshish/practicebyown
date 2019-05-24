function makeAjax(url, method, data, callback, errorCallBack){
    $.ajax({
      url:url,//path to api
      type:method,   
      contentType:"application/json",
      data :JSON.stringify(data),         
        success:function(data){
            callback(data)
        },
        error:function(data){
            errorCallBack(data);
        }        
    }); 
}

function makeAClick(selector, callback){
    selector.click(callback);
}

module.exports  = makeAjax;