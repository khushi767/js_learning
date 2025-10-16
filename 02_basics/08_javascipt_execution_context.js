/*

javascript ke andr code execute kaise hota hai
call stack kaise execute hota hai, memory ke andr kaise fxn jayege aur execute honge.

JAVASCRIPT EXECUTION CONTEXT--JO FILE BNAI USE JAVASCRIPT RUN KAISE KREGI
JAVASCRIPT DO FACE ME RUN KRTI HAI

SBSE PEHLE 1.) GLOBAL EXECUTION CONNTEXT BNEGA , Usko THIS ME REFER KRDIYA HOTA,--YE SB SINGLE THREAD PE EXECUTE HOTA

browser ka global execution window alg hota hai, this me window object refer hota
2.) FUNCTION EXECUTION CONTEXT
3.) EVAL EXECUTION CONTEXT IN MOONGOSE TYPE OF GLOBAL EXECUTION CONTEXT

GLOBAL EXECUTION->THIS
Do phases me run hota hai
1. MEMORY CREATION PHASE: VARIABLES KE LIYE MEMORY ALLOCATE HOTI, VAL1=UNDdefined, val2-undefined, addnum-defination, result1,result-2==undefined starting cycle me sb udefined hoga


let val1=10
let val1=5
function addNum(num1,nu2){
let total=num1+num2
return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)

step 1:global execution, this ke andr allocate hoga, step 2: memory phase sare variables ke andr undefined rkha jayega, function ke andr defination jayegi, result1,result2 me bhi undefined jaayega ==>first cycle of memory creation is done
//execution phase
val1 me 10 jayega ,val2 me 5 jayega, fxn me abhi kuj ni hoga, result1 ke add number me wo apna alg execution context bnayega jisme new variable env+execution thread bnega for this yha bhi frse memory phase aur execution phase hoga
memory phase me val1 undefined, val2, total undefined execution context me ab num1 10,num2 5 total 15 total return hojayega global executional context
aur ye delete ho jayega apna kaam krke

2. EXECUTION PHASE:variables me values jati, frr jb fxn aayega tb ik new variable evironment+exeution thread bnega ye jitni baar fxn aayega utni baar bnega
frr sb execute hoga, aur parent ko value return ho jayegi/global executional context
aur global executional context frr delete ho jayega
LIFO context chlta for a stack


javascript ka saara execution thread pe hota hai




Call Stack: LIFO (last in first out)
global
one()
two()
*/