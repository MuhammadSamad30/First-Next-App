const Resume = () => {
  return (
    <div className="bg-white p-10 rounded-lg justify-center items-center shadow-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b-2 pb-6 mb-8">
        <h1 className="text-4xl font-bold">Muhammad Samad</h1>
        <p className="text-xl mt-2">Web Developer</p>
        <p className="text-sm mt-1">
          <span className="hover:underline">MuhammadSamad@example.com</span> | +123 456 7890 | 
          <span className="hover:underline ml-1">MuhammadSamad.com</span>
        </p>
      </div>

      {/* About */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <div className="mb-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Senior Web Developer</h3>
            <p>ABC Tech Solutions | Jan 2020 - Present</p>
            <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
              <li>Led a team of developers in building scalable web applications.</li>
              <li>Improved performance and optimization of legacy systems.</li>
              <li>Collaborated with cross-functional teams to enhance product features.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p>XYZ Web Studio | May 2016 - Dec 2019</p>
            <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-1">
              <li>Designed and implemented responsive websites using HTML, CSS, and JavaScript.</li>
              <li>Worked closely with clients to gather requirements and deliver solutions.</li>
              <li>Optimized website performance across different devices and browsers.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
          <p>University of Giaic | 2014 - 2018</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Matriculation</h3>
          <p>High School of Giaic | 2010 - 2012</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>HTML, CSS, TypeScript</li>
          <li>JavaScript, Node.js, Figma</li>
          <li>Git, GitHub, Next.js</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
