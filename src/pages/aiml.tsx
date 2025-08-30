import Navbar from "../components/Navbar";
import Hero from "../components/Hero.tsx";
import BG from "../assets/explore/ai-ml-home-bg.svg";

export default function Aiml() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="AI/ML" title="Build your career the right way!" />
      <div className="flex flex-col items-center justify-start w-full ">
      <main className="p-10 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/* Header */}
        <header>
          <h1 className="text-center text-4xl md:text-5xl font-bold underline mb-10" style={{ fontFamily: 'Cormorant Infant, serif' }}>
            Artificial Intelligence/Machine Learning Career Guide
          </h1>
        </header>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Overview</h2>
          <p>
            Ever wondered how modern technologies work? At the heart of many innovations are Artificial Intelligence (AI) and Machine Learning (ML), enabling systems to learn from data, make decisions, and solve complex problems. These technologies impact nearly every aspect of life - voice assistants, personalized recommendations, weather predictions, and more. In healthcare, they aid early diagnosis and personalized treatments. In finance, they detect fraud and optimize investments. Industries like agriculture and robotics benefit from AI and ML through automation and increased efficiency. At their core, AI and ML rely on mathematical principles and advanced algorithms, using tools like TensorFlow and PyTorch to analyze data and make predictions. By combining theoretical knowledge with practical applications, these technologies empower us to develop intelligent systems that solve real-world challenges, transforming how we live and work.
          </p>
        </section>

        {/* Daily Tasks */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Daily Tasks</h2>
          <p>
            AI/ML careers are broadly split into research and development roles, each requiring mathematical and programming expertise but differing in focus.
          </p>
          <h3 className="font-semibold mt-4">Research Roles</h3>
          <p>
            Involve developing new algorithms, exploring theoretical foundations, and tackling advanced topics like generative AI and explainable AI. These roles are found in academia, research labs, and innovative companies.
          </p>
          <h3 className="font-semibold mt-4">Development Roles</h3>
          <p>
            Focus on building and deploying machine learning models to address real-world problems. These practical roles are prevalent in industries like finance, healthcare, and e-commerce, driving impactful solutions through applied AI/ML techniques.
          </p>
        </section>

        {/* Payscale */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Payscale</h2>
          <p>Median Joining Package: Data varies; typically high in leading tech companies and research institutions.</p>
        </section>

        {/* Branches */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Branches</h2>
          <p><strong>Research Roles:</strong> Circuital branches like CSE, EE, and MT are preferred due to their strong theoretical foundation.</p>
          <p><strong>Development Roles:</strong> Open to all branches, as practical applications value problem-solving and programming skills.</p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <p><strong>Research Roles:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-5">
            <li>Linear Algebra, Probability Theory, Multivariable Calculus, Optimization</li>
            <li>Programming (Python, R, and research tools like Jupyter Notebooks and PyTorch)</li>
            <li>Domain Expertise (LLMs), generative models, and neural networks.</li>
          </ul>
          <p className="mt-4"><strong>Development Roles:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-5">
            <li>Python (TensorFlow, Scikit-learn, PyTorch, Jupyter)</li>
            <li>Tools like Docker, Kubernetes, and cloud platforms (AWS, GCP, Azure)</li>
            <li>Solid understanding of applied statistics and probability.</li>
          </ul>
        </section>

        {/* Trajectory */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Career Trajectory</h2>
          <p><strong>Research:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-5">
            <li>Pursue advanced studies (Masters/Ph.D.), publish in top-tier conferences, and work in leading research labs (Google Brain, DeepMind, FAIR).</li>
            <li>Transition to academic roles or apply research in AI startups.</li>
          </ul>
          <p className="mt-4"><strong>Development:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-5">
            <li>Master AI/ML tools contribute to open-source projects and progress to leadership roles (tech lead, manager, or product manager).</li>
            <li>Offer AI/ML consulting or freelancing across industries.</li>
          </ul>
        </section>

        {/* Resume */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Resume</h2>
          <p><strong>Research:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-5">
            <li>High CGPA and department ranks.</li>
            <li>Published research papers in reputed AI/ML conferences or journals.</li>
            <li>Internships at research labs or innovative tech companies.</li>
          </ul>
          <p className="mt-4"><strong>Development:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-5">
            <li>Successful machine learning projects with measurable impact.</li>
            <li>Practical experience with data pipelines and model deployment.</li>
            <li>Collaborative projects demonstrating teamwork and initiative.</li>
          </ul>
        </section>

        {/* Companies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Companies</h2>
          <p>(not necessarily on-campus recruitments)</p>
          <p><strong>Research:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-5">
            <li>Research Labs: Microsoft Research, FAIR (Meta), Adobe Research.</li>
            <li>Universities: MIT, Stanford, IITs, CMU</li>
            <li>Companies: OpenAI, DeepMind, Anthropic, Meta.</li>
          </ul>
          <p className="mt-4"><strong>Development:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-5">
            <li>Companies: Microsoft AI, Amazon AI, NVIDIA.</li>
            <li>Startups: Glean, Eightfold AI, Cohere, Stability AI,</li>
            <li>Domains: Healthcare (Zebra Medical), Finance (American Express)</li>
          </ul>
        </section>
      </main>
    </div>
    </div>
  );
}