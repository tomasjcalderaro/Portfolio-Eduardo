# Graph Report - dr-eduardo-arguello  (2026-10-04)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 180 nodes · 298 edges · 15 communities (9 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d13572c6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- Home.tsx
- App.tsx
- devDependencies
- compilerOptions
- compilerOptions
- ProcedureDetail.tsx
- dependencies
- scripts
- Producers.tsx
- ProcedureCard.tsx
- tsconfig.json

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `Home()` - 16 edges
3. `compilerOptions` - 16 edges
4. `react` - 14 edges
5. `react-router-dom` - 12 edges
6. `App()` - 11 edges
7. `supabase` - 8 edges
8. `ContactSection()` - 7 edges
9. `Footer()` - 7 edges
10. `Navbar()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `Home()`  [EXTRACTED]
  src/App.tsx → src/pages/Home.tsx
- `Home()` --calls--> `ContactSection()`  [EXTRACTED]
  src/pages/Home.tsx → src/components/forms/ContactSection.tsx
- `Home()` --calls--> `Footer()`  [EXTRACTED]
  src/pages/Home.tsx → src/components/layout/Footer.tsx
- `Home()` --calls--> `Navbar()`  [EXTRACTED]
  src/pages/Home.tsx → src/components/layout/Navbar.tsx
- `Home()` --calls--> `Modal()`  [EXTRACTED]
  src/pages/Home.tsx → src/components/ui/Modal.tsx

## Import Cycles
- None detected.

## Communities (15 total, 6 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.09
Nodes (25): name, private, type, version, autoprefixer, @babel/core, babel-plugin-react-compiler, @emailjs/browser (+17 more)

### Community 1 - "Home.tsx"
Cohesion: 0.15
Nodes (14): framer-motion, react-icons, FadeInSection(), Props, InstagramButton(), WhatsappButton(), Home(), About() (+6 more)

### Community 2 - "App.tsx"
Cohesion: 0.19
Nodes (15): react, react-dom, react-router-dom, swiper, App(), ScrollToTop(), ProtectedRoute(), ProtectedRouteProps (+7 more)

### Community 3 - "devDependencies"
Cohesion: 0.10
Nodes (20): devDependencies, autoprefixer, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+12 more)

### Community 4 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution (+10 more)

### Community 5 - "compilerOptions"
Cohesion: 0.11
Nodes (17): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+9 more)

### Community 6 - "ProcedureDetail.tsx"
Cohesion: 0.30
Nodes (9): ContactSection(), Footer(), Props, Navbar(), Modal(), Props, Procedure, ProcedureDetail() (+1 more)

### Community 7 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, @emailjs/browser, framer-motion, react, react-dom, react-icons, react-router-dom, @supabase/supabase-js (+1 more)

### Community 8 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

## Knowledge Gaps
- **90 isolated node(s):** `Props`, `Props`, `Props`, `ProtectedRouteProps`, `Props` (+85 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 101 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **What connects `Props`, `Props`, `Props` to the rest of the system?**
  _90 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.0873015873015873 - nodes in this community are weakly interconnected._
- **Why does `react` connect `App.tsx` to `package.json`, `Home.tsx`, `ProcedureDetail.tsx`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Why does `react-router-dom` connect `App.tsx` to `package.json`, `Producers.tsx`, `ProcedureDetail.tsx`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._