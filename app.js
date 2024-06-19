// const allBox = document.getElementsByClassName("box-1");

// for(let i=0; i<allBox.length; i++){
//     const ele = allBox[i];
//     ele.style.backgroundColor = "green";
//     if(ele.innerText == "box-5"){
//         ele.style.backgroundColor = "red";
//     }
// }
// const  allTag  = document.getElementsByTagName("div");

// for (let i = 0; i < allTag.length; i++) {
//   allTag[i].style.backgroundColor = "red";
// } 



document.getElementById("handleButton").addEventListener("click", (event)=>{
    const inputvalue = document.getElementById("text-box").value; 
    console.log(inputvalue);

    const comment = document.getElementById("comment-container");
    

    const p = document.createElement("p");
    p.classList.add("child");
    p.innerText = inputvalue;

    comment.appendChild(p); 

    document.getElementById("text-box").value = "" ; 

    const  allcomments = document.getElementsByClassName("child");


    for(const ele of allcomments){
        ele.addEventListener("click", (e) =>{
            e.target.parentNode.removeChild(ele);
        })
    }
   
}) 



fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data =>{
    console.log(data);
    displayData(data);
})
.catch((err)=>{
    console.log(err);
})


const displayData = (userData)=>{
    const container = document.getElementById("userData-container");

    userData.forEach(user => {
        console.log(user);
        const div = document.createElement("div");

        div.classList.add("user");

        div.innerHTML = `
        <h4> Title</h4>
        <p>Description</p>
        <button>Details</button>
        `;

        container.appendChild(div);

    });
}
// const handleclick = (event) =>{
//     console.log("Hello Boxxxx");
// }