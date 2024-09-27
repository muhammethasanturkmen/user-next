export default async function Profile({ params }) {
  const { id } = params;

  const respose = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await respose.json();
  console.log(data);

  return (
    <>
      <div className="user-container">
        <div className="profile-header">
          <img src={data.image} />
          <div className="profile-user">
            <strong>{data.firstName} {data.lastName}</strong>
            <p>{data.role}</p>
            <p>{data.company.department}</p>
            <p>{data.address.country}</p>
          </div>
        </div>
        <div className="personal">
          <p> First Name
            <strong>{data.firstName}</strong>
          </p>
          <p> Last Name
            <strong>{data.lastName} {data?.maidenName}</strong>
          </p>
          <p> Email Address
            <strong>{data.email}</strong>
          </p>
          <p> Phone
            <strong>{data.phone}</strong>
          </p>
          <p> Age
            <strong>{data.age}</strong>
          </p>
          <p> Gender
            <strong>{data.gender}</strong>
          </p>
          <p> Date
            <strong>{data.birthDate}</strong>
          </p>
        </div>
        <div className="adres">
          <p> Country
            <strong>{data.address.country}</strong>
          </p>
          <p> City
            <strong>{data.address.city}</strong>
          </p>
          <p> Postal Code
            <strong>{data.address.postalCode}</strong>
          </p>
        </div>
      </div>
    </>
  )
}