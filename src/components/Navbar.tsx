import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex gap-16 justify-end p-3 pr-10 bg-purple-900 text-white text-xl">
      <Link href="/">Home</Link>
      <Link href="/addtodo">Add Todo</Link>
      <Link href="/showtodos">Show Todos</Link>
    </div>
  );
};
export default Navbar;
