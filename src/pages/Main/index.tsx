import Catalog from "../Catalog";
import "./Main.scss";

export interface ICatalog {
  title: string;
  price: number;
  imageUrl: string;
}

const Main = () => {
  const catalogs: ICatalog[] = [
    {
      title: "Ноутбук",
      price: 1000,
      imageUrl:
        "https://gamehall.com.ua/wp-content/uploads/2021/04/Acer-Nitro-5.jpg",
    },
    {
      title: "Фотоаппарат",
      price: 500,
      imageUrl:
        "https://avatars.mds.yandex.net/get-mpic/4591438/img_id5030141304480382679.jpeg/orig",
    },
    {
      title: "Книга",
      price: 20,
      imageUrl:
        "https://kormchiy.su/upload/iblock/cb2/bibliya-s-gravyurami-gyustava-dore-bolshoy-format-09676-1000px.jpg",
    },
    {
      title: "Футбольный мяч",
      price: 30,
      imageUrl:
        "https://avatars.mds.yandex.net/i?id=6b4922d21c98b57dd42f0f65da0e98f74894555b-9705291-images-thumbs&n=13",
    },
    {
      title: "Шоколад",
      price: 5,
      imageUrl: "https://tornado.shop/images/detailed/4/P1024452__1_.jpg",
    },
    {
      title: "Ручка",
      price: 1,
      imageUrl:
        "https://kantselyarschik.ru/1650-large_default/ruchka-sharikovaya-mc-goldfioletovaya-tolsshina-05-koreya.jpg",
    },
  ];
  return (
    <div className="page-main">
      {catalogs.map((catalog) => {
        return <Catalog catalog={catalog} />;
      })}
    </div>
  );
};

export default Main;
