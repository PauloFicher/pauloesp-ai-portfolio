export default function Footer() {
  return (
    <footer className="border-t border-wire py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/PauloFicher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-ink-tertiary hover:text-ink transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.pauloesp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-ink-tertiary hover:text-ink transition-colors"
            >
              pauloesp.com
            </a>
            <a
              href="https://linkedin.com/in/pauloespinola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-ink-tertiary hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-[12px] text-ink-tertiary">
            Paulo Espinola Fischer &middot; AI Automation &middot; Asuncion, Paraguay &middot; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
