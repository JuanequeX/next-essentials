const Photos = ({ photos }: any) => {

  return (
    <div>
      {
        photos?.map((photo: any, index: number) => <img src={photo.url} alt={photo.title} key={`user-photo-${photo.title}-${index}`} />)
      }
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
    const data = await res.json()
    console.log(data)
    return {
     props: {
      photos: data
     }
    }
  } catch (error) {
    console.log(error)
    return{}
  }
}

export default  Photos;
