import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1 - Espresso Academy */}
          <div>
            <h3 className="text-lg font-bold text-white">Espresso Academy</h3>
            <p className="mt-3 text-sm text-footer-text/80">
              Tu dosis diaria de conocimiento sobre café. Domina tu máquina con tutoriales de expertos.
            </p>
          </div>

          {/* Column 2 - Get In Touch */}
          <div>
            <h3 className="text-lg font-bold text-white">Ponte en Contacto</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/" className="text-sm text-footer-text/80 transition-colors hover:text-button-primary">
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-footer-text/80 transition-colors hover:text-button-primary">
                  Enviar un Tutorial
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-footer-text/80 transition-colors hover:text-button-primary">
                  Asociaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Follow Us */}
          <div>
            <h3 className="text-lg font-bold text-white">Síguenos</h3>
            <div className="mt-3 flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/cafequiposoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text/80 transition-colors hover:text-button-primary"
                aria-label="Síguenos en Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@cafequipos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text/80 transition-colors hover:text-button-primary"
                aria-label="Suscríbete en YouTube"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/cafequip/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-footer-text/80 transition-colors hover:text-button-primary"
                aria-label="Danos like en Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@cafequiposoficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en TikTok"
                className="text-footer-text/80 transition-colors hover:text-button-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6" fill="currentColor">
                  <path d="M232 72a56 56 0 0 1-56-56h-32v152a32 32 0 1 1-32-32h8V96h-8a64 64 0 1 0 64 64V84.9A87.4 87.4 0 0 0 232 96Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Links */}
        <div className="mt-12 border-t border-footer-text/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p className="text-footer-text/60">© 2024 Cafequipos. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/" className="text-footer-text/60 transition-colors hover:text-button-primary">
                Política de Privacidad
              </Link>
              <Link href="/" className="text-footer-text/60 transition-colors hover:text-button-primary">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
