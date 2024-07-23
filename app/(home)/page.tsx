import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <Button>
        <Link href="/sign-up">Get Started</Link>
      </Button>
    </main>
  );
};
export default Home;
