export default function ContentDisclaimer() {
  return (
    <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mb-8">
      <div className="flex items-start gap-3">
        <span className="text-2xl">ℹ️</span>
        <div className="flex-1">
          <h3 className="font-semibold text-orange-400 mb-1">Content Notice</h3>
          <p className="text-sm text-muted-foreground">
            This guide is based on publicly available information and Early Access gameplay. 
            Game data may change as development continues. Character descriptions and lore are based on official sources.
          </p>
        </div>
      </div>
    </div>
  );
}
