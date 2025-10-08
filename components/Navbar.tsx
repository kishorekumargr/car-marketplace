import Link from "next/link";

export default function Navbar() {
  return (
    <div className="top-0 sticky flex justify-around items-center bg-gray-100 h-15">
      <Link className="font-bold text-3xl" href="/">
        CarBuy
      </Link>
      <div className="flex gap-10 font-bold">
        <Link href="/">New Cars</Link>
        <Link href="/">Used Cars</Link>
        <Link href="/">Reviews & News</Link>
      </div>
      <Link className="font-bold" href="/">
        Login
      </Link>
    </div>
  );
}
