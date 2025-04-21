
import ProductPagePlaceholder from "./ProductPagePlaceholder"
import ProductDetail from "./ProductDetailPage"
import { useGetProductDetailQuery} from "../../../services/marketShellApi"
import Error from "../Error"
import { useParams } from "react-router-dom"


function ProductPage() {


    const {slug} = useParams();
    const { data, error, isLoading } = useGetProductDetailQuery(slug)

    

    if (error) {
        return(
            <Error/>
        )

    }
  return (
    <div>
        {isLoading? <ProductPagePlaceholder/> : <ProductDetail data={data}/>}

      
    </div>
  )
}

export default ProductPage
