import Nav from "@/component/Nav";

export default function skills(){
    return(
        <div className="">
          <Nav/>
      <div className="items-center pl-8">
      <h2 className="text-5xl text-center font-bold text-blue-800 my-8">Welcome to my website</h2>
      <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <ul className="list-disc ml-6">
            <li>Html, CSS, TypeScript</li>
            <li>JavaScript, Node.js, Figma</li>
            <li>Git, Github, Next.js</li>
          </ul>
        </div>
      </div>
    </div>
    )
}

  