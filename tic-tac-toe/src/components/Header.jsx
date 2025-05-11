export default function Header({srcImg,heading}){
  return (
    <header>
    <img src={srcImg}></img>
    <h1>{heading}</h1>
    </header>
  )
}