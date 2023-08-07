import '../styles/components/BackgroundImg.sass'


const BackgroundImg = ({img}) => {
  return (
    <>
        <img className={!img ? "hide ":"background-img"} src={"./" + img} alt="" />
    </>
  )
}

export default BackgroundImg