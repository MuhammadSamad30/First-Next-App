import Nav from "@/component/Nav";

export default function edu() {
  return (
    <div className="">
      <Nav />

      <div className="items-center pl-8">
        <h2 className="text-5xl text-center font-bold text-blue-800 my-8">
          Welcome to my website
        </h2>
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <div>
          <ul>
            <li className="text-xl font-semibold">Matric</li>
          </ul>
          <p className="">
            I am a student enrolled in the Governor&apos;s Sindh IT Initiative. I
            am currently learning about Generative AI, full-stack development,
            the metaverse, and Web 3.0 technologies. This comprehensive program
            is equipping me with cutting-edge skills to navigate and excel in
            the rapidly evolving digital landscape. I am eager to leverage this
            knowledge to contribute meaningfully to the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
}
