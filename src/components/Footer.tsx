export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/PauloFicher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="https://www.pauloesp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              pauloesp.com
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="https://linkedin.com/in/pauloespinola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-gray-600">
            Paulo Espinola Fischer &middot; AI Automation Specialist &middot; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
