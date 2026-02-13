export default function ContentDisclaimer() {
  return (
    <div className="sticky top-20 z-40 px-4">
      <div className="container mx-auto">
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
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
      </div>
    </div>
  );
}
