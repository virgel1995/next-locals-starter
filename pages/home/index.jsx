import Link from 'next/link'

export default function IndexPage({
    lang
}) {


    return (
        <div>
            <h1>Home page</h1>


            <p> {lang.nameVar} : {lang.name}</p>
            <p> {lang.ageVar}  : {lang.age}</p>

            <Link href={'/'}>Go Index</Link>
        </div>
    )
}
