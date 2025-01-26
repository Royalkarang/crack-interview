// pages/404.js
import Image from "next/image";
import constructionImg from "../../public/construction.png"
const NotFound = () => {

  return (
    <div className={`h-screen flex items-center justify-center 'bg-black text-white`}>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Page Under Construction</h1>
        <p className="mt-4">Sorry, the page you`re looking for is under construction.</p>
        <div className="mt-6">
          {/* Animated image */}
          <Image
            src={constructionImg} // Replace with the path to your animated image
            alt="Under Construction"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
