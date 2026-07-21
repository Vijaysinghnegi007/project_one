// We'll replace this piece by piece as we build each section in the video.
// import Hero from "@/components/hero";
import Hero2 from "@/components/hero2"
import  {getLocation} from "@/lib/location" 
export default async function HomePage() {

  const location = await getLocation()
  console.log(location)
  return (
    <main className="relative">
      {/* <Hero></Hero> */}
      <Hero2></Hero2>
    </main>
  );
}
