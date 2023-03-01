 

//  function add2(){
//     const aElement = document.getElementById('A')
//     const bElement = document.getElementById('B')
//     const cElement = document.getElementById('C')

//     const aValue = parseInt(aElement.value)
//     const bValue = parseInt(bElement.value)
//     const cValue = aValue + bValue

//     cElement.value = cValue

//  }
 
 function helloBtn(){
    alert('Hello World')
 }

 const $aElement = $("#A")
 const $bElement = $("#B")
 const $cElement = $("#C")

// jQuery implementation

 function add3(){

    const a = parseInt($aElement.val())
    const b = parseInt($bElement.val())
    $cElement.val(a+b)

 }

 function sub3(){
    
 }

 const  $addBtn = $("#addBtn")
 const  $subBtn = $("#subBtn")
 const  $mulBtn = $("#mulBtn")
 const  $divBtn = $("#divBtn")


 $addBtn.click(add3)
 $subBtn.click(sub3)

