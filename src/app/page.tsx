import RevealWrapper from "@/components/RevealWrapper";

const stats = [
  { value: "−87%", label: "de temps de gestion administrative" },
  { value: "+34%", label: "de chiffre d'affaires en 6 mois" },
  { value: "24/7", label: "de disponibilité pour les clients" },
  { value: "0 oubli", label: "de réservation ou de document" },
];

const problems = [
  {
    icon: "📋",
    title: "Devis manuels",
    desc: "Chaque demande de réservation nécessitait une réponse personnalisée rédigée à la main. Plusieurs heures perdues par jour.",
  },
  {
    icon: "📂",
    title: "Gestion documentaire chaotique",
    desc: "Contrats, attestations d'assurance, permis de navigation — éparpillés entre e-mails, Google Drive et classeurs.",
  },
  {
    icon: "📞",
    title: "Disponibilité limitée",
    desc: "Impossible de répondre aux clients le soir ou le week-end. Des opportunités perdues à chaque fois.",
  },
  {
    icon: "💸",
    title: "Tarification statique",
    desc: "Les prix ne s'adaptaient pas à la demande, à la saison, ni aux événements locaux. Du revenu laissé sur la table.",
  },
];

const solutions = [
  {
    step: "01",
    title: "Agent IA de qualification",
    desc: "Un agent conversationnel qualifie chaque prospect 24/7, répond aux questions fréquentes et envoie des devis personnalisés en moins de 2 minutes.",
  },
  {
    step: "02",
    title: "Automatisation documentaire",
    desc: "Génération automatique des contrats, collecte des pièces justificatives, relances intelligentes et archivage structuré.",
  },
  {
    step: "03",
    title: "Pricing dynamique",
    desc: "Un modèle analyse la demande en temps réel, les événements locaux et l'historique pour optimiser les tarifs automatiquement.",
  },
  {
    step: "04",
    title: "Dashboard centralisé",
    desc: "Toutes les réservations, documents et communications dans une seule interface. Vue complète en un coup d'œil.",
  },
];

const steps = [
  { label: "Le client fait une demande", sub: "via site web, WhatsApp ou e-mail" },
  { label: "L'IA qualifie & propose", sub: "devis personnalisé en < 2 min" },
  { label: "Signature & paiement", sub: "100% automatisés et sécurisés" },
  { label: "Onboarding client", sub: "documents, accès, briefing envoyés auto" },
  { label: "Suivi post-séjour", sub: "avis, fidélisation, upsell automatique" },
];

export default function Home() {
  return (
    <RevealWrapper>
      <main className="min-h-screen font-sans">

        {/* ── HERO ── */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,113,227,0.07),transparent)]" />
          <div className="relative max-w-4xl mx-auto">
            <p className="reveal inline-block mb-6 text-xs font-semibold tracking-widest uppercase text-neutral-400 border border-neutral-200 rounded-full px-4 py-1.5">
              Case Study — Location de Yacht
            </p>
            <h1 className="reveal mt-2 text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight text-neutral-900">
              Comment j'ai automatisé
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500">
                ma location de yacht
              </span>
              <br />
              avec l'IA
            </h1>
            <p className="reveal mt-8 text-xl sm:text-2xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              De <strong className="text-neutral-900">40h de gestion manuelle par semaine</strong> à un système entièrement autonome — sans recruter, sans sacrifier la qualité client.
            </p>
            <div className="reveal mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-medium hover:bg-neutral-700 transition-colors duration-200"
              >
                Voir comment ça marche
              </a>
              <a
                href="#resultats"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-200 text-neutral-700 rounded-full text-base font-medium hover:border-neutral-400 transition-colors duration-200"
              >
                Voir les résultats →
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-300">
            <span className="text-xs tracking-widest uppercase">Défiler</span>
            <div className="w-px h-10 bg-gradient-to-b from-neutral-300 to-transparent" />
          </div>
        </section>

        {/* ── PROBLÈME ── */}
        <section className="py-32 px-6 bg-neutral-950 text-white">
          <div className="max-w-5xl mx-auto">
            <p className="reveal text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Le problème
            </p>
            <h2 className="reveal text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
              Avant l'IA, chaque journée ressemblait à ça.
            </h2>
            <p className="reveal mt-6 text-lg text-neutral-400 max-w-xl">
              Gérer une flotte de yachts manuellement, c'est une charge mentale et administrative écrasante. Voici ce que nous vivions chaque semaine.
            </p>
            <div className="mt-16 grid sm:grid-cols-2 gap-6">
              {problems.map((p) => (
                <div
                  key={p.title}
                  className="reveal p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors duration-300"
                >
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUTION ── */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="reveal text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4">
              La solution
            </p>
            <h2 className="reveal text-4xl sm:text-5xl font-bold leading-tight max-w-2xl text-neutral-900">
              L'infrastructure IA complète pour la nautisme.
            </h2>
            <p className="reveal mt-6 text-lg text-neutral-500 max-w-xl">
              Nous avons conçu un système modulaire qui automatise chaque friction du métier — sans changer vos outils existants.
            </p>
            <div className="mt-16 grid sm:grid-cols-2 gap-6">
              {solutions.map((s) => (
                <div
                  key={s.step}
                  className="reveal group p-8 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300"
                >
                  <p className="text-5xl font-bold text-neutral-100 group-hover:text-neutral-200 transition-colors mb-4">
                    {s.step}
                  </p>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{s.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RÉSULTATS ── */}
        <section id="resultats" className="py-32 px-6 bg-neutral-950 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <p className="reveal text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Les résultats
            </p>
            <h2 className="reveal text-4xl sm:text-5xl font-bold leading-tight">
              Des chiffres qui parlent d'eux-mêmes.
            </h2>
            <p className="reveal mt-6 text-lg text-neutral-400 max-w-lg mx-auto">
              Mesurés sur 6 mois après déploiement complet du système IA.
            </p>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="reveal p-8 rounded-2xl bg-neutral-900 border border-neutral-800"
                >
                  <p className="text-4xl font-bold text-white mb-2">{s.value}</p>
                  <p className="text-sm text-neutral-400 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMENT ÇA MARCHE ── */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="reveal text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4 text-center">
              Comment ça marche
            </p>
            <h2 className="reveal text-4xl sm:text-5xl font-bold leading-tight text-neutral-900 text-center">
              Le flow en 5 étapes.
            </h2>
            <div className="mt-16 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-neutral-100" />
              <ol className="space-y-10">
                {steps.map((s, i) => (
                  <li key={i} className="reveal relative flex gap-6 pl-16">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 text-white text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div className="pt-2">
                      <p className="text-lg font-semibold text-neutral-900">{s.label}</p>
                      <p className="text-sm text-neutral-400 mt-1">{s.sub}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section id="cta" className="py-32 px-6 bg-neutral-950 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <p className="reveal text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Passez à l'action
            </p>
            <h2 className="reveal text-4xl sm:text-5xl font-bold leading-tight">
              Vous voulez la même chose pour votre activité ?
            </h2>
            <p className="reveal mt-6 text-lg text-neutral-400 max-w-xl mx-auto">
              En 30 minutes d'échange, nous identifions les automatisations les plus impactantes pour votre activité nautique — sans engagement.
            </p>
            <div className="reveal mt-12">
              <a
                href="mailto:contact@doc-hy.com"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-neutral-900 rounded-full text-lg font-semibold hover:bg-neutral-100 transition-colors duration-200"
              >
                Réserver un appel gratuit →
              </a>
            </div>
            <p className="reveal mt-6 text-sm text-neutral-600">
              Réponse sous 24h · Aucune obligation
            </p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="py-8 px-6 border-t border-neutral-100 text-center">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} DOC-HY · Automatisation IA pour le nautisme
          </p>
        </footer>

      </main>
    </RevealWrapper>
  );
}
