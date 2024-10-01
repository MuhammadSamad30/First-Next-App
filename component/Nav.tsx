import Link from "next/link";

export default function Nav(){
  return(
      <div>
      <ul id="nav">
        <li> <Link href="/">Home</Link></li>
        <li> <Link href="/education">Education</Link></li>
        <li> <Link href="/about">About</Link></li>
        <li> <Link href="/skills">Skills</Link></li>
      </ul>
      </div>
  )
}
