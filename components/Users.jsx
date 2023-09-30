/* "use client"; */
import Link from "next/link";
import React from "react";

export default function Users({ users }) {
  return (
    <ul>
      {users.map(({ id, first_name, last_name, avatar, email }) => (
        <Link key={id} href={`/users/${id}`}>
          <li className=" bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between">
            <div>
              <h5 className=" font-bold">
                {id} {first_name} {last_name}
              </h5>
              <p>{email}</p>
            </div>
            <img src={avatar} alt="avatar" className=" rounded-full w-20" />
          </li>
        </Link>
      ))}
    </ul>
  );
}
