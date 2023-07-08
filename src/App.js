
function Header(){
  return(
    <div id='container'>
      <h1> Background Colour Changer Using React </h1>
      <input className="colorChanger" type='color' onChange={(e)=>{
          document.body.style.background = e.target.value;
      }}/>
    </div>
  )
}

export default Header;