import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className='flex flex-col gap-5 items-center justify-center border shadow-lg w-full max-w-md p-6'>
        <h1 className='text-6xl md:text-9xl'>😢</h1>
        <p className='text-4xl md:text-6xl'>404</p>
        <p className='text-xl md:text-2xl'>Page not Found</p>
        <Link to='/' className='bg-orange-600 text-white text-sm p-2 rounded-lg hover:bg-orange-700'>Back Home</Link>
      </div>
    </div>
  )
}
export default Error