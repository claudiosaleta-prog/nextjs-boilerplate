import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Utility: embargo logic
function isUnlocked(dateString) {
  const now = new Date();
  const unlockDate = new Date(dateString);
  return now >= unlockDate;
}

export default function ReoSarazolaSite() {
  const unlocked = isUnlocked("2026-06-01");

  return (
    <div className="bg-neutral-950 text-neutral-200 min-h-screen font-sans select-none">

      {/* HEADER */}
      <header className="border-b border-neutral-800 p-6 text-center">
        <h1 className="text-3xl tracking-wide">Reo Sarazola</h1>
        <p className="text-sm text-neutral-400 mt-2">
          Narrativa noir contemporánea
        </p>
      </header>

      {/* HERO */}
      <section className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-xl text-neutral-300">
          Historias de identidad, crimen y ambigüedad moral.
        </h2>

        <div className="mt-6 flex gap-4 justify-center">
          <Button className="rounded-2xl">Leer historias</Button>
          <Button variant="outline" className="rounded-2xl">
            Seguir en X
          </Button>
        </div>
      </section>

      {/* OBRAS */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 p-8">

        {/* SELVANOIR */}
        <Card className="bg-neutral-900 border-neutral-800 overflow-hidden">
          <CardContent className="p-0">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/Selvanoir2.png')" }} />
            <div className="p-6">
              <h3 className="text-lg mb-2">SELVANOIR Trilogía</h3>
              <p className="text-sm text-neutral-400">
                Universo noir principal del autor.
              </p>

              <img
                src="/PORTADA_A.jpeg"
                alt="El Escritor Designado"
                className="rounded-2xl mt-4 mb-4"
              />

              <Button asChild className="rounded-2xl">
                <a href="https://x.com/ReoSarazola/status/2048513511719080121?s=20" target="_blank">
                  Explorar
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* OBRA BLOQUEADA */}
        <Card className="bg-neutral-900 border-neutral-800 overflow-hidden relative">
          <CardContent className="p-0">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/proximamente.jpg')" }} />

            {!unlocked && (
              <div className="absolute inset-0 backdrop-blur-md bg-black/60 flex items-center justify-center">
                <p className="text-sm text-neutral-300">Disponible próximamente</p>
              </div>
            )}

            <div className="p-6">
              <h3 className="text-lg mb-2">Nueva obra</h3>
              <p className="text-sm text-neutral-400">Lanzamiento en breve.</p>
              {unlocked && (
                <Button className="mt-4 rounded-2xl">Ver obra</Button>
              )}
            </div>
          </CardContent>
        </Card>

      </section>

      {/* HISTORIAS */}
      <section className="max-w-5xl mx-auto p-8">
        <h3 className="text-lg mb-6">Historias</h3>

        <Card className="bg-neutral-900 border-neutral-800 mb-6 overflow-hidden">
          <CardContent className="p-0">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/coleccionista1.jpg')" }} />
            <div className="p-6">
              <h4 className="text-md">El Coleccionista de Arte</h4>
              <p className="text-sm text-neutral-400 mt-2">
                Historia noir serializada ambientada en Canarias.
              </p>
              <div className="flex gap-3 mt-4">
                <Button asChild className="rounded-2xl">
                  <a href="https://x.com/ReoSarazola/status/2047418319951503649?s=20" target="_blank">Parte 1</a>
                </Button>
                <Button asChild className="rounded-2xl">
                  <a href="https://x.com/ReoSarazola/status/2049497076564701533?s=20" target="_blank">Parte 2</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* BLOG */}
      <section className="max-w-5xl mx-auto p-8">
        <h3 className="text-lg mb-6">Blog</h3>
        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <p className="text-sm text-neutral-400">
              Próximamente artículos, avances y notas del autor.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* BIO */}
      <section className="max-w-4xl mx-auto p-8">
        <Card className="bg-neutral-900 border-neutral-800">
          <CardContent className="p-6">
            <h3 className="text-lg mb-2">Bio</h3>
            <p className="text-sm text-neutral-400">
              Reo Sarazola es autor de narrativa noir contemporánea.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CONTACTO */}
      <section className="max-w-4xl mx-auto p-8 text-center">
        <p className="text-sm text-neutral-400">reo@reosarazola.com</p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 text-center p-6 text-xs text-neutral-500">
        © 2026 Reo Sarazola
      </footer>

    </div>
  );
}
