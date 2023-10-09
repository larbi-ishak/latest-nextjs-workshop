export default function Home({ params }: { params: { id: string } }) {
  return <p>{params.id}</p>;
}

export async function generateStaticParams() {
  const {pages} =  require("../../../data/links.json")
  
  return pages.map((post: any) => ({
    id: post.title,
  }))
}
 export const dynamicParams = false //fallback previously