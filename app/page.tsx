export default function Home() {
  const faqs = [
    {
      q: "How does it connect to Jira?",
      a: "ChangelogSync uses Jira webhooks and the REST API. You provide your Jira domain and an API token — setup takes under 5 minutes."
    },
    {
      q: "Can I customize the changelog format?",
      a: "Yes. Choose from built-in templates or write your own. Control tone, grouping by label or epic, and branding colors."
    },
    {
      q: "What counts as a completed ticket?",
      a: "Any ticket that transitions to your configured \"Done\" status triggers the AI summary. You can filter by project, label, or issue type."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Jira → Changelog, automated
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate changelogs<br />
          <span className="text-[#58a6ff]">from Jira ticket updates</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          ChangelogSync watches your Jira board and uses AI to turn completed tickets into polished, customer-facing release notes — no copy-pasting required.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get started for $35/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Webhook-driven", "AI-powered summaries", "Custom templates", "Branded output", "Slack notifications", "Public changelog page"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$35<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-6">per workspace</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Jira projects",
              "AI changelog generation",
              "Custom branding & templates",
              "Public changelog page",
              "Slack & email notifications",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start free trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ChangelogSync. All rights reserved.
      </footer>
    </main>
  );
}
