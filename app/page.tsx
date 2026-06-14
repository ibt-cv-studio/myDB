import { Button } from '@/components/ui/button';
import { Database, ArrowRight, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <span className="font-bold text-2xl">UniversalDB</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost">Login</Button>
            <Button>Get Started Free</Button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-24 text-center">
        <h1 className="text-7xl font-bold tracking-tighter mb-6">
          What will you <span className="text-blue-500">build</span> today?
        </h1>
        <p className="text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto">
          Free cloud databases for students, developers, and teams.<br />
          PostgreSQL • MySQL • MongoDB • Zero ops.
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg" className="text-lg px-10 py-7">
            Deploy Your First Database <ArrowRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-10 py-7">
            Watch Demo
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
          {[
            { icon: Zap, title: "One-Click Deploy", desc: "Launch production databases instantly" },
            { icon: Users, title: "Team Collaboration", desc: "Share databases with your team" },
            { icon: Database, title: "Multiple Engines", desc: "PostgreSQL, MySQL, MongoDB & more" }
          ].map((f, i) => (
            <div key={i} className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <f.icon className="w-12 h-12 mb-6 text-blue-500" />
              <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
