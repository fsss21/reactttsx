import { ICatalog } from "../Main";
import "./Catalog.scss";

interface Props {
  catalog: ICatalog;
}

const Catalog = ({ catalog }: Props) => {
  return (
    <div className="page-main__catalog">
      <img className="page-main__img" src={catalog.imageUrl} alt="" />
      <h4 className="page-main__title">{catalog.title}</h4>
      <h4 className="page-main__text">${catalog.price}</h4>
    </div>
  );
};

export default Catalog;
