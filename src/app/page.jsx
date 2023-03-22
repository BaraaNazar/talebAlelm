import { Inter } from 'next/font/google'
import styles from './page.module.css'
import SignUp from "./signUp/page"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <SignUp/>
      )
}
