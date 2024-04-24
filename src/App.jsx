import {
  Carousel,
  IconButton,
  Button,
  Card,
  CardBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Header from "./components/Header";
import Image1 from "../src/assets/img-1.png";
import about from "../src/assets/about.jpg";
import Footer from "./components/Footer";
import {
  IconBrandWhatsapp,
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconMoodSmile,
  IconBrowserCheck,
  IconHeadphones,
  IconUsers,
  IconDiamond,
} from "@tabler/icons-react";
import ImgSafe from "../src/assets/img-safe.png";
import Values2 from "../src/assets/values-2.png";
import Values3 from "../src/assets/values-3.png";
import Testimoni from "./components/Testimoni";
import GalleryClient from "./components/GalleryClient";
import Contact from "./components/Contact";
import { Link } from "react-scroll";

const phone = "62895326651557";
const text = "hallo zenoh innovation";
function App() {
  return (
    <>
      <Header />
      <Carousel
        className="mt-10 md:py-64"
        loop={true}
        id="home"
        autoplay={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 bg-gray-200 text-black left-4 -translate-y-2/4"
          >
            <IconArrowNarrowLeft />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 bg-gray-200 text-black !right-4 -translate-y-2/4"
          >
            <IconArrowNarrowRight />
          </IconButton>
        )}
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between container">
          <div className="md:w-1/2 flex flex-col gap-4 p-5 md:p-0">
            <h1 className="text-3xl md:text-5xl text-blue-800 font-bold">
              Selamat datang di Zenoh Tech Innovations
            </h1>
            <p className="text-gray-700 font-light">
              Inovasi TI untuk Masa Depan Bisnis Anda
            </p>
            <div className="flex gap-4">
              <Button color="green">
                <Link
                  activeClass=""
                  smooth
                  spy
                  to="contact"
                  className="flex items-center gap-3"
                >
                  <IconBrandWhatsapp />
                  Hubungi Kami
                </Link>
              </Button>
            </div>
          </div>
          <div className=" md:w-1/2">
            <img src={Image1} alt="image 1" className="h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between container">
          <div className="md:w-1/2 flex flex-col gap-4 p-5 md:p-0">
            <h1 className="text-3xl md:text-5xl text-blue-800 font-bold">
              Zenoh Tech Innovations Solusi TI Terpercaya untuk Pertumbuhan
              Bisnis Anda
            </h1>
            <p className="text-gray-700 font-light">
              Zenoh Tech Innovations adalah solusi TI yang andal untuk bisnis
              Anda. Kami menyediakan bimbingan terpercaya dan inovatif untuk
              mendukung pertumbuhan bisnis Anda melalui teknologi.
            </p>
            <div className="flex gap-4">
              <Button color="green">
                <Link
                  activeClass=""
                  smooth
                  spy
                  to="contact"
                  className="flex items-center gap-3"
                >
                  <IconBrandWhatsapp />
                  Hubungi Kami
                </Link>
              </Button>
            </div>
          </div>
          <div className=" md:w-1/2">
            <img src={Image1} alt="image 1" className="h-full object-cover" />
          </div>
        </div>
      </Carousel>
      <div className="bg-blue-50 py-[100px] mt-10" id="about">
        <div className="container flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 p-4 md:p-0">
            <h1 className="font-semibold text-blue-800">WHO WE ARE</h1>
            <h2 className="text-gray-800 font-semibold text-xl">
              Tentang Kami
            </h2>
            <p className="mt-4 text-gray-700 font-light">
              Zenoh Tech Innovations, kami berkomitmen untuk menyediakan solusi
              konsultasi TI yang inovatif dan terpercaya untuk membantu bisnis
              Anda mencapai potensi penuhnya. Dengan pendekatan yang terfokus
              pada kebutuhan klien dan pemahaman mendalam tentang tren industri,
              kami menawarkan bimbingan ahli yang dibutuhkan untuk menghadapi
              perubahan teknologi dan menghadapi tantangan masa depan. Mari
              berkolaborasi dengan Zenoh dan bertransformasi bersama menuju
              kesuksesan yang berkelanjutan dalam era digital ini.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={about} alt="image 1" className="h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="pt-[100px] container">
        <h1 className="text-2xl md:text-3xl text-center text-blue-800 font-bold">
          Kenapa Memilih Kami?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-0 mt-10 gap-10">
          <Card className="mt-6 text-center hover:shadow-xl">
            <img
              src={ImgSafe}
              width={250}
              alt="card-image"
              className="mx-auto"
            />
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Aman Dan Terjamin
              </Typography>
              <Typography>
                Menyediakan fasilitas dengan keamanan dan keselamatan yang
                tinggi untuk jangka panjang
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 text-center hover:shadow-xl">
            <img
              src={Values2}
              width={250}
              alt="card-image"
              className="mx-auto"
            />
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Cloud Databases
              </Typography>
              <Typography>
                Menyimpan basis data berskala besar yang dapat diintegrasikan
                dengan server perusahaan Anda
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 text-center hover:shadow-xl">
            <img
              src={Values3}
              width={250}
              alt="card-image"
              className="mx-auto"
            />
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Professional Dev
              </Typography>
              <Typography>
                Memberikan kinerja karyawan yang dapat memenuhi kebutuhan
                pengembangan Anda
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-4  p-5 md:p-0 mt-10 gap-10">
        <Card className="mt-6 shadow-xl flex flex-row items-center px-10">
          <IconMoodSmile width={50} height={50} className="text-blue-400" />
          <CardBody>
            <Typography variant="h2" color="blue-gray" className="mb-2">
              232
            </Typography>
            <Typography>Happy Clients</Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 shadow-xl flex flex-row items-center px-10">
          <IconBrowserCheck
            width={50}
            height={50}
            className="text-orange-400"
          />
          <CardBody>
            <Typography variant="h2" color="blue-gray" className="mb-2">
              521
            </Typography>
            <Typography>Projects</Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 shadow-xl flex flex-row items-center px-10">
          <IconHeadphones width={50} height={50} className="text-green-400" />
          <CardBody>
            <Typography variant="h2" color="blue-gray" className="mb-2">
              232
            </Typography>
            <Typography>Hours Of Support</Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 shadow-xl flex flex-row items-center px-10">
          <IconUsers width={50} height={50} className="text-red-400" />
          <CardBody>
            <Typography variant="h2" color="blue-gray" className="mb-2">
              39
            </Typography>
            <Typography>Hard Workers</Typography>
          </CardBody>
        </Card>
      </div>
      <div className="py-[100px] container" id="service">
        <h1 className="font-semibold text-blue-800 text-sm text-center">
          SERVICES
        </h1>
        <h1 className="capitalize text-2xl md:text-3xl text-center text-blue-800 font-bold">
          Layanan Kami
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 p-5 md:p-0 mt-10 gap-10">
          <Card className="mt-6 text-center shadow-xl hover:bg-blue-500 hover:text-white hover:border p-10 border-t-4 border-blue-500">
            <IconDiamond
              width={80}
              height={80}
              className="text-blue-400 mx-auto p-4 bg-blue-50 rounded hover:bg-white"
            />
            <CardBody>
              <Typography variant="h5" className="mb-2">
                E-Statement Blast
              </Typography>
              <Typography>
                Pengiriman tagihan secara cepat dan mudah dengan satu aplikasi
                yang terintegrasi dengan sistem perbankan
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 text-center shadow-xl hover:bg-orange-500 hover:text-white hover:border p-10 border-t-4 border-orange-500">
            <IconDiamond
              width={80}
              height={80}
              className="text-orange-400 mx-auto p-4 bg-orange-50 rounded hover:bg-white"
            />
            <CardBody>
              <Typography variant="h5" className="mb-2">
                Development System
              </Typography>
              <Typography>
                mengembangkan situs web dan aplikasi seluler sehingga program
                terlihat mulus di platform Anda
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 text-center shadow-xl hover:bg-green-500 hover:text-white hover:border p-10 border-t-4 border-green-500">
            <IconDiamond
              width={80}
              height={80}
              className="text-green-400 mx-auto p-4 bg-green-50 rounded hover:bg-white"
            />
            <CardBody>
              <Typography variant="h5" className="mb-2">
                Server Databases
              </Typography>
              <Typography>
                Menyediakan penyimpanan data yang besar dan akses yang mudah,
                namun tetap mengutamakan keamanan tingkat tinggi
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 text-center shadow-xl hover:bg-red-500 hover:text-white hover:border p-10 border-t-4 border-red-500">
            <IconDiamond
              width={80}
              height={80}
              className="text-red-400 mx-auto p-4 bg-red-50 rounded hover:bg-white"
            />
            <CardBody>
              <Typography variant="h5" className="mb-2">
                Whatsapp Blast
              </Typography>
              <Typography>
                Kirim pesan whatsapp dengan templat atau secara manual dengan
                satu aplikasi
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 text-center shadow-xl hover:bg-purple-500 hover:text-white hover:border p-10 border-t-4 border-purple-500">
            <IconDiamond
              width={80}
              height={80}
              className="text-purple-400 mx-auto p-4 bg-purple-50 rounded hover:bg-white"
            />
            <CardBody>
              <Typography variant="h5" className="mb-2">
                Human Resources
              </Typography>
              <Typography>
                memberikan kinerja karyawan yang ahli dalam bidang yang
                dibutuhkan
              </Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 text-center shadow-xl hover:bg-pink-500 hover:text-white hover:border p-10 border-t-4 border-pink-500">
            <IconDiamond
              width={80}
              height={80}
              className="text-pink-400 mx-auto p-4 bg-pink-50 rounded hover:bg-white"
            />
            <CardBody>
              <Typography variant="h5" className="mb-2">
                UI/UX Design
              </Typography>
              <Typography>
                mendesain tampilan website atau mobile Anda menjadi lebih
                menarik dan user friendly
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="container">
        <h1 className="font-semibold text-blue-800 text-sm text-center">
          TESTIMONIALS
        </h1>
        <h1 className="capitalize text-2xl md:text-3xl text-center text-blue-800 font-bold">
          Apa Kata Mereka?
        </h1>
        <Testimoni />
      </div>
      <div className="pb-[100px] container" id="client">
        <h1 className="font-semibold text-blue-800 text-sm text-center">
          OUR CLIENTS
        </h1>
        <h1 className="capitalize text-2xl md:text-3xl text-center text-blue-800 font-bold">
          Klient Kami
        </h1>
        <GalleryClient />
      </div>
      <div className="pb-[100px] container" id="contact">
        <h1 className="font-semibold text-blue-800 text-sm text-center">
          CONTACT
        </h1>
        <h1 className="capitalize text-2xl md:text-3xl text-center text-blue-800 font-bold">
          Hubungi Kami
        </h1>
        <Contact phone={phone} text={text} />
      </div>
      <Footer id="contact" />
      <a
        href={`https://wa.me/${phone}?text=${text}`}
        className="fixed bottom-5 right-5"
      >
        <Tooltip content="Hubungi Kami">
          <button className="p-5 bg-green-500 text-white rounded-full">
            <IconBrandWhatsapp width={30} height={30} />
          </button>
        </Tooltip>
      </a>
    </>
  );
}

export default App;
