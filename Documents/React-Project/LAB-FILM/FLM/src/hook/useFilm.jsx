import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  updateShoppingCart,
  setFilm,
  updateDay,
} from "../redux/slices/film.jsx"; // Import cả action updateShoppingCart
const useFilm = () => {
  const dispatch = useDispatch();
  const listFilm = useSelector((state) =>state.film);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleUpdateItemQuantity = (productId, newQuantity) => {
    // Dispatch action updateShoppingCart với productId và newQuantity
    dispatch(updateShoppingCart({ id: productId, newQuantity }));
  };

  const handleRemoveItem = () => {
    // Bạn có thể thêm logic xóa sản phẩm ở đây nếu cần
  };

  const handleEditItem = () => {
    // Bạn có thể thêm logic chỉnh sửa sản phẩm ở đây nếu cần
  };
  const countTotal = () => {
    dispatch(countTotal());
  };
  const handleSetFilm= (newFilm) => {

    dispatch(setFilm(newFilm));
  };
  const handleUpdateDay = (day) => {
    dispatch(updateDay({ day }));
    console.log("Hook: " + day);
  };

  return {
    listFilm,
    handleAddItem,
    handleUpdateItemQuantity,
    handleRemoveItem,
    handleEditItem,
    countTotal,
    handleSetFilm,
    handleUpdateDay,
  };
};

export default useFilm;
