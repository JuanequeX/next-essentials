const List = ({ users }: any) => {
  console.log(users)
  return (
    <div>
      {
        users?.map((user: any, index: number) => 
          <div key={`${user.id}-${index}`} className="card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
          </div>
        )
      }
    </div>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await response.json();
    console.log(result)
    return {
      props: {
        users: result
      },
    }
  } catch (error) {
    console.log(error)
    return {}
  }
}

export default List;
