import Image from 'next/image';
import logo from '../../public/spooter-logo.svg';
import profilePic from '../../public/profile-icon.svg';

export default function Estadisticas() {
  return (
    <div>
      <header className='flex justify-between items-center p-6 mt-29'>
        <Image src={logo} alt='Logo' width={107} height={31} />
        <div className='flex items-center'>
          <Image
            src={profilePic}
            alt='Profile Picture'
            className='rounded-full'
            width={40}
            height={40}
          />
        </div>
      </header>
    </div>
  );
}
