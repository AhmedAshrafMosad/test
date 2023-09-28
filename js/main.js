document.addEventListener("DOMContentLoaded",function(){

    document.querySelectorAll('button').forEach(function(x){
        x.onclick=function()
        {
            document.querySelector("#zero").style.color= x.dataset.color;
        }
    })

});


document.addEventListener("DOMContentLoaded",function(){


    document.querySelector(".out_put").onsubmit=function () {

        var value = document.querySelector("#luck").value;
        var result = document.querySelector("ol");

        if(value=="")
        {
            return false;
        }
        else
        {
           

            var list = document.createElement("li");
            list.innerHTML = value;

            result.append(list);

            document.querySelector("#luck").value="";
            return false;
        }
        

        

        
    }
})


    