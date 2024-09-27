import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {

  const response = await fetch('https://dummyjson.com/users');
  const {users} = await response.json();
  console.log(users);


  return (
    <>
      <div className="content">
        <div className="content-header">
          <h2>Members</h2>
          <div className="btn">
            <input type="text" placeholder="Search" />
            <button>Add member</button>
          </div>
        </div>
        <ul className="users">
            {users.map(users => (
              <li key={users.id}> <div className="user"> <img width={40} src={users.image} /> <strong>{users.firstName} {users.lastName}</strong> <p>{users.email}</p></div> <div className="link" > <p className="role">{users.role}</p> <Link className="detay" href={"/profile/" + users.id} >show detail</Link></div> </li>
            ))}
        </ul>
      </div>
    </>
  );
}
