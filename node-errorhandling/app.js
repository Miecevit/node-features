// try{

//     const result = some_function();
    
// }catch{
//     console.error('Error:', error.message);
// }

// if(err) throw err;

//-------------------------

// class myError extends Error{

//     constructor(statusCode, message){

//         super(message);
//         this.statusCode = statusCode;

//     }

// }

// function someFunction(){

//     //Fonksiyonun yaptığı işlerin kodu.....

//     throw new myError(500, 'Bir seyler ters gitti');
// }

// try{
//     someFunction();
// }catch (error){
//     if(error instanceof myError){
//         console.error('Ozel Hata oldu:', error.message, error.statusCode);
//     }else{
//         console.error('Hata oldu:', error.message);
//     }
// }
