let chart=[]
async function getData() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data)
      const div=document.querySelector(".container")
     data.forEach((element)=>{
      const img= document.createElement("img")
      const title=document.createElement("h2")
      const p= document.createElement("p")
      let cardcon=document.createElement("div")
      cardcon.classList.add("cardcon")
      let buyNow=document.createElement("img")
      buyNow.classList.add("buyNow")
      buyNow.src="OIP.jpg"
      cardcon.appendChild(buyNow)
      const btn=document.createElement("button")
      btn.classList.add("btn")
      img.src=element.image;
      img.classList.add("img")
      title.innerText=element.title;
      p.textContent= `  $: ${element.price} `;
      btn.textContent="Add To Chart"
      btn.addEventListener("click",()=>{
        
        chart.push(element.title, element.price)
        console.log(chart)
  
       let ul=document.querySelector(".carrello")
       
        let li=document.createElement("li")
        li.textContent=`${element.title} - $${element.price}`
        ul.appendChild(li)
        if (condition) {
          
        }
      } )
      
      cardcon.append(title,img,p,btn)
      div.appendChild(cardcon)
     })

  
      
  
      
  
    } catch (error) {
      console.error(error);
    }
  }
  
  getData();