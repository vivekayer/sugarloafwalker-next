type Props = { email: string };

export default function ContactSimple({ email }: Props) {
  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title">Contact</h2>
        <div className="glass p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-200">
            Email me at{" "}
            <a
              href={`mailto:${email}`}
              className="decoration-brand-500 hover:text-white"
            >
              {email}
            </a>
          </p>
          <a
            href={`mailto:${email}`}
            className="px-5 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 font-medium"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
