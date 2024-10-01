import Nav from "@/component/Nav";

export default function about(){
    return(
        <div className="">
          <Nav/>
      <div className="items-center pl-8">
      <h2 className="text-5xl text-center font-bold text-blue-800 my-8">Welcome to my website</h2>
      <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">About</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Senior Web Developer</h3>
            <p className="">ABC Tech Solutions |</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum, dolor sit amet</li>
              <li>Lorem ipsum, dolor sit adipisicing elit.</li>

            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p className="">XYZ Web Studio |</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Designed and implemented responsive websites using HTML, CSS, and JavaScript.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquam?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
}
