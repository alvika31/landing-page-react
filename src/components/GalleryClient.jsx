import Telkom from "../assets/client/telkom.png";
import Hsbc from "../assets/client/hsbc.png";
import Bca from "../assets/client/bca.png";
import Mandiri from "../assets/client/mandiri.png";
import Bni from "../assets/client/bni.png";
import Ibm from "../assets/client/ibm.png";
import Panin from "../assets/client/panin.png";
import Mega from "../assets/client/mega.png";
import Bukopin from "../assets/client/bukopin.png";
const GalleryClient = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-5 mt-10">
      <img
        className="h-auto max-w-full rounded-lg object-cover object-center  bg-gray-200"
        src={Telkom}
        alt="gallery-photo"
      />

      <img
        className="h-auto max-w-full rounded-lg object-cover object-center  bg-gray-200 "
        src={Hsbc}
        alt="gallery-photo"
      />

      <img
        className="h-auto max-w-full rounded-lg object-cover object-center  bg-gray-200"
        src={Bca}
        alt="gallery-photo"
      />

      <img
        src={Mandiri}
        className="h-auto max-w-full rounded-lg object-cover object-center  bg-gray-200"
      />

      <img
        className="h-auto max-w-full rounded-lg object-cover object-center  bg-gray-200"
        src={Bni}
        alt="gallery-photo"
      />

      <img
        className="h-auto max-w-full rounded-lg object-cover object-center  bg-gray-200 "
        src={Ibm}
        alt="gallery-photo"
      />

      <img
        className="h-auto max-w-full rounded-lg object-cover object-center  bg-gray-200"
        src={Panin}
        alt="gallery-photo"
      />

      <img
        className="h-auto max-w-full rounded-lg object-cover object-center  bg-gray-200 "
        src={Mega}
        alt="gallery-photo"
      />

      <img
        className="h-auto max-w-full rounded-lg object-cover object-center  bg-gray-200"
        src={Bukopin}
        alt="gallery-photo"
      />
    </div>
  );
};

export default GalleryClient;
