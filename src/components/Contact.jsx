import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Contact = ({ phone, text }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-center md:grid-cols-5 mt-10">
      <div className="bg-blue-50 flex flex-col gap-3 p-10 rounded text-center shadow-xl">
        <IconMapPin width={40} height={40} className="mx-auto text-blue-800" />
        <Typography className="font-semibold text-lg text-blue-900">
          Alamat
        </Typography>
        <Typography>
          Ruko Crown Palace Blok C.21 Jl. Prof. Drs Soepomo, SH No.231 Jakarta
          Selatan 12810
        </Typography>
      </div>
      <a href={`https://wa.me/${phone}?text=${text}`}>
        <div className="bg-blue-50 flex flex-col gap-3 p-10 rounded text-center shadow-xl">
          <IconBrandWhatsapp
            width={40}
            height={40}
            className="mx-auto text-blue-800"
          />
          <Typography className="font-semibold text-lg text-blue-900">
            Whatsapp
          </Typography>
          <Typography>+62 895-3266-51557</Typography>
        </div>
      </a>
      <a href={`tel: ${phone}`}>
        <div className="bg-blue-50 flex flex-col gap-3 p-10 rounded text-center shadow-xl">
          <IconPhone width={40} height={40} className="mx-auto text-blue-800" />
          <Typography className="font-semibold text-lg text-blue-900">
            Telepon
          </Typography>
          <Typography>+62 895-3266-51557</Typography>
        </div>
      </a>
      <a href="">
        <div className="bg-blue-50 flex flex-col gap-3 p-10 rounded text-center shadow-xl">
          <IconMail width={40} height={40} className="mx-auto text-blue-800" />
          <Typography className="font-semibold text-lg text-blue-900">
            Email
          </Typography>
          <Typography>info@zenoh.com</Typography>
        </div>
      </a>
      <a href="">
        <div className="bg-blue-50 flex flex-col gap-3 p-10 rounded text-center shadow-xl">
          <IconClock width={40} height={40} className="mx-auto text-blue-800" />
          <Typography className="font-semibold text-lg text-blue-900">
            Jam Kerja
          </Typography>
          <Typography>Monday - Friday </Typography>
          <Typography>09:00AM - 05:00PM</Typography>
        </div>
      </a>
    </div>
  );
};
Contact.propTypes = {
  phone: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Contact;
