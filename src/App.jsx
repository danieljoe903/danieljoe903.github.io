import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
  // Shows result.
const [formStatus, setFormStatus] = useState("");

const [isSending, setIsSending] = useState(false);

// Runs every time user types in any input.
function handleChange(e) {

  // Take: input name attribut typed value cd c
  const { name, value } = e.target;

  // Update only one field.
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
}
// Runs when user clicks submit button.
async function handleSubmit(e) {

  // Stop normal HTML form refresh.
  e.preventDefault();

  setIsSending(true);
  setFormStatus("");

  try {

    // React sends message to your FastAPI backend.
    const response = await fetch("https://portfolio-api-5eul.onrender.com/contact", {
      method: "POST",

      // “I am sending JSON data headers
      headers: {
        "Content-Type": "application/json",
      },

      // into JSON text sent to backend.
      body: JSON.stringify(formData),
    });

    // Wait for FastAPI reply and convert it to JavaScript object.
    const data = await response.json();

    if (!response.ok){
      throw new Error(data.detail || "failed to send")
    }

    // Show backend message on screen.
    setFormStatus(data.message);

    // set timeout
    setTimeout(() => {
      setFormStatus("");
    },500);

    // Clear all input boxes after success.So form becomes empty again.
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // If something goes wrong: no internet backend off server crash
  } catch (error) {

    // show error meg
    setFormStatus("Failed to send message.");
    setTimeout(() => {
      setFormStatus("");
    },500);

    // Whether success or fail: Stop loading mode. Button changes back:
  } finally {
    setIsSending(false);
  }
}

  const skills = [
    "Python",
    "Flask",
    "FastAPI",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "MySQL",
    "Database Design",
    "Authentication Systems",
    "Computer Troubleshooting",
    "Network Support",
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    {
      title: "Backend Development",
      text: "Building practical backend systems with Python, database integration, application logic, and secure workflows.",
    },
    {
      title: "Technical Support",
      text: "Troubleshooting software, hardware, and network issues while helping users solve problems efficiently.",
    },
    {
      title: "Database & Application Logic",
      text: "Designing database-driven logic, authentication flows, and backend structures that support real-world applications.",
    },
  ];

  const projects = [
    {
      title: "PEA-bridge Backend",
      desc: "A backend-focused real estate platform built with Python, Flask, and MySQL. It handles user authentication, property listings, and secure verification workflows.",
      status: "Completed",
      linkLabel: "Visit Site",
      link: "https://www.peabridge.com",
      tags: ["Python", "Flask", "MySQL", "Authentication", "Backend API"],
    },
    {
      title: "Flask E-commerce Project",
      desc: "A backend-driven e-commerce web application built with Flask, MySQL, and Bootstrap, featuring product management, user authentication, admin dashboard functionality, and secure database integration.",
      status: "Upcoming",
      linkLabel: "Coming Soon",
      link: "#",
      tags: ["FastAPI", "Python", "REST API", "Async", "Backend"],
    },
    {
      title: "Database Design Project",
      desc: "Designed and implemented relational database structures for real-world applications including user systems, property listings, and transaction tracking using MySQL.",
      status: "Completed",
      linkLabel: "View GitHub",
      link: "https://github.com/danieljoe903",
      tags: ["MySQL", "Database Design", "Data Modeling", "Backend"],
    },
  ];

  const education = [
    "Certificate in Software Development — Moat Academy (2025)",
    "Diploma in Computer Appreciation / Desktop Publishing — Oxbridge Computer School and Internet Services, Aba (2020)",
    "West African Senior School Certificate Examination — Chritlyn International School, Aba, Abia State (2019)",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Daniel Chukwuemeka
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-lime-400">
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-lime-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.12),transparent_26%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_22%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center lg:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="inline-flex rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-1.5 text-sm font-medium text-lime-300">
              Python Backend Developer • Computer Technician
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building practical, secure, and reliable digital solutions.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              I am Daniel Chukwuemeka, a Python-focused backend developer and computer technician focused on building practical, secure, and reliable web applications. I enjoy creating useful solutions that combine strong application logic, clean structure, and real business value.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-300"
              >
                View My Work
              </a>
              <a
                href="/Daniel_Chukwuemeka_CV.pdf"
                download
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-lime-400/50 hover:text-lime-300"
              >
                Download CV
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
              <a
                href="https://github.com/danieljoe903"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 px-4 py-2 text-slate-200 transition hover:border-lime-400/50 hover:text-lime-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-joseph-239a3a402/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 px-4 py-2 text-slate-200 transition hover:border-lime-400/50 hover:text-lime-300"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
              <img
                src="./images/new.png"
                alt="Daniel Chukwuemeka"
                className="h-[460px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">About Me</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Professional, reliable, and focused on growth.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              I have a background in computer maintenance and technical support, alongside growing expertise in software development.
              My focus is on building practical, secure, and reliable digital products with strong backend structure.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              I enjoy building practical technology that solves real-world problems. One of my key projects is
              <span className="font-semibold text-white"> PEA-bridge</span>, a platform designed to connect agents,
              buyers, and sellers in one secure real estate ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-lime-400/10 to-blue-400/10 p-8 shadow-lg shadow-black/10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">Quick Info</p>
            <div className="mt-6 space-y-5 text-slate-200">
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="mt-1 font-medium">Ikeja, Lagos</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-1 break-all font-medium">danieljoe903@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="mt-1 font-medium">08165034782</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Current Focus</p>
                <p className="mt-1 font-medium">Python Backend Development, Databases, and Tech</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">Skills</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Technical strengths</h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            My skill set combines Python backend development, database knowledge, and hands-on technical support, helping me understand both application logic and the systems behind it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-medium text-lime-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">Services</p>
          <h2 className="mt-3 text-3xl font-bold text-white">What I can do</h2>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10"
            >
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 leading-8 text-slate-300">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">Projects</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Selected work</h2>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs font-medium text-lime-300">
                  {project.status}
                </span>
              </div>
              <p className="mt-4 leading-8 text-slate-300">{project.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                className="mt-6 inline-flex rounded-2xl bg-lime-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-lime-300"
              >
                {project.linkLabel}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 pb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">Education & Certifications</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Academic background</h2>
          <div className="mt-8 grid gap-4">
            {education.map((item, index) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-slate-200"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-r from-lime-400/10 via-white/5 to-blue-400/10 p-8 shadow-lg shadow-black/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Open to junior roles, internships, and freelance opportunities.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            Let’s work together on useful digital products. Send me a message directly from this portfolio.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="grid gap-4">
              <a
                href="tel:08165034782"
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-lime-400/40"
              >
                <p className="text-sm text-slate-400">Phone</p>
                <p className="mt-2 font-semibold text-white">08165034782</p>
              </a>

              <a
                href="mailto:danieljoe903@gmail.com"
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-lime-400/40"
              >
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-2 break-all font-semibold text-white">danieljoe903@gmail.com</p>
              </a>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-lime-400/40">
                <p className="text-sm text-slate-400">Address</p>
                <p className="mt-2 font-semibold text-white">
                  86 Irewole Street, off Opebi road, Ikeja, Lagos
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-6"
            >
              <div className="grid gap-4">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-lime-400"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-lime-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-lime-400"
                    placeholder="Write your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="rounded-2xl bg-lime-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>

                {formStatus && (
                  <p className="text-sm text-lime-300">{formStatus}</p>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Daniel Chukwuemeka. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/danieljoe903"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-lime-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-joseph-239a3a402/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-lime-400"
            >
              LinkedIn
            </a>
            <a
              href="mailto:danieljoe903@gmail.com"
              className="transition hover:text-lime-400"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
