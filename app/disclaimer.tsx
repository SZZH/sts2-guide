export default function ContentDisclaimer() {
  return (
    <div className="bg-[#2b1408] border border-orange-500/60 rounded-lg px-3 py-2">
      <div className="flex items-start gap-2">
        <span className="text-sm leading-5">ℹ️</span>
        <p className="text-xs leading-5 text-orange-100/95">
          This guide is based on publicly available information and Early Access gameplay.
          Game data may change as development continues. Character descriptions and lore are based on official sources.
        </p>
      </div>
    </div>
  );
}
