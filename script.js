function add_item(){
    if(document.getElementById("text_add").value!==""){
        const list=document.getElementById("list")
        const new_item=document.getElementById("text_add").value;
        const item=document.createElement("li");
        
        const text_item=document.createElement("span");
        text_item.innerText=new_item;
        
        item.append(text_item);

        const close=document.createElement("i");
        close.innerHTML="<i class=material-icons md-18>close</i>"
        const done=document.createElement("i");
        done.innerHTML="<i class=material-icons md-18>done</i>"
        close.setAttribute("class","btn btn_close");
        done.setAttribute("class","btn btn_done");
        close.addEventListener("click",action_close);
        done.addEventListener("click",action_done);
        
        item.append(close);
        item.append(done);
        
        list.appendChild(item);
    }
}
function action_close(event){
    if(confirm("Are you sure to delete this item?")==true){
    event.target.parentNode.parentNode.remove();
    }
}
function action_done(event){
    console.log(event.target.parentNode.parentNode)
    event.target.parentNode.parentNode.style.textDecoration= "line-through 3px black"
}
function search_item(){
    const txt_search=document.getElementById("text_search");
    txt_search.addEventListener("input",(event)=>{
        const val=txt_search.value;
        let arr=[];
        arr=document.getElementById("list").getElementsByTagName("span");
        
        if(val!=null){
            for(var i=0;i<arr.length;i++){
                console.log(`this is value of array ${i} and ${arr[i].parentElement}`);
                if(arr[i].innerText.search(val)>=0){
                    arr[i].parentElement.style.display="inline-block"
                }
                else{
                    arr[i].parentElement.style.display="none";
                }
            }
        }
        else{
            for(var i=0;i<arr.length;i++){
                arr[i].parentElement.style.display="inline-block";
            }
        }
    })
}
search_item()