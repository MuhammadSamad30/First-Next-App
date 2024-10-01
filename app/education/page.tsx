import Education from "@/component/Education";
import Nav from "@/component/Nav";

export default function edu(){
    return(
        <div className="">
     <Nav/>

      <div className="items-center pl-8">
      <h2 className="text-5xl text-center font-bold text-blue-800 my-8">Welcome to my website</h2>
        <Education/>
      </div>
    </div>
    )
}
