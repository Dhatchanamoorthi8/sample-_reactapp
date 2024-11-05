import { Carousel } from 'flowbite-react'

function Home () {
  return (
    <div className='h-svh'>
      <Carousel slide={true} leftControl={<></>} rightControl={<></>}>
        <img src={require('../assets/Img/(3)[1].png')} alt='...' />
        <img src={require('../assets/Img/(2)[1].png')} alt='...' />
        <img src={require('../assets/Img/1.jpg')} alt='...' />
        <img src={require('../assets/Img/10.jpg')} alt='...' />
        <img src={require('../assets/Img/11.jpg')} alt='...' />
      </Carousel>


    </div>
  )
}

export default Home
