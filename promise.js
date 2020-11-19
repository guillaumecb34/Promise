// function findOne(callback) {
//     callback({
//         error: "Je suis une erreur",
//         data: "Je suis les données",
//     })
// }

// function promiseFindOne() {
//     return new Promise((resolve, reject) => {
//         findOne(({error, data}) => {

//             if (error)
//                 return reject(error)
            
//             resolve(data);
//         })
//     })
// }

// async function controller() {
//     try {
//         const data = await promiseFindOne()
//         console.log("Data:", data)

//     } catch (error) {

//         console.log("Error:", error)
//     }
// }

// controller()

const getData = async () => {
    try {
        const date = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
        const routeQuery = 'SELECT * FROM sr_events WHERE (date > ? OR date = ?) AND private = FALSE ORDER BY date ASC'
        
        const data = await promiseQuery(routeQuery, [date, date])
        
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


function promiseQuery(route, array) {
        return new Promise((resolve, reject) => {
            query(route, array, (res, err) => {
                if (err)
                    return reject(err)
                
                resolve(res);
            })
        })
      }

getData()

// function alterLet(){
//     let test = {}
//     db(test)
//     db2(test)
//     console.log(test)
// } 

// alterLet()

// function db(test){
//     test.one = "One"
// };

// function db2(test){
//     test.two = "Two"
// };


