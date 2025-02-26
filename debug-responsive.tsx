export function DebugResponsive() {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
      <span className="sm:hidden">mobile</span>
      <span className="hidden sm:inline md:hidden">sm</span>
      <span className="hidden md:inline lg:hidden">md</span>
      <span className="hidden lg:inline xl:hidden">lg</span>
      <span className="hidden xl:inline">xl</span>
    </div>
  )
}

