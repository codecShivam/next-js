export default function NotFound() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div>
        <h1 className="text-3xl text-center text-blue-500 font-bold">404 <span className='border border-gray-500 mr-2'> </span>  Page Not Found</h1>
        <p className="text-center text-gray-500">Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  )
}