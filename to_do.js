document.getElementById("btn1").addEventListener('click',function(){
    const title = document.getElementById("enter").value;
    console.log(title);
    if(title.length !== 0)
    { // get ul
        const ele=document.getElementById("todo");
    
        const elem = document.createElement("li");
    
        // create todo as <li>
        const text = document.createElement("li");
        text.style.paddingRight = "10%";
        text.innerHTML = title;
    
        
        // Create a new text node

        // const text = document.createTextNode(title);
        // text.style[paddingRight] = "20%";
        // text.setAttribute("style", "padding-left: 20%");
    
        // Append text node to <li> node
        // elem.appendChild(text);
    
        // Finally, append <li> to <ul> node
        
        const checkBoxx=document.createElement("input");
        checkBoxx.type='checkbox';
        checkBoxx.style.cssText += 'color:red;background-color:yellow;padding-left:20%';
        const textt = document.createTextNode(checkBoxx);
        elem.appendChild(checkBoxx); // adding checkbox first
        elem.appendChild(text); // adding the todo title second
        ele.appendChild(elem); // adding the combined element to the list
        // checkBoxx.style.paddingLeft+="200px";
        // elem.appendChild(checkBoxx);
        document.getElementById("enter").value="";

        checkBoxx.addEventListener('click',function()
        {
            if (elem.style.textDecoration == "line-through") {
                elem.style.textDecoration = "";
            } else {
                elem.style.textDecoration="line-through";
            } 
        })
        checkBoxx.addEventListener('dblclick',function()
        {
            ele.removeChild(elem);
        })
       
    }
    // checkBoxx.addEventListener('click',function()
    // {
    //     elem.style.textDecoration="line-through";
    // })
    // elem.addEventListener('click',function()
    // {
    //     console.log("test");
    //     ele.removeChild(elem);
    // })
   
})

