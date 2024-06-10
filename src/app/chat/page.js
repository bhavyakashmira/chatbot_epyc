import CharArea from '@/components/CharArea';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

const ChatLayout = () => {
    return (
        <div className=" relative bg-[#0D1E1F] text-white ">
            <div className='absolute inset-0'>
                <Image src="/bg.png" alt="grid" fill style={{ objectFit: 'cover' }} quality={100} />
            </div>

            <div className='relative flex min-h-screen'>
                <Sidebar />
                <CharArea />
            </div>
           
           
        </div>
    );
};

export default ChatLayout;
