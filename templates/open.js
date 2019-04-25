window.onload=function(){
    if(document.getElementById("button")){
        document.getElementById("button").addEventListener("click",function(){
            var textBox=document.getElementById("card").value;
            chrome.storage.sync.set({"text":textBox});
            console.log("Yeaaah")
        });
    }

    document.getElementById("openURL").addEventListener("click",function(){
        var link = document.getElementById("link").innerHTML;
        console.log(link)
        window.open(link);
    });
}

chrome.storage.sync.get("text",function(change){
    if(change.text){
        document.getElementById("link").innerText=change.text;
    }
});