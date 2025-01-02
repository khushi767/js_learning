//Immediately Invoked Function Expressions (IIFE)
(function chai(){
    console.log(`DB Connected`);
})();


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


