// ---------------------------------------------------------------------------
// Edit your experience and education here. The page updates automatically.
// logo is optional: put an image in public/images and write e.g. "/images/dfds.png".
// Without a logo, the first letter of the company is shown instead.
// ---------------------------------------------------------------------------

type Role = {
  title: string
  dates: string
  description?: string
}

type Job = {
  company: string
  logo?: string
  details: string // e.g. "Part-time · Copenhagen, Denmark"
  roles: Role[]
  skills?: string[]
}

type School = {
  name: string
  logo?: string
  degree: string
  dates: string
}

const experience: Job[] = [
  {
    company: "DFDS",
    logo: "/images/dfds.jpg",
    details: "Part-time · Copenhagen, Denmark",
    roles: [
      {
        title: "Junior Business Analyst",
        dates: "Sep 2024 – Present",
        description:
          "In a team of 10 in the Logistics Transformation Office, working closely with local leaders across the divisions. Built analyses to support KPI reporting and decision-making in Power BI.",
      },
      {
        title: "Student Data Analyst",
        dates: "Dec 2023 – Aug 2024",
        description:
          "Part of the early-stage Logistics Transformation Office. Supported development of a digital trailer-rental platform, helping scale a new digital product. Built an AI sentiment analysis tool using public reviews.",
      },
    ],
    skills: ["Python", "TypeScript"],
  },
  {
    company: "Temper Media",
    details: "Part-time · Oslo, Norway",
    roles: [{ title: "Software Developer", dates: "Dec 2022 – Nov 2023" }],
  },
  {
    company: "Coop Norge",
    logo: "/images/coop.png",
    details: "Part-time · Tåsen, Oslo",
    roles: [{ title: "Store Associate", dates: "Jun 2020 – Aug 2022" }],
  },
]

const education: School[] = [
  {
    name: "Copenhagen Business School",
    logo: "/images/cbs.png",
    degree: "MSc EBA in Finance and Investments",
    dates: "Aug 2025 – Jun 2027",
  },
  {
    name: "Copenhagen Business School",
    logo: "/images/cbs.png",
    degree: "BSc in Economics and Business Administration",
    dates: "Aug 2022 – Jun 2025",
  },
   {
    name: "University of Oslo",
    logo: "/images/UiO_logo.png",
    degree: "BSc in Informatics",
    dates: "Aug 2020 – Jun 2023",
  },
]

// ---------------------------------------------------------------------------

function Logo({ name, src }: { name: string; src?: string }) {
  if (src) {
    return <img src={src} alt={name} className="h-12 w-12 shrink-0 rounded-lg object-cover" />
  }
  return (
    <div className="h-12 w-12 shrink-0 rounded-lg bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
      {name.charAt(0)}
    </div>
  )
}

function ExperienceItem({ job }: { job: Job }) {
  const single = job.roles.length === 1

  return (
    <div className="flex gap-4 py-5 border-b border-gray-200 last:border-b-0">
      <Logo name={job.company} src={job.logo} />
      <div className="flex-1">
        {single ? (
          // One role: show it like "Software Developer / Temper Media"
          <>
            <h4 className="font-semibold text-gray-800">{job.roles[0].title}</h4>
            <p className="text-sm text-gray-700">{job.company}</p>
            <p className="text-sm text-gray-500">{job.roles[0].dates}</p>
            <p className="text-sm text-gray-500">{job.details}</p>
            {job.roles[0].description && (
              <p className="mt-2 text-sm text-gray-700">{job.roles[0].description}</p>
            )}
          </>
        ) : (
          // Several roles at one company: company on top, roles on a timeline
          <>
            <h4 className="font-semibold text-gray-800">{job.company}</h4>
            <p className="text-sm text-gray-500">{job.details}</p>
            <ol className="mt-4 border-l-2 border-gray-200 ml-1">
              {job.roles.map((role) => (
                <li key={role.title} className="relative pl-5 pb-5 last:pb-0">
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-gray-400" />
                  <h5 className="font-semibold text-gray-800">{role.title}</h5>
                  <p className="text-sm text-gray-500">{role.dates}</p>
                  {role.description && (
                    <p className="mt-2 text-sm text-gray-700">{role.description}</p>
                  )}
                </li>
              ))}
            </ol>
          </>
        )}

        {job.skills && (
          <div className="mt-3 flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <span key={skill} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <section id="about" className="lg:w-1/2 w-2/3 mx-auto pt-24 pb-12 scroll-mt-24">
      <h2 className="lg:text-5xl text-3xl font-bold text-gray-800 text-center mb-20">
        About <span className="text-blue-600">.</span>
      </h2>

      <img
        src="/images/about-min.png"
        alt="Erik Mannsverk"
        className="w-full object-cover rounded-3xl"
      />

      <div className="mt-10 space-y-4 lg:text-lg text-base text-gray-800">
        <p>
          I'm a master's student in Finance and Investments at Copenhagen Business School, and I work
          part-time as a Junior Business Analyst at DFDS, where I build analyses and tools that
          support decision-making in logistics.
        </p>
        <p>
          Before moving into analytics, I worked as a software developer at Temper Media in Oslo.
          I've always enjoyed understanding how things work, and I like combining code and finance
          to solve real business problems.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-white shadow-md px-6 py-4">
        <h3 className="text-xl font-bold text-gray-800 pt-2">Experience</h3>
        {experience.map((job) => (
          <ExperienceItem key={job.company} job={job} />
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-white shadow-md px-6 py-4">
        <h3 className="text-xl font-bold text-gray-800 pt-2">Education</h3>
        {education.map((school) => (
          <div key={school.degree} className="flex gap-4 py-5 border-b border-gray-200 last:border-b-0">
            <Logo name={school.name} src={school.logo} />
            <div>
              <h4 className="font-semibold text-gray-800">{school.name}</h4>
              <p className="text-sm text-gray-700">{school.degree}</p>
              <p className="text-sm text-gray-500">{school.dates}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
