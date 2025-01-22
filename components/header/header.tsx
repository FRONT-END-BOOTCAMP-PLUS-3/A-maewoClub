"use client"
import Link from "next/link"

export const Header = () => {
  return (
    <header>
      <h1><Link href="/">logo</Link></h1>
      <nav>
        <Link href="/">레시피</Link>
        <Link href="/">커뮤니티</Link>
        <Link href="/">챌린지</Link>
      </nav>
      <div>
        <Link href="/login">Login</Link>
      </div>
    </header>
  )
}
