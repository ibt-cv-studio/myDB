'use client';

import { useState } from 'react';
import { Database, Plus, Play, Settings, Users, BarChart3, Clock, Shield, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface DB {
  id: number;
  name: string;
  engine: string;
  status: string;
  size: string;
  region: string;
  queries: number;
}

export default function Dashboard() {
  const [databases, setDatabases] = useState<DB[]>([
    { id: 1, name: 'student-ecommerce', engine: 'postgres', status: 'running', size: '245 MB', region: 'us-east', queries: 12400 },
    { id: 2, name: 'research-ml', engine: 'mongodb', status: 'running', size: '1.8 GB', region: 'eu-west', queries: 8750 },
    { id: 3, name: 'school-grades', engine: 'mysql', status: 'paused', size: '890 MB', region: 'us-east', queries: 3200 },
  ]);

  const [showNewModal, setShowNewModal] = useState(false);

  const createDatabase = (engine: string) => {
    const newDb: DB = {
      id: Date.now(),
      name: `db-${engine}-${Date.now().toString().slice(-6)}`,
      engine,
      status: 'provisioning',
      size: '0 MB',
      region: 'us-east',
      queries: 0
    };
    setDatabases([...databases, newDb]);
    setShowNewModal(false);
    alert(`🚀 ${engine.toUpperCase()} database is being provisioned!`);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950">
      {/* Sidebar */}
      <div className="w-72 border-r border-zinc-800 bg-zinc-950 flex flex-col">
        <div className="p-6 border-b border-zinc-800 flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-2xl tracking-tighter">UniversalDB</div>
            <div className="text-xs text-emerald-400">Student • Free Tier</div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1">
          {[
            { name: 'Databases', icon: Database, active: true },
            { name: 'Analytics', icon: BarChart3 },
            { name: 'Team', icon: Users },
            { name: 'Activity', icon: Clock },
            { name: 'Security', icon: Shield },
          ].map((item) => (
            <a key={item.name} href="#" className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm transition-all ${item.active ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-900/50 text-zinc-400'}`}>
              <item.icon className="w-5 h-5" />
              {item.name}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <Dialog open={showNewModal} onOpenChange={setShowNewModal}>
            <DialogTrigger asChild>
              <Button className="w-full h-12 text-base" size="lg">
                <Plus className="mr-2" /> New Database
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-zinc-900 border-zinc-700">
              <DialogHeader>
                <DialogTitle className="text-2xl">Choose Database Engine</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 gap-4 py-6">
                {['postgres', 'mysql', 'mongodb'].map((eng) => (
                  <Button
                    key={eng}
                    variant="outline"
                    className="h-20 justify-start text-left hover:border-blue-500"
                    onClick={() => createDatabase(eng)}
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center">
                        <Database className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="font-semibold capitalize">{eng}</div>
                        <div className="text-xs text-zinc-500">Free Tier • Instant</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur p-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">What will you build today?</h1>
            <p className="text-zinc-400 mt-1">Instant, secure, and globally available databases</p>
          </div>
          <Button onClick={() => setShowNewModal(true)}>Deploy New Database</Button>
        </header>

        <div className="p-8 space-y-10">
          <div className="grid grid-cols-4 gap-6">
            {[
              { label: "Active Databases", value: databases.length },
              { label: "Queries Today", value: "48.2k" },
              { label: "Storage Used", value: "6.4 GB" },
              { label: "Avg Latency", value: "12ms" },
            ].map((stat, i) => (
              <Card key={i} className="bg-zinc-900 border-zinc-800">
                <CardHeader><CardTitle className="text-sm text-zinc-400">{stat.label}</CardTitle></CardHeader>
                <CardContent><div className="text-5xl font-bold">{stat.value}</div></CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">Your Databases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {databases.map((db) => (
                <Card key={db.id} className="bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition-all">
                  <CardHeader>
                    <div className="flex justify-between">
                      <CardTitle className="flex items-center gap-3">
                        <Database className="w-6 h-6 text-blue-500" />
                        {db.name}
                      </CardTitle>
                      <span className={`text-xs px-3 py-1 rounded-full ${db.status === 'running' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                        {db.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><span className="text-zinc-400">Engine:</span> <span className="font-mono uppercase">{db.engine}</span></div>
                      <div><span className="text-zinc-400">Region:</span> {db.region}</div>
                      <div><span className="text-zinc-400">Size:</span> {db.size}</div>
                      <div><span className="text-zinc-400">Queries:</span> {db.queries.toLocaleString()}</div>
                    </div>
                    <div className="flex gap-3">
                      <Button className="flex-1"><Play className="mr-2 h-4 w-4" /> Connect</Button>
                      <Button variant="outline" size="icon"><Settings className="h-4 w-4" /></Button>
                      <Button variant="outline" size="icon" className="text-red-400"><Trash2 className="h-4 w-4" /></Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
