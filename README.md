# Movie

Nuxt 4 + Vue 3 + TypeScript. Линтинг и форматирование — Biome.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Сервер: `http://localhost:3000`

## Scripts

| Script | Описание |
| --- | --- |
| `npm run dev` | Dev-сервер |
| `npm run build` | Production-сборка |
| `npm run preview` | Превью production-сборки |
| `npm run generate` | Статическая генерация |
| `npm run typecheck` | Проверка типов (`vue-tsc`) |
| `npm run check` | Biome: lint + format check |
| `npm run check:fix` | Biome: автофикс |
| `npm run lint` | Только lint |
| `npm run lint:fix` | Lint с автофиксом |
| `npm run format` | Проверка форматирования |
| `npm run format:fix` | Форматирование с записью |

## Stack

- **Nuxt** `^4.5`
- **Vue** `^3.5`
- **TypeScript** `~5.9` (не 7.x — `vue-tsc` пока несовместим)
- **vue-tsc** `^3.3`
- **Biome** `2.5`
