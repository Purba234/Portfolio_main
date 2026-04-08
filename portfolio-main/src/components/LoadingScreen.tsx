export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center fancy-gradient">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 animate-spin rounded-full border-2 border-accent/40 border-t-accent2" />
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-text/85">
          Loading
        </p>
      </div>
    </div>
  );
}
