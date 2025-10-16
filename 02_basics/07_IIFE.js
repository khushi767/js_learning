function chai(){
    console.log(`Db Connected`);
}()//aise fxn likhne me problem nhi tha ,but global scope se cheezein pollute ho skti local scope me use prevent krne ke liye hm iifee use krte
//
//Immediately Invoked Function Expressions (IIFE)
//iffe
(function chai(){
    console.log(`DB Connected`);
})();

//()- function defination,()-function execution

//aise fxn likhne me problem nhi tha ,but global scope se cheezein pollute ho skti local scope me use prevent krne ke liye hm iifee use krte
//

function chai(){
    console.log(`db connected`);
}
chai()

//()aise ik parenthesis lgado to automatically wo ik block bn jata aur uske andr bhi kaam kiya ja skta to bs pure fxn ko ik parenthesis me daaldo

//-----ab hm fxn ko arrow fxn se likh skte hai aise
(()=>{
    console.log(`db connected`);
})();// pr aise to error aagya to kaise likhege,kuj ni sbke peechle ; semicolon lgana nhi to error aayega

/* this is how u execute two iffe if u dont give semicolon then it will not be executed and give error
//unnamed iffe
(function chai()){
    console.log(`DB Connected`);
})();
//unnamed iffee
//named iffe
((name)=>{
    console.log(`DB connected two ${name}`);
})('khushi')

*/