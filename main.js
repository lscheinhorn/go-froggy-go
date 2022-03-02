let imgObj = null;
            
function init() {
  imgObj = document.getElementById('froggy');
  imgObj.style.position= 'relative'; 
  imgObj.style.left = '0px'; 
  imgObj.style.top = '0px'; 

}
const moveRight = () => {
  const speed = () => {
    const range = document.getElementById("speed").value
    let arr = range.split('')
    if(arr[0] === "0"){
      arr.shift()
      console.log(arr)
      return parseFloat(arr.join(""))
    }
  }
        
  const distance = speed()
  console.log(distance)
  const hop = () => {
    imgObj.style.left = parseFloat(imgObj.style.left) + distance + '%'
  } 
  
  const smoothHop = (frames, time) => {
    frames--
    if(frames){
      setTimeout(() => {
        hop()
        smoothHop(frames, time)
      }, time)
    }
  }
  smoothHop(75, 4)
}

function startOver(){
  imgObj.style.left = '0px';
}

window.onload = init;
