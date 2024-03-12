import SpotifyIco from '@/public/SpotifyIco.svg'
import SpotifyImg1 from '@/public/spotify(1).png'
import SpotifyImg2 from '@/public/spotify(2).png'
import SpotifyImg3 from '@/public/spotify(3).png'
import SpotifyImg4 from '@/public/spotify(4).png'
import Image from 'next/image'

const Spotify = () => {
  return (
    <div className='mb-[4rem] w11/12 bg-gray-800 p-4 rounded-xl'>
        <div className='flex gap-3'>
            <Image src={SpotifyIco} alt="spotify" />
            <p className='text-[#1ED760]'>Abrir aplicación</p>
        </div>
        <div className='flex justify-between mt-4'>
            <Image src={SpotifyImg1} alt="spotify" className='w-[70px]'/>
            <Image src={SpotifyImg2} alt="spotify" className='w-[70px]'/>
            <Image src={SpotifyImg3} alt="spotify" className='w-[70px]'/>
            <Image src={SpotifyImg4} alt="spotify" className='w-[70px]'/>
        </div>
    </div>
  )
}

export default Spotify