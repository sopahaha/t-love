import '../styles/components/CharacterImg.sass'

const CharacterImg = ({img}) => {


  
  return (
    <div className='img-container'>
        <img src={"./"+img} alt="" className={!img ? "hide":""} />
    </div>
  )
}

export default CharacterImg