import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-8 bg-white dark:bg-black">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={40}
          priority
        />
        <h1 className="mt-8 text-4xl font-bold text-black dark:text-white text-center">
          Vercel + Datadog Demo
        </h1>
        <p className="mt-4 max-w-lg text-center text-lg text-zinc-700 dark:text-zinc-300">
          This is a working demo app deployed on Vercel, fully compatible with Next.js 14.
          Observability with Datadog RUM & Tracing can be verified here.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white transition hover:bg-zinc-800"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logo"
              width={20}
              height={20}
            />
            Deploy Your Own
          </a>

          <a
            href="https://www.datadoghq.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-3 transition hover:bg-zinc-100 dark:border-zinc-50 dark:hover:bg-zinc-900"
          >
            Visit Datadog
          </a>
        </div>
      </main>
    </div>
  );
}
