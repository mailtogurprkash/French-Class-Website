import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Menu,
  X,
  ArrowRight,
  Check,
  Star,
  CalendarDays,
  BookOpen,
  Users,
  Globe2,
  Sparkles,
  Mail,
  Clock,
  ChevronDown,
  Play,
  MessageCircle,
  ShieldCheck,
  Monitor,
  Languages,
  MapPin,
} from "lucide-react";
import "./styles.css";

const nav = [
  ["Home", "home"],
  ["Why Esprit", "about"],
  ["Courses", "courses"],
  ["How it works", "how"],
  ["Teacher", "teachers"],
  ["Reviews", "testimonials"],
  ["Resources", "resources"],
  ["Contact", "contact"],
];
const benefits = [
  "Live, engaging lessons designed specifically for young learners",
  "Small groups so every student gets time to speak",
  "CEFR-aligned progression parents can understand",
  "Confidence-building practice without pressure",
];
const courses = [
  {
    id: "kids",
    title: "French Foundations",
    age: "Kids • Beginner",
    level: "A1–A2",
    price: "From $XX / month",
    text: "A playful first step into French through stories, games, vocabulary, pronunciation and simple conversation.",
    features: [
      "Weekly live classes",
      "Speaking + listening practice",
      "Parent progress updates",
    ],
  },
  {
    id: "teens",
    title: "French Confidence",
    age: "Teens • Beginner–Intermediate",
    level: "A1–B2",
    price: "From $XX / month",
    text: "Build practical French skills for school, travel and real conversations while becoming a more confident speaker.",
    features: [
      "School-supportive practice",
      "Reading + writing skills",
      "CEFR-aligned progression",
    ],
  },
  {
    id: "school",
    title: "French School Support",
    age: "Grades 1–12",
    level: "School French",
    price: "From $XX / month",
    text: "Targeted support for Canadian students who want stronger grades, better comprehension and more confidence.",
    features: ["Homework support", "Test preparation", "Personalized practice"],
  },
];
const testimonials = [
  [
    "My child looks forward to French class every week. It feels fun, but we can also see real progress.",
    "Parent of a young learner",
  ],
  [
    "I am much more comfortable speaking French now. The small class makes it easier to participate.",
    "Teen student",
  ],
  ["Clear, patient teaching and great communication with parents.", "Parent"],
  [
    "The lessons have helped my child stop being afraid of making mistakes in French.",
    "Parent of a student",
  ],
];
const faqs = [
  [
    "What ages do you teach?",
    "Esprit is designed for kids and teens, with support through Grade 12.",
  ],
  [
    "Are classes live or recorded?",
    "Classes are live and interactive. Students speak, listen and participate in real time.",
  ],
  [
    "What French levels do you offer?",
    "The site is designed around CEFR levels. Replace the sample A1–B2 range with your confirmed levels before launch.",
  ],
  [
    "How does the trial work?",
    "Families can request a trial lesson to meet the teacher, experience the class and decide if Esprit is a good fit.",
  ],
  [
    "Are classes private or group-based?",
    "Our core offer is small-group learning. Private lessons can be added later if you decide to offer them.",
  ],
];

function Section({ id, eyebrow, title, children, dark = false }) {
  return (
    <section id={id} className={"section " + (dark ? "dark" : "")}>
      <div className="container">
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
function App() {
  const [open, setOpen] = useState(false),
    [submitted, setSubmitted] = useState(false),
    [courseFilter, setCourseFilter] = useState("all"),
    [faq, setFaq] = useState(null),
    [review, setReview] = useState(0);
  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const visible = courses.filter(
    (c) => courseFilter === "all" || c.id === courseFilter,
  );
  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => scroll("home")}>
            <span className="brandmark">É</span>
            <span>Esprit</span>
          </button>
          <nav className={open ? "mobileOpen" : ""}>
            {nav.map(([n, id]) => (
              <button key={id} onClick={() => scroll(id)}>
                {n}
              </button>
            ))}
            <button className="navCta" onClick={() => scroll("contact")}>
              Book a free trial <ArrowRight size={15} />
            </button>
          </nav>
          <button className="menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <section id="home" className="hero">
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="pill">
                <Sparkles size={14} /> Study Globally. Learn Locally.
              </div>
              <h1>
                Make French a skill they <em>love using.</em>
              </h1>
              <p className="heroText">
                Warm, live online French classes that help young learners speak
                with confidence, build strong foundations and make steady
                progress.
              </p>
              <div className="actions">
                <button className="primary" onClick={() => scroll("contact")}>
                  Book a free trial <ArrowRight size={18} />
                </button>
                <button className="secondary" onClick={() => scroll("courses")}>
                  Explore courses
                </button>
              </div>
              <div className="heroProof">
                <div className="miniStats">
                  <strong>5+</strong>
                  <span>years experience</span>
                </div>
                <div className="miniStats">
                  <strong>1:1</strong>
                  <span>classes</span>
                </div>
                <div className="miniStats">
                  <strong>A1–B2</strong>
                  <span>sample CEFR range</span>
                </div>
              </div>
            </div>
            <div className="heroVisual">
              <div className="floating top">
                <span className="dot"></span> Live class · 5:00 PM
              </div>
              <div className="lessonWindow">
                <div className="windowTop">
                  <span>
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                  <small>Esprit classroom</small>
                  <span>•••</span>
                </div>
                <div className="lessonMain">
                  <div className="avatarBig">É</div>
                  <div className="lessonTitle">
                    Bonjour, Léa! <span>👋</span>
                  </div>
                  <p>Let's practise today's conversation.</p>
                  <div className="conversation">
                    <span>Teacher</span>
                    <strong>Comment ça va?</strong>
                  </div>
                  <div className="conversation student">
                    <span>You</span>
                    <strong>Ça va très bien!</strong>
                  </div>
                  <div className="lessonBar">
                    <span style={{ width: "76%" }}></span>
                  </div>
                  <small>76% lesson complete</small>
                </div>
              </div>
              <div className="floating bottom">
                <Check size={16} /> Speaking practice completed
              </div>
            </div>
          </div>
        </section>
        <div className="trustBar">
          <div className="container trustItems">
            <span>
              <ShieldCheck size={17} /> Safe, supportive learning
            </span>
            <span>
              <Monitor size={17} /> 100% online
            </span>
            <span>
              <Users size={17} /> Small classes
            </span>
            <span>
              <Languages size={17} /> CEFR-aligned
            </span>
            <span>
              <Globe2 size={17} /> International students welcome
            </span>
          </div>
        </div>
        <Section
          id="about"
          eyebrow="Why Esprit"
          title="More than a French class. A place to build confidence."
        >
          <div className="featureLayout">
            <div>
              <p className="lead">
                Esprit combines structure with warmth. Students get a clear
                learning path, plenty of opportunities to speak and a teacher
                who makes mistakes feel like part of learning.
              </p>
              <div className="benefits">
                {benefits.map((x) => (
                  <div className="benefit" key={x}>
                    <span>
                      <Check size={16} />
                    </span>
                    {x}
                  </div>
                ))}
              </div>
              <button className="textBtn" onClick={() => scroll("how")}>
                See how learning works <ArrowRight size={16} />
              </button>
            </div>
            <div className="metricPanel">
              <div className="panelLabel">The Esprit approach</div>
              <div className="metric">
                <span>01</span>
                <div>
                  <strong>Learn</strong>
                  <small>
                    Understand the language through clear, age-appropriate
                    teaching.
                  </small>
                </div>
              </div>
              <div className="metric">
                <span>02</span>
                <div>
                  <strong>Speak</strong>
                  <small>Use French during class—not just memorize it.</small>
                </div>
              </div>
              <div className="metric">
                <span>03</span>
                <div>
                  <strong>Grow</strong>
                  <small>
                    Build confidence and move toward the next level.
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="proofStrip">
            <Star fill="currentColor" />
            <strong>
              “Learning French should leave students feeling proud of what they
              can say.”
            </strong>
            <span>Esprit teaching philosophy</span>
          </div>
        </Section>
        <Section
          id="courses"
          eyebrow="Courses & pricing"
          title="A clear place to start, whatever their level."
        >
          <div className="courseTabs">
            <button
              className={courseFilter === "all" ? "active" : ""}
              onClick={() => setCourseFilter("all")}
            >
              All courses
            </button>
            <button
              className={courseFilter === "kids" ? "active" : ""}
              onClick={() => setCourseFilter("kids")}
            >
              Kids
            </button>
            <button
              className={courseFilter === "teens" ? "active" : ""}
              onClick={() => setCourseFilter("teens")}
            >
              Teens
            </button>
            <button
              className={courseFilter === "school" ? "active" : ""}
              onClick={() => setCourseFilter("school")}
            >
              School support
            </button>
          </div>
          <div className="courseGrid">
            {visible.map((c) => (
              <article className="course" key={c.id}>
                <div className="courseTop">
                  <div className="courseIcon">
                    <BookOpen />
                  </div>
                  <span className="level">{c.level}</span>
                </div>
                <span className="tag">{c.age}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ul>
                  {c.features.map((f) => (
                    <li key={f}>
                      <Check size={15} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="courseBtn" onClick={() => scroll("contact")}>
                  Ask about this course <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
          <p className="fine">
            Pricing can be discussed after a trial class, once we understand
            your child’s goals, level and preferred learning format.
          </p>
        </Section>
        <Section
          id="how"
          eyebrow="How it works"
          title="Simple for parents. Engaging for students."
        >
          <div className="steps">
            <div className="step">
              <span>01</span>
              <div>
                <h3>Choose a course</h3>
                <p>Tell us your child's age, grade and current French level.</p>
              </div>
            </div>
            <div className="step">
              <span>02</span>
              <div>
                <h3>Meet the teacher</h3>
                <p>
                  Book a trial lesson and experience the Esprit classroom before
                  committing.
                </p>
              </div>
            </div>
            <div className="step">
              <span>03</span>
              <div>
                <h3>Start learning</h3>
                <p>
                  Join weekly live classes and build skills through conversation
                  and guided practice.
                </p>
              </div>
            </div>
            <div className="step">
              <span>04</span>
              <div>
                <h3>Track progress</h3>
                <p>
                  Use clear milestones to understand what your child can do and
                  what's next.
                </p>
              </div>
            </div>
          </div>
          <div className="videoCard">
            <div className="playCircle">
              <Play fill="currentColor" />
            </div>
            <div>
              <span>Inside an Esprit lesson</span>
              <h3>Speak. Practise. Laugh. Learn.</h3>
              <p>
                A visual placeholder for a future 30–60 second classroom video.
              </p>
            </div>
            <button onClick={() => scroll("contact")}>
              See a trial lesson <ArrowRight size={16} />
            </button>
          </div>
        </Section>
        <Section
          id="teachers"
          eyebrow="Teacher"
          title="Patient teacher. Clear guidance. Happy learners."
        >
          <div className="teacherGrid">
            <div className="teacherVisual">
              <img
                src="/src/assets/teacher-protrait.jpg"
                alt="Teacher portrait"
                className="teacherPortrait"
              />
              <div className="teacherBadge">
                <Check size={15} />
              </div>
            </div>
            <div>
              <p className="lead">
                Our approach combines strong French language knowledge with the
                patience and energy young learners need.
              </p>
              <div className="credential">
                <Globe2 />
                <div>
                  <strong>Teacher certification</strong>
                  <span>
                    TEF from Canada — completed through a recognized exam.
                  </span>
                </div>
              </div>
              <div className="credential">
                <Users />
                <div>
                  <strong>Designed for young learners</strong>
                  <span>
                    Lessons adapt to age, level, confidence and school goals.
                  </span>
                </div>
              </div>
              <div className="credential">
                <MessageCircle />
                <div>
                  <strong>Parent-friendly communication</strong>
                  <span>
                    Clear expectations and simple progress conversations.
                  </span>
                </div>
              </div>
              <button className="secondary" onClick={() => scroll("contact")}>
                Meet the teacher at a trial
              </button>
            </div>
          </div>
        </Section>
        <Section
          id="testimonials"
          eyebrow="Student & parent reviews"
          title="Progress parents can see. Confidence students can feel."
          dark
        >
          <div className="reviewFeatured">
            <div className="reviewQuote">
              <div className="stars">★★★★★</div>
              <blockquote>{testimonials[review][0]}</blockquote>
              <strong>{testimonials[review][1]}</strong>
            </div>
            <div className="reviewSide">
              <span>What families say</span>
              {testimonials.map(([q, a], i) => (
                <button
                  key={a}
                  className={review === i ? "selected" : ""}
                  onClick={() => setReview(i)}
                >
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{a}</strong>
                    <small>{q.slice(0, 72)}...</small>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </Section>
        <Section
          id="resources"
          eyebrow="Blog & resources"
          title="Helpful French resources for families."
        >
          <div className="resourceGrid">
            <article className="resource">
              <span>For parents</span>
              <h3>Supportive resources for home practice</h3>
              <p>
                I provide books and learning materials during the classes to
                help children keep practising in a simple, consistent way.
              </p>
            </article>
            <article className="resource">
              <span>For students</span>
              <h3>Practical French phrases for everyday confidence</h3>
              <p>
                Useful expressions to help learners speak more naturally and
                feel comfortable in class.
              </p>
            </article>
            <article className="leadMagnet">
              <Sparkles />
              <span>Free 3-Day Trial</span>
              <h3>Start French in 3 days</h3>
              <p>
                Short daily activities to help a new learner say their first
                French words and phrases.
              </p>
              <button onClick={() => scroll("contact")}>
                Get the challenge <ArrowRight size={16} />
              </button>
            </article>
          </div>
        </Section>
        <section className="faq">
          <div className="container">
            <div className="eyebrow">Questions</div>
            <h2>Before you book, here's what parents usually ask.</h2>
            <div className="faqList">
              {faqs.map(([q, a], i) => (
                <div className={"faqItem " + (faq === i ? "open" : "")} key={q}>
                  <button onClick={() => setFaq(faq === i ? null : i)}>
                    <strong>{q}</strong>
                    <ChevronDown size={20} />
                  </button>
                  {faq === i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container contactGrid">
            <div>
              <div className="eyebrow">Book a trial</div>
              <h2>Let's find the right French class for your child.</h2>
              <p>
                Start with a friendly trial lesson. Meet the teacher, see the
                classroom and ask your questions—no pressure.
              </p>
              <div className="contactPoints">
                <div>
                  <CalendarDays />
                  <span>
                    <strong>Book on Your Time</strong>Pick a date and time that
                    works best for you.
                  </span>
                </div>
                <div>
                  <MapPin />
                  <span>
                    <strong>Study Globally. Learn Locally.</strong>Open to
                    students worldwide.
                  </span>
                </div>
                <div>
                  <Mail />
                  <span>
                    <strong>Questions?</strong>espritclasses@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <form
              action="https://formsubmit.co/espritclasses@gmail.com"
              method="POST"
              onSubmit={() => setSubmitted(true)}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New trial request from Esprit website"
              />
              <input
                type="hidden"
                name="_next"
                value="https://example.com/thank-you"
              />
              {submitted ? (
                <div className="success">
                  <Check size={34} />
                  <h3>Thanks! Your request is in.</h3>
                  <p>
                    We’ll be in touch soon with the next steps for your trial.
                  </p>
                </div>
              ) : (
                <>
                  <div className="formHead">
                    <span>Trial request</span>
                    <small>Usually takes 1 minute</small>
                  </div>
                  <label>
                    Parent / guardian name
                    <input required name="name" placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                    />
                  </label>
                  <div className="formRow">
                    <label>
                      Student age / grade
                      <input
                        name="student_age_grade"
                        placeholder="e.g. 10 / Grade 5"
                      />
                    </label>
                    <label>
                      French level
                      <select name="french_level">
                        <option>Not sure / beginner</option>
                        <option>Some French</option>
                        <option>Intermediate</option>
                      </select>
                    </label>
                  </div>
                  <label>
                    What are you looking for?
                    <select name="interest">
                      <option>Weekly group classes</option>
                      <option>School support</option>
                      <option>Private lessons</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <button className="primary" type="submit">
                    Request a trial <ArrowRight size={18} />
                  </button>
                  <small className="formNote">
                    Trial policy: [free]. Replace this sample text with your
                    confirmed policy.
                  </small>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer">
          <div>
            <button className="brand">
              <span className="brandmark">É</span>
              <span>Esprit</span>
            </button>
            <p>Warm, engaging online French classes for kids and teens.</p>
          </div>
          <div>
            <strong>Explore</strong>
            {nav.slice(1, 6).map(([n, id]) => (
              <button key={id} onClick={() => scroll(id)}>
                {n}
              </button>
            ))}
          </div>
          <div>
            <strong>Start learning</strong>
            <button onClick={() => scroll("contact")}>Book a trial</button>
            <button onClick={() => scroll("resources")}>7-Day Challenge</button>
          </div>
        </div>
        <div className="copyright">
          © 2026 Esprit French · Online French learning for young learners.
        </div>
      </footer>
      <div className="mobileCta">
        <button onClick={() => scroll("contact")}>
          Book a free trial <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
