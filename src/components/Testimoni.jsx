import { Carousel, IconButton, Typography } from "@material-tailwind/react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconStarFilled,
} from "@tabler/icons-react";
const Testimoni = () => {
  return (
    <>
      <Carousel
        className="h-auto py-10"
        loop={true}
        autoplay={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 bg-gray-200 text-black left-2 -translate-y-2/4"
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
        <div className="m-10">
          <div className=" flex flex-col gap-4 md:p-0">
            <div className="shadow-xl p-10 rounded-lg">
              <div className="flex justify-center">
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
              </div>
              <Typography className="text-sm text-center text-gray-700 mt-5">
                &quot;Kami telah bekerja sama dengan Zenoh selama lebih dari dua
                tahun, dan keahlian mereka dalam konsultasi TI telah sangat
                berharga bagi pertumbuhan perusahaan kami. Mereka secara
                konsisten memberikan solusi inovatif dan saran ahli yang telah
                membantu kami menyederhanakan operasional dan tetap unggul. Saya
                sangat merekomendasikan Zenoh kepada perusahaan yang ingin
                meningkatkan infrastruktur TI mereka.&quot;
              </Typography>
              <Typography className="text-center font-semibold mt-10">
                Sarah Jones
              </Typography>
              <Typography className="text-center">
                CEO Tech Innovations Inc.
              </Typography>
            </div>
          </div>
        </div>
        <div className="m-10">
          <div className=" flex flex-col gap-4 md:p-0">
            <div className="shadow-xl p-10 rounded-lg">
              <div className="flex justify-center">
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
              </div>
              <Typography className="text-sm text-center text-gray-700 mt-5">
                &quot;Zenoh telah menjadi mitra penting bagi kami dalam
                menavigasi dunia yang kompleks dalam TI. Pengetahuan mendalam
                dan pendekatan proaktif tim mereka telah sangat berperan dalam
                mengoptimalkan sistem kami dan memastikan efisiensi maksimum.
                Dari keamanan siber hingga migrasi awan, Zenoh memberikan solusi
                terbaik yang disesuaikan dengan kebutuhan kami.&quot;
              </Typography>
              <Typography className="text-center font-semibold mt-10">
                Michael Chang
              </Typography>
              <Typography className="text-center">CTO Data Dynamics</Typography>
            </div>
          </div>
        </div>
        <div className="m-10">
          <div className=" flex flex-col gap-4 md:p-0">
            <div className="shadow-xl p-10 rounded-lg">
              <div className="flex justify-center">
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
              </div>
              <Typography className="text-sm text-center text-gray-700 mt-5">
                &quot;Bekerja dengan Zenoh telah mengubah permainan bagi
                organisasi kami. Dedikasi mereka untuk memahami tujuan bisnis
                kami dan memberikan solusi TI yang disesuaikan telah sangat
                mengesankan. Mereka bukan hanya konsultan; mereka adalah
                penasihat tepercaya yang berusaha keras untuk memastikan
                kesuksesan kami. Saya sangat merekomendasikan Zenoh.&quot;
              </Typography>
              <Typography className="text-center font-semibold mt-10">
                Emily Patel
              </Typography>
              <Typography className="text-center">
                Manajer TI di Global Solutions Ltd
              </Typography>
            </div>
          </div>
        </div>
        <div className="m-10">
          <div className=" flex flex-col gap-4 md:p-0">
            <div className="shadow-xl p-10 rounded-lg">
              <div className="flex justify-center">
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
              </div>
              <Typography className="text-sm text-center text-gray-700 mt-5">
                &quot;Zenoh telah sangat berperan dalam membantu kami
                memodernisasi infrastruktur TI kami sambil tetap berada dalam
                anggaran. Keahlian tim mereka dalam strategi dan implementasi TI
                telah memungkinkan kami meningkatkan produktivitas, meningkatkan
                keamanan, dan menghasilkan penghematan biaya. Bermitra dengan
                Zenoh adalah salah satu keputusan terbaik yang kami buat sebagai
                perusahaan.&quot;
              </Typography>
              <Typography className="text-center font-semibold mt-10">
                David Miller
              </Typography>
              <Typography className="text-center">
                CFO SecureTech Solutions
              </Typography>
            </div>
          </div>
        </div>
        <div className="m-10">
          <div className=" flex flex-col gap-4 md:p-0">
            <div className="shadow-xl p-10 rounded-lg">
              <div className="flex justify-center">
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
                <IconStarFilled className="text-yellow-700" />
              </div>
              <Typography className="text-sm text-center text-gray-700 mt-5">
                &quot;Pendekatan holistik Zenoh dalam konsultasi TI membedakan
                mereka dari pesaing lainnya. Mereka meluangkan waktu untuk
                memahami tujuan dan tantangan bisnis kami sebelum
                merekomendasikan solusi, memastikan bahwa setiap rekomendasi
                sejalan dengan visi jangka panjang kami. Berkat Zenoh, kami
                telah berhasil mengatasi hambatan, berinovasi lebih cepat, dan
                tetap bersaing dalam lanskap TI yang terus berkembang pesat saat
                ini.&quot;
              </Typography>
              <Typography className="text-center font-semibold mt-10">
                Amanda Lee
              </Typography>
              <Typography className="text-center">
                Direktur Operasional di Innovate IT
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Testimoni;
