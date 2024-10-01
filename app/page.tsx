import Nav from "@/component/Nav";
import Resume from "@/component/Resume";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav/>

      <div className="flex-grow items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 my-12">
          Welcome to my website
        </h2>
        
        {/* Resume Section */}
        <div className="max-w-4xl pl-4">
          <Resume />
        </div>
      </div>
    </div>
  );
}
