import Link from "next/link"

function About() {
  throw new Error('Sentry Frontend Error')
  return (
    <>
      <div className='flex flex-row items-center justify-center text-2xl'>About</div>
      <Link href="/about/shivam">Go to </Link>
    </>
  )
}

export default About