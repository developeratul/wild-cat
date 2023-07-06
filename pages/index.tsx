import Image from 'next/image'
import { Inter } from 'next/font/google'
import AppBar from '@/Components/AppBar'
import Sidebar from '@/Components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="flex">
        <AppBar />
        <Sidebar />
      </div>
    </>
  )
}
