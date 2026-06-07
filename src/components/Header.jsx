
/**
 * The top navigation bar with the app name, a search icon and an avatar blob.
 * @returns {JSX.Element}
 */
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5 font-bold text-xl text-gray-900">
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20.662V19a5 5 0 0 1 10 0v1.662" />
          </svg>
          PodcastApp
        </div>
        <div className="flex items-center gap-5 text-gray-600">
          <button aria-label="Search" className="hover:text-gray-900">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-[#9aa1ac]" role="img" aria-label="Account" />
        </div>
      </div>
    </header>
  );
}
