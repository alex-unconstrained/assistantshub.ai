import { Badge, Navbar, NavbarBrand, NavbarToggle } from 'flowbite-react';
import Image from 'next/image';
import { UserProfile } from '@/components/UserProfile';

export function Header() {
  return (
    <Navbar fluid rounded className={'border-b border-gray-200'}>
      <NavbarBrand href='https://www.unconstrained.co'>
        <Image
          src='/logo.png'
          alt='Assistants Hub Logo'
          width={100}
          height={100}
          sizes='10vw'
          style={{ width: '10%', height: 'auto' }} // optional
        />
        <span className='self-center whitespace-nowrap pl-2 pr-2 text-2xl font-semibold dark:text-white'>
          UnconstrainED
        </span>
        <Badge color='pink'>BETA</Badge>
      </NavbarBrand>
      <UserProfile />
    </Navbar>
  );
}
