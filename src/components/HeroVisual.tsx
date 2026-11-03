// Developer-themed SVG visual for the hero section.
// A stylized code editor / terminal window with floating tech elements.

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg">
      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-purple-600/10 rounded-3xl blur-[60px] animate-glow-pulse" />

      {/* Main terminal / code editor window — floating + hover glow */}
      <div className="editor-float rounded-2xl border border-border-dark bg-midnight-800/90 backdrop-blur-sm shadow-[0_0_40px_rgba(124,58,237,0.10)] overflow-hidden hover:shadow-[0_0_50px_rgba(124,58,237,0.20)] hover:scale-[1.01] transition-all duration-500">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border-dark/60 bg-midnight-900/50">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <span className="text-xs font-mono text-text-muted ml-2">
            portfolio.tsx
          </span>
        </div>

        {/* Code content */}
        <div className="p-5 font-mono text-sm leading-relaxed">
          <Line num={1}>
            <Keyword>const</Keyword> <Var>developer</Var> <Op>=</Op> <Bracket>{"{"}</Bracket>
          </Line>
          <Line num={2}>
            {"  "}<Prop>name</Prop><Op>:</Op> <Str>"Harish G S"</Str><Op>,</Op>
          </Line>
          <Line num={3}>
            {"  "}<Prop>role</Prop><Op>:</Op> <Str>"Full-Stack Developer"</Str><Op>,</Op>
          </Line>
          <Line num={4}>
            {"  "}<Prop>skills</Prop><Op>:</Op> <Op>[</Op><Str>"React"</Str><Op>,</Op> <Str>"Spring Boot"</Str><Op>,</Op> <Str>"Node.js"</Str><Op>]</Op><Op>,</Op>
          </Line>
          <Line num={5}>
            {"  "}<Prop>passion</Prop><Op>:</Op> <Str>"Building great software"</Str><Op>,</Op>
          </Line>
          <Line num={6}>
            {"  "}<Prop>learning</Prop><Op>:</Op> <Keyword>true</Keyword><Op>,</Op>
          </Line>
          <Line num={7}>
            <Bracket>{"}"}</Bracket><Op>;</Op>
          </Line>
          <Line num={8}>&nbsp;</Line>
          <Line num={9}>
            <Comment>{"// Ready to build something amazing"}</Comment>
            <span className="inline-block w-2 h-4 bg-purple-500 ml-1 animate-[typing-cursor_1s_infinite]" />
          </Line>
        </div>
      </div>

      {/* Floating elements — independent physics */}
      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-midnight-600 border border-border-dark flex items-center justify-center float-icon-1 shadow-lg shadow-purple-600/10">
        <span className="text-2xl">⚛️</span>
      </div>
      <div className="absolute -bottom-3 -left-3 w-14 h-14 rounded-xl bg-midnight-600 border border-border-dark flex items-center justify-center float-icon-2 shadow-lg shadow-purple-600/10">
        <span className="text-xl">🚀</span>
      </div>
      <div className="absolute top-1/2 -right-6 w-12 h-12 rounded-lg bg-midnight-600 border border-border-dark flex items-center justify-center float-icon-3 shadow-lg shadow-purple-600/10">
        <span className="text-lg">☕</span>
      </div>
    </div>
  );
}

// ── Syntax-highlighted code sub-components ──

function Line({ num, children }: { num: number; children: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="w-6 text-right text-text-muted/40 mr-4 select-none text-xs leading-6">
        {num}
      </span>
      <span className="leading-6">{children}</span>
    </div>
  );
}

function Keyword({ children }: { children: React.ReactNode }) {
  return <span className="text-purple-400 font-medium">{children}</span>;
}

function Var({ children }: { children: React.ReactNode }) {
  return <span className="text-purple-300">{children}</span>;
}

function Prop({ children }: { children: React.ReactNode }) {
  return <span className="text-purple-300/80">{children}</span>;
}

function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-green-300">{children}</span>;
}

function Op({ children }: { children: React.ReactNode }) {
  return <span className="text-text-muted">{children}</span>;
}

function Bracket({ children }: { children: React.ReactNode }) {
  return <span className="text-yellow-300/80">{children}</span>;
}

function Comment({ children }: { children: React.ReactNode }) {
  return <span className="text-text-muted/50 italic">{children}</span>;
}
