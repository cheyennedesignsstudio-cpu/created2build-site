import React, { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Feather,
  Landmark,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Menu,
  X,
  Building2,
  Lightbulb,
  Handshake,
} from "lucide-react";

export default function Created2BuildWebsite() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (nextPage) => {
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#fff7ed] text-[#064b55] overflow-hidden">
      <Header
        page={page}
        goTo={goTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {page === "home" ? (
        <LandingPage goTo={goTo} />
      ) : (
        <EventsPage />
      )}

      <Footer goTo={goTo} />
    </main>
  );
}

function Header({ page, goTo, menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-[#064b55] text-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => goTo("home")}
          className="flex items-center gap-4"
        >
          <div className="h-14 w-14 rounded-2xl bg-orange-500 flex items-center justify-center font-bold text-xl">
            C2B
          </div>

          <div className="text-left">
            <h1 className="text-2xl font-bold tracking-[0.2em]">
              CREATED<span className="text-orange-400">2</span>BUILD
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-orange-200">
              Build Your Mind. Secure Your Future.
            </p>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => goTo("home")}
            className="px-5 py-3 rounded-full hover:bg-white/10"
          >
            Home
          </button>

          <button
            onClick={() => goTo("events")}
            className="px-5 py-3 rounded-full hover:bg-white/10"
          >
            Events
          </button>

          <button
            onClick={() => goTo("events")}
            className="bg-orange-500 px-6 py-3 rounded-full font-bold"
          >
            Register
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}

function LandingPage({ goTo }) {
  return (
    <>
      <section className="bg-[#064b55] text-white px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.45em] text-orange-200 text-sm mb-5">
              Create<span className="text-orange-400">2</span>Build
            </p>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Build Your Mind.
              <span className="block text-orange-300 italic">
                Secure Your Future.
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Created2Build is for builders, visionaries, and purpose-driven
              leaders ready to create with clarity, move with strategy, and
              build a legacy that lasts.
            </p>

            <button
              onClick={() => goTo("events")}
              className="mt-8 bg-orange-500 px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
            >
              View Upcoming Events <ArrowRight size={20} />
            </button>
          </div>

          <div className="bg-white text-[#064b55] rounded-3xl p-8 shadow-2xl">
            <p className="text-orange-500 italic text-3xl">
              Faith. Focus. Foundation.
            </p>

            <h2 className="text-4xl font-bold mt-3">
              A movement for builders.
            </h2>

            <div className="grid gap-4 mt-8">
              <Detail
                icon={<Lightbulb />}
                title="Mindset"
                text="Build the internal clarity needed to create more."
              />

              <Detail
                icon={<ShieldCheck />}
                title="Structure"
                text="Gain practical tools for your future and vision."
              />

              <Detail
                icon={<Building2 />}
                title="Legacy"
                text="Create something that carries value beyond you."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-orange-600 text-sm font-bold">
            What We Build Around
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            More Freedom. More Impact. More Legacy.
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <Focus
              icon={<Feather />}
              title="More Freedom"
              text="Create room to live, lead, and build with intention."
            />

            <Focus
              icon={<Users />}
              title="More Impact"
              text="Use your gifts to make a difference that lasts."
            />

            <Focus
              icon={<Landmark />}
              title="More Legacy"
              text="Build value that can bless generations."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function EventsPage() {
  return (
    <>
      <section className="bg-[#064b55] text-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white text-[#064b55] rounded-3xl p-8 shadow-2xl">
            <p className="text-orange-500 italic text-3xl">
              Upcoming Event
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Create More Workshop
            </h2>

            <div className="grid gap-4 mt-8">
              <Detail
                icon={<CalendarDays />}
                title="Date"
                text="Saturday, June 27th, 2026"
              />

              <Detail
                icon={<Clock />}
                title="Time"
                text="10:00 AM – 2:30 PM"
              />

              <Detail
                icon={<MapPin />}
                title="Location"
                text="The Wine Garden · Lakeland, FL"
              />
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.45em] text-orange-200 text-sm mb-5">
              Created2Build Presents
            </p>

            <h1 className="text-6xl font-bold leading-tight">
              Built for Those Called to
              <span className="block text-orange-300 italic">
                Create More
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              A practical workshop for builders, visionaries, and
              purpose-driven entrepreneurs ready to create more freedom,
              more impact, and more legacy.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto bg-[#fff7ed] rounded-3xl p-10 border border-orange-100 shadow-2xl text-center">
          <p className="uppercase tracking-[0.4em] text-orange-600 text-sm font-bold">
            Register Today
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Save your seat.
          </h2>

          <p className="mt-5 text-lg text-[#064b55]/75">
            Secure your spot for the Created2Build workshop through our
            registration checkout link.
          </p>

          <a
            href="https://square.link/u/dQxOHLPP"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-orange-500 text-white px-10 py-4 rounded-full font-bold"
          >
            Register Through Square <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  );
}

function Footer({ goTo }) {
  return (
    <footer className="bg-[#032f36] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <h2 className="text-2xl font-bold tracking-[0.2em]">
            CREATED<span className="text-orange-400">2</span>BUILD
          </h2>

          <p className="text-sm text-white/60">
            Build Your Mind. Secure Your Future.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => goTo("home")}
            className="px-5 py-3 rounded-full border border-white/10"
          >
            Home
          </button>

          <button
            onClick={() => goTo("events")}
            className="bg-orange-500 px-5 py-3 rounded-full font-bold"
          >
            Events
          </button>
        </div>
      </div>
    </footer>
  );
}

function Detail({ icon, title, text }) {
  return (
    <div className="flex gap-4 bg-white p-4 rounded-2xl border border-orange-100">
      <div className="h-11 w-11 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
        {icon}
      </div>

      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-[#064b55]/75">{text}</p>
      </div>
    </div>
  );
}

function Focus({ icon, title, text }) {
  return (
    <div className="bg-[#fff7ed] rounded-3xl p-8 border border-orange-100 shadow-lg">
      <div className="h-20 w-20 rounded-full bg-[#064b55] text-orange-300 flex items-center justify-center mb-7">
        {icon}
      </div>

      <h3 className="text-3xl font-bold">{title}</h3>

      <p className="mt-3 text-[#064b55]/75 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
