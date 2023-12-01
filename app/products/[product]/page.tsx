import { getData } from '@/utils/productActions'
import ProductNav from "@/components/productNav";
export default async function Page({ params,searchParams }: { 
  params: { product: string }
  searchParams?:{tags:[string]}
 }) {
  const tags = searchParams?.tags?.length  ? searchParams : false
  const { product } = params
  const data = await getData(product, false, tags)

  return (<main>
    <ProductNav/>
    <ul>

    </ul>
    <h1>{product.replace("_", " ")} </h1>
    <ul>{data.length > 0 ? data : <h1>None Found</h1>} </ul>


  </main>)
}


