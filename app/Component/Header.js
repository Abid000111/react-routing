import React from "react";
import Link from "next/link";

function Header() {
	return (
		<>
			<div className="bg-zinc-950 h-14 pl-7 flex items-center gap-7">
				<Link href="/About">About</Link>
				<Link href="/Product">Product</Link>
				<Link href="/Courses">Courses</Link>
			</div>
		</>
	);
}

export default Header;
