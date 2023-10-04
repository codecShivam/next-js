import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div className="text-2xl flex flex-row justify-center items-center">
        Hello World !!
      </div>
      <Link href="/about">About</Link>
    </div>
  )
}
