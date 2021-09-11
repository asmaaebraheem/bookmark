var markName=document.getElementById('markName');
var markUrl=document.getElementById('markUrl');
var bookmarkResult=document.getElementById('bookmarkResult');


if(localStorage.getItem('bookmark')==null){
    var arrBookmark=[];
}else{
    var arrBookmark=JSON.parse(localStorage.getItem('bookmark'));
    // arrBookmark.push(objBookmark);
   
}




function bookmarkSubmit(){

var objBookmark={
    nameMark: markName.value,
    url: markUrl.value
}
arrBookmark.push(objBookmark);

localStorage.setItem('bookmark',JSON.stringify(arrBookmark));
bookmarkShow();

}

// for(var i=0;i<arrBookmark.length;i++){
//     if(arrBookmark[i]==i){
//         console.log('yes');
//     }else{
//         console.log('nooooo');
//     }
// }



function bookmarkShow(){

var result=``;
for(var i=0;i<arrBookmark.length;i++){
   if(arrBookmark[i].url.includes('com')){
    result+=`<div class="container resultColor d-flex  justify-content-between p-4 shadow my-5">
    <h3>${arrBookmark[i].nameMark}</h3>
<div >
   <a href="${arrBookmark[i].url}" class="btn btn-primary" target="-blank">Visit</a>
   <a href="#" class="btn btn-danger" onclick="deleteBookmark(${i})">Delete</a>
   </div>
</div>
`
   }
}


bookmarkResult.innerHTML=result;
}




function deleteBookmark(i){
    var deleteItem=arrBookmark.splice(i,1);
    localStorage.setItem('bookmark',JSON.stringify(arrBookmark));
    bookmarkShow();
}