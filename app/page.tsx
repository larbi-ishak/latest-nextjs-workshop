
async function consumeStarWars(){
  // fetch on the server
  // you can use caching, data revalidation ...
  const res = await fetch("https://swapi.dev/api/starships/9", {next: {revalidate: 10}})
  // alternatively you can use this 
  // export const revalidate = 3600 // revalidate at most every hour but in the file scope
  const data = res.json()
  return data
}

export default async function Home() {
  const data = await consumeStarWars()

  return (
    <main >
      just some thing
      {JSON.stringify(data)}
    </main>
  )
}

