import '../styles/components/CharacterImg.sass'

const CharacterImg = ({img}) => {


  
  return (
    <div className='img-container'>
        <img src={"/src/imgs/"+img} alt="" className={!img ? "hide":""} />
    </div>
  )
}

export default CharacterImg