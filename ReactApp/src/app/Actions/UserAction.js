//to handle user actions and update the values

export function setAge(number){
    return{
        type:"SET_AGE",
        payload:number
    }
}

export function setName(name){
    return {
            type:"SET_NAME",
            payload:name
        }
    // return{
    //     type : "SET_NAME",
    //     payload: new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(name);
    //         },3000)
    //     })        
    // }; 
    return{
        type : "SET_NAME",
        payload: {
                promise: new Promise((resolve, reject) => { 
                    fetch("http://localhost:9090/api/createstudent", {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        }
                        ,body: JSON.stringify({ Name: name, Pass: "JerrysPass"})
                    }).then(                
                        response => response.json(),
                        error => console.log('An error occurred.', error)
                    ).then(json => {
                        // want to updatePath for the route here:
                        //dispatch(updatePath('/'));
                        json ?
                            resolve(json[0]["Name"]) : "Please run api";
                    })
                    .catch(error => {
                        reject(error);
                        //dispatch(error); -- promise Issue                        
                    })
                })
            }       
    }; 
}