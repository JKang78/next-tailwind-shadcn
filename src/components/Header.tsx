export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* small utility links above the masthead */}
        <div className="flex justify-end text-xs text-gray-600 py-2 space-x-4">
          <span>U.S.</span>
          <span>World</span>
          <span>Business</span>
        </div>

        {/* centered masthead */}
        <div className="py-4 flex justify-center">
          <h1 className="masthead">MySite</h1>
        </div>

        <div className="border-t" />
      </div>
    </header>
  )
}
