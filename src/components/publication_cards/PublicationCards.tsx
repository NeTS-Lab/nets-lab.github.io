// src/components/Cards/PublicationCard.tsx (for Preact)
import { h } from "preact";

type Props = {
  title: string;
  authors: string;
  venue: string;
  codeUrl?: string;
  paperUrl?: string;
};

export default function PublicationCard({ title, authors, venue, codeUrl, paperUrl }: Props) {
    return (
      <div class="bg-zinc-900 rounded-2xl shadow-lg p-6 w-full">
        <div class="mb-4">
          <h3 class="text-white text-xl font-semibold mb-2">{title}</h3>
          <p class="text-gray-300 text-sm mb-1">{authors}</p>
          <p class="text-gray-400 text-sm italic">{venue}</p>
        </div>
        <div class="flex gap-4 mt-4">
          {paperUrl && (
            <a
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition-colors"
            >
              Paper
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-2 rounded-md transition-colors"
            >
              Code
            </a>
          )}
        </div>
      </div>
    );
  }
  
