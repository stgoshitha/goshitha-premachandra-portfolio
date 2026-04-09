import {footerContent} from '/src/AllText.jsx'

const Footer = () => {

  return (
    <div>
      <footer className='flex flex-col relative text-white bg-primary items-center pb-[10px] w-full'>
        <hr className='w-[80%] mb-[10px] mt-[10px]'/>
        <p className='text-center text-gray-400 font-medium'>{footerContent.copyrightText}</p>
      </footer>
    </div>
  )
}

export default Footer
