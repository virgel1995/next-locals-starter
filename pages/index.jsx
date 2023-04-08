import Link from 'next/link'

export default function IndexPage({
  lang
}) {

  return (
    <div>
      <h1>Index page</h1>

      <p> {lang.nameVar} : {lang.name}</p>
      <p> {lang.ageVar}  : {lang.age}</p>

      <Link href={'/home'}>Go Home</Link>

    </div>
  )
}
