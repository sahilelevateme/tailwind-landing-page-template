
import Image from "next/image";
import mainlogo from "@/public/images/ElevanaAI.jpeg"
import PageIllustration from "@/components/page-illustration";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">

      <Image
      className="text-5xl rounded-lg"
      src={mainlogo}
      width={40}
      height={40}
      alt="Elevana"
    />

    </Link>
  );
}
