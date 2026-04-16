import RevealWrapper from "@/components/RevealWrapper";
import ScreenshotCard from "@/components/ScreenshotCard";

const stats = [
  { value: "45", label: "leads trackés en temps réel" },
  {
    value: "4 300€",
    label: "de chiffre d'affaires potentiel identifié et suivi en temps réel",
    note: "Chaque prospect a une valeur estimée — le système calcule automatiquement votre CA prévisionnel à tout moment.",
  },
  { value: "< 2 min", label: "de réponse client (contre 3h avant)" },
  { value: "1 700€", label: "de réservations confirmées ce mois" },
  { value: "0 oubli", label: "de lead depuis le déploiement" },
];

const screenshots = [
  {
    src: "/screenshots/dashboard-pipeline.png",
    alt: "Vue pipeline — 45 leads et 4 300€ trackés",
    caption: "Vue pipeline — 45 leads et 4 300€ trackés en temps réel",
  },
  {
    src: "/screenshots/dashboard-reservations.png",
    alt: "Vue réservations — 1 700€ confirmés ce mois",
    caption: "Vue réservations — 1 700€ confirmés, zéro lead oublié",
  },
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

function GoldDivider() {
  return (
    <div className="flex justify-center">
      <hr className="w-[60px] border-0 border-t border-gold/40" />
    </div>
  );
}

export default function Home() {
  return (
    <RevealWrapper>
      <main className="min-h-screen font-sans">

        {/* ── HERO ── */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-navy overflow-hidden">

          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(201,168,76,0.10),transparent)]" />

          {/* Animated gold wave */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <svg
              className="absolute bottom-0 left-0 w-[200%] animate-wave"
              style={{ opacity: 0.08 }}
              viewBox="0 0 2880 160"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,80 C180,130 360,30 540,80 C720,130 900,30 1080,80 C1260,130 1440,30 1620,80 C1800,130 1980,30 2160,80 C2340,130 2520,30 2700,80 C2790,105 2850,65 2880,80 L2880,160 L0,160 Z"
                fill="#C9A84C"
              />
            </svg>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <p className="reveal inline-block mb-6 text-xs font-semibold tracking-widest uppercase text-gold border border-gold/40 rounded-full px-4 py-1.5">
              Case Study — Location de Yacht
            </p>
            <h1 className="reveal mt-2 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight text-cream">
              Comment j'ai automatisé
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/60">
                ma location de yacht
              </span>
              <br />
              avec l'IA
            </h1>
            <p className="reveal mt-8 text-xl sm:text-2xl text-cream/70 max-w-2xl mx-auto leading-relaxed">
              De <strong className="text-cream">40h de gestion manuelle par semaine</strong> à un système entièrement autonome — sans recruter, sans sacrifier la qualité client.
            </p>
            <div className="reveal mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy rounded-full text-base font-semibold hover:bg-gold/90 transition-colors duration-200"
              >
                Voir comment ça marche
              </a>
              <a
                href="#resultats"
                className="inline-flex items-center justify-center px-8 py-4 border border-gold/40 text-cream rounded-full text-base font-medium hover:border-gold/80 transition-colors duration-200"
              >
                Voir les résultats →
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
            <span className="text-xs tracking-widest uppercase">Défiler</span>
            <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent" />
          </div>
        </section>

        <GoldDivider />

        {/* ── PROBLÈME ── */}
        <section className="py-32 px-6 bg-navy text-cream">
          <div className="max-w-5xl mx-auto">
            <p className="reveal text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              Le problème
            </p>
            <h2 className="reveal font-display text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
              Avant l'IA, chaque journée ressemblait à ça.
            </h2>
            <p className="reveal mt-6 text-lg text-cream/60 max-w-xl">
              Gérer une flotte de yachts manuellement, c'est une charge mentale et administrative écrasante. Voici ce que nous vivions chaque semaine.
            </p>
            <div className="mt-16 grid sm:grid-cols-2 gap-6">
              {problems.map((p) => (
                <div
                  key={p.title}
                  className="reveal p-8 rounded-2xl bg-navy border border-gold/20 hover:border-gold/50 transition-colors duration-300"
                >
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-cream">{p.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* ── SOLUTION ── */}
        <section className="py-32 px-6 bg-off-white">
          <div className="max-w-5xl mx-auto">
            <p className="reveal text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              La solution
            </p>
            <h2 className="reveal font-display text-4xl sm:text-5xl font-bold leading-tight max-w-2xl text-navy">
              L'infrastructure IA complète pour le nautisme.
            </h2>
            <p className="reveal mt-6 text-lg text-neutral-500 max-w-xl">
              Nous avons conçu un système modulaire qui automatise chaque friction du métier — sans changer vos outils existants.
            </p>
            <div className="mt-16 grid sm:grid-cols-2 gap-6">
              {solutions.map((s) => (
                <div
                  key={s.step}
                  className="reveal group p-8 rounded-2xl border border-gold/20 hover:border-gold/50 hover:shadow-lg transition-all duration-300"
                >
                  <p className="text-5xl font-bold font-display text-gold/20 group-hover:text-gold/40 transition-colors mb-4">
                    {s.step}
                  </p>
                  <h3 className="text-lg font-semibold text-navy mb-2">{s.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* ── SYSTÈME EN ACTION ── */}
        <section className="py-32 px-6 bg-off-white">
          <div className="max-w-5xl mx-auto">
            <p className="reveal text-xs font-semibold tracking-widest uppercase text-gold mb-4 text-center">
              Le système en action
            </p>
            <h2 className="reveal font-display text-4xl sm:text-5xl font-bold leading-tight text-navy text-center">
              Le vrai dashboard Harmonie Yacht
            </h2>
            <p className="reveal mt-4 text-lg text-neutral-500 text-center max-w-xl mx-auto">
              Pas une maquette — notre système en production depuis 6 mois.
            </p>

            {/* Desktop : 2 colonnes — Mobile : carousel scroll-snap */}
            <div className="mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 scroll-smooth [-webkit-overflow-scrolling:touch]">
              {screenshots.map((s) => (
                <ScreenshotCard
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  caption={s.caption}
                />
              ))}
            </div>

            {/* Indicateur scroll mobile */}
            <div className="mt-5 flex justify-center gap-2 sm:hidden" aria-hidden>
              {screenshots.map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-gold" : "bg-gold/30"}`} />
              ))}
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* ── RÉSULTATS ── */}
        <section id="resultats" className="py-32 px-6 bg-navy text-cream">
          <div className="max-w-5xl mx-auto text-center">
            <p className="reveal text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              Les résultats
            </p>
            <h2 className="reveal font-display text-4xl sm:text-5xl font-bold leading-tight">
              Des chiffres qui parlent d'eux-mêmes.
            </h2>
            <p className="reveal mt-6 text-lg text-cream/60 max-w-lg mx-auto">
              Mesurés sur 6 mois après déploiement complet du système IA.
            </p>
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="reveal p-8 rounded-2xl bg-navy border border-gold/30"
                >
                  <p className="text-4xl font-bold font-display text-gold mb-2">{s.value}</p>
                  <p className="text-sm text-cream/60 leading-snug">{s.label}</p>
                  {"note" in s && s.note && (
                    <p className="mt-3 text-xs text-cream/40 leading-relaxed border-t border-gold/20 pt-3">
                      {s.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* ── COMMENT ÇA MARCHE ── */}
        <section className="py-32 px-6 bg-off-white">
          <div className="max-w-3xl mx-auto">
            <p className="reveal text-xs font-semibold tracking-widest uppercase text-gold mb-4 text-center">
              Comment ça marche
            </p>
            <h2 className="reveal font-display text-4xl sm:text-5xl font-bold leading-tight text-navy text-center">
              Le flow en 5 étapes.
            </h2>
            <div className="mt-16 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/20" />
              <ol className="space-y-10">
                {steps.map((s, i) => (
                  <li key={i} className="reveal relative flex gap-6 pl-16">
                    <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-gold text-navy text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div className="pt-2">
                      <p className="text-lg font-semibold text-navy">{s.label}</p>
                      <p className="text-sm text-neutral-400 mt-1">{s.sub}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* ── CTA ── */}
        <section id="cta" className="py-32 px-6 bg-navy text-cream">
          <div className="max-w-3xl mx-auto text-center">
            <p className="reveal text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              Passez à l'action
            </p>
            <h2 className="reveal font-display text-4xl sm:text-5xl font-bold leading-tight">
              Vous voulez la même chose pour votre activité ?
            </h2>
            <p className="reveal mt-6 text-lg text-cream/60 max-w-xl mx-auto">
              En 30 minutes d'échange, nous identifions les automatisations les plus impactantes pour votre activité nautique — sans engagement.
            </p>
            <div className="reveal mt-12">
              <a
                href="mailto:contact@doc-hy.com"
                className="inline-flex items-center justify-center px-10 py-5 bg-gold text-navy rounded-full text-lg font-semibold hover:bg-gold/90 transition-colors duration-200"
              >
                Réserver un appel gratuit →
              </a>
            </div>
            <p className="reveal mt-6 text-sm text-cream/40">
              Réponse sous 24h · Aucune obligation
            </p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="py-8 px-6 border-t border-gold/20 text-center bg-off-white">
          <p className="text-xs text-gold/50">
            © {new Date().getFullYear()} DOC-HY · Automatisation IA pour le nautisme
          </p>
        </footer>

      </main>
    </RevealWrapper>
  );
}
