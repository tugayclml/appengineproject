window.onload(){
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