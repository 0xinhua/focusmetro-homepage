export function MetroPhoneMockup() {
  return (
    <div className="relative mx-auto w-[240px] sm:w-[260px] lg:w-[280px]">
      <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_50%_40%,rgb(212_160_23_/_0.1),transparent_65%)]" />

      <div className="animate-phone-float relative rounded-[2.2rem] bg-[#2a3340] p-[9px] shadow-[0_24px_60px_-22px_rgba(24,24,27,0.5)]">
        <div className="overflow-hidden rounded-[1.75rem] bg-zinc-950 text-zinc-100">
          <div className="flex min-h-[420px] flex-col px-5 pb-8 pt-3 sm:min-h-[440px]">
            <div className="mx-auto h-[22px] w-[96px] rounded-full bg-black" />

            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                Remaining
              </p>
              <p className="mt-3 font-mono text-[4.25rem] font-medium leading-none tracking-tight text-white tabular-nums">
                18:42
              </p>
              <p className="mt-4 text-sm text-zinc-400">25 min ride</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
