const List = ({ users }: any) => {
  console.log(users)
  return (
    <div>
      Users list
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
