import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <h1>Audiobook Platform</h1>
      <p>Phase 0 scaffold is running.</p>
      <nav>
        <Link href="/login">Login</Link>
      </nav>
    </main>
  )
}
