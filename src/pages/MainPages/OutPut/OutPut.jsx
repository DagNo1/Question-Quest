import React, { useState, useLayoutEffect } from 'react'
import useStore from '../../../utils/store/Store';
import download from '../../../assets/icons/download.svg'
import copy from '../../../assets/icons/copy.svg'
import retry from '../../../assets/icons/retry.svg'
import { useNavigate } from 'react-router-dom'

//#7f11e0
const OutPut = () => {

  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/upload")
  }

  const outputQuestionsFile = useStore(store => store.outputQuestionsFile);
  const file = useStore(store => store.file)

  //href is the downloadabel file and the download attribute is the final name of the questions pdf after being downloaded

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const [computerScreenWidth, height] = useWindowSize();

  return (
    <div className=' w-full flex flex-col px-4 max-md:min-h-screen lg:flex-row lg:h-screen '>
      <div className='flex justify-center my-4 text-black text-xs md:text-sm border border-white/40 p-3 md:mx-10 lg:w-1/2 lg:mx-1'>
        <p className={`bg-white p-5 overflow-y-auto h-96 md:h-[40rem] lg:h-auto`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate similique inventore libero magnam tenetur minus iure maxime esse cumque nesciunt a eum laboriosam unde ipsa placeat aut, magni obcaecati qui?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptatem. Adipisci placeat accusantium nostrum quaerat voluptatum suscipit veniam deleniti culpa et, laborum aspernatur alias doloribus non sed molestiae id omnis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam atque perspiciatis vitae laborum omnis a doloribus aut molestias nemo deserunt quas quaerat, dignissimos molestiae quod sint error? Debitis, sit!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, officiis! Libero nihil obcaecati debitis, eveniet, quidem quia sunt dolore unde, sint fuga reprehenderit illo in fugit. Quisquam velit iusto illo?
        </p>
      </div>
      <div class="flex flex-col justify-center items-center gap-6 md:gap-10 text-textColor min-w-screen mx-auto 
        md:grid md:grid-cols-3 md:my-10 lg:flex lg:flex-col lg:items-start lg:gap-10 lg:border lg:border-white/40 lg:my-4 lg:w-1/2
      ">
        {/* <!-- Row 1 --> */}
        <div className='space-y-1 self-start w-72 md:w-52 lg:self-center order-1 md:fi'>
          <button className='flex justify-center items-center gap-10 active:bg-purple/50 motion-safe:hover:scale-110 rounded-md border border-purple py-3 w-full'>
            <img src={download} className='w-5' />
            Download
          </button>
          <p className='text-center md:text-sm'>Download your file as .txt format</p>
        </div>
        <div className='self-start w-72 md:w-52 lg:self-center order-2 lg:order-3' >
          <button className='flex justify-center gap-10 active:bg-purple motion-safe:hover:scale-110 rounded-md border border-purple py-3 w-full' onClick={handleRetry}>
            Retry <img src={retry} />
          </button>
        </div>
        <div className='space-y-1 self-start w-72 md:w-52 lg:self-center order-3 lg:order-2 '>
          <button className='flex justify-center gap-10 bg-purple/40 active:bg-transparent motion-safe:hover:scale-110 rounded-md border border-white/40 py-3 w-full'>
            <img src={copy} />Copy
          </button>
          <p className='text-center md:text-sm'>Copy the questions as a string.</p>
        </div>
      </div>

    </div>

  )
}

export default OutPut