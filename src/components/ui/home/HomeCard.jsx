import { Link } from 'react-router-dom';
import { BASE_URL,  usePostAddItemMutation  } from '../../../services/marketShellApi';

function HomeCard({item}) {
    
      // const handleAddItem = (item) => {
      //   const cart_code = localStorage.getItem('cart_code')
      //   const data = {
      //     cart_code: cart_code,
      //     product_id: item.id,
      //     quantity: 1
      //   }
      //   addItem(data)
      // }

  return (
    <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <Link to={`/detail/${item.slug}`} className="block text-black hover:text-gray-800">
        <div className="bg-white rounded-lg shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 overflow-hidden h-full flex flex-col min-h-[350px]">
         
       
          <img src={`${BASE_URL}${item.image}`} alt={item.name} className="w-full h-48 object-cover" />

          <div className="p-4 text-center">
            <h5 className="font-semibold text-lg">{item.name.length > 25 ? `${item.name.substring(0, 25) + '...'}` : item.name} </h5>
            <p className="text-sm text-gray-600">{item.description.length > 50 ? `${item.description.substring(0, 50) + '...'}` : item.description}</p>
            <p className="text-lg font-bold text-gray-600 mt-2">₦{Number(item.price || 0).toLocaleString('en-NG')}</p>
          </div>
          
        </div>
      
      </Link>
    </div>
  );
}
export default HomeCard;


