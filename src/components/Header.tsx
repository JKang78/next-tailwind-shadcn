"use client"

import { Button } from "./ui/Button"

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="text-xl font-semibold">MySite</div>
      <nav className="flex items-center gap-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
        <Button>Sign up</Button>
      </nav>
    </header>
  )
}
