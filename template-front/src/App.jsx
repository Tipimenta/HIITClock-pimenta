import './App.css';

import { PencilIcon } from 'lucide-react';

import { Button } from './components/ui/button';

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-zinc-900 transition-all">
      <div className="relative flex flex-col items-center">
        <div className="font-orbitron flex items-center text-[2.5rem] font-medium text-emerald-500 transition-all select-none">
          <h2>Contador</h2>
        </div>

        <div className="gab-8 visible absolute -bottom-20 left-1/2 flex -translate-x-1/2 opacity-100 transition-all">
          <Button
            size="icon"
            type="button"
            variant="outline"
            title="Click para editar o contador"
            className="rounded-full bg-transparent text-white hover:bg-amber-900"
          >
            <PencilIcon className="size-4" />

            <span className="sr-only">Editar contador</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
