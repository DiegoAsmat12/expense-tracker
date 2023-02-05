import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline-offset-1">
        Hello with tailwind.
      </h1>
    </main>
  )
}
