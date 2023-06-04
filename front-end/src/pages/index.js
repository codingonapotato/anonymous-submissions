import Link from 'next/link'

export default function HomePage() {
    return (
        <>
            <h1> Welcome to Anonymous Submissions </h1>
            <Link href="/text"> Text Submissions </Link>
            <Link href="/image"> Image Submissions </Link>
        </>
    )
}