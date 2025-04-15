import HotelIcon from '@mui/icons-material/Hotel';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ParkIcon from '@mui/icons-material/Park';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import MapIcon from '@mui/icons-material/Map';
import { SvgIconComponent } from "@mui/icons-material";

export const iconMapper: Record<string, SvgIconComponent> = {
  bed: HotelIcon,
  bar: LocalBarIcon,
  restaurant: RestaurantMenuIcon,
  laundry: LocalLaundryServiceIcon,
  parking: LocalParkingIcon,
  park: ParkIcon,
  location: MyLocationIcon,
  map: MapIcon,
};

export const gardenImages = [
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/171.jpeg",
    title: "Scalinata d'ingresso",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCF8952.jpg",
    title: "Giardino esterno",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCF8955.jpg",
    title: "Vista Sud-Est ",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCF9193.jpg",
    title: "Vista Est",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCF9192.jpg",
    title: "Ingresso superiore",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0062.JPG",
    title: "Fornelli Cucina",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0068.JPG",
    title: "Banchi Cucina",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0070.JPG",
    title: "Lavelli Cucina",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0072.JPG",
    title: "Lavaggio Cucina",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0081.JPG",
    title: "Sala principale ristorante",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0091.JPG",
    title: "Porticato ristorante",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0092.JPG",
    title: "Porticato ristorante",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0093.JPG",
    title: "Vista sala dal porticato",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0095.JPG",
    title: "Porticato ristorante",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0097.JPG",
    title: "Porticato ristorante",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0107.JPG",
    title: "Sala da ballo",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0110.JPG",
    title: "Sala da ballo",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0113.JPG",
    title: "Lavandino bagno ristorante",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0115.JPG",
    title: "Bagni ristorante",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0143.JPG",
    title: "Bureau",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0147.JPG",
    title: "Bar",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0150.JPG",
    title: "Sala bar",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0153.JPG",
    title: "Sala bar",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0156.JPG",
    title: "Sala tv",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0157.JPG",
    title: "Camino Sala tv",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0159.JPG",
    title: "Camino",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0166.JPG",
    title: "Sala giochi",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0162.JPG",
    title: "Sala giochi",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0170.JPG",
    title: "Sala convegni",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0174.JPG",
    title: "Sottoscala ingresso con fontana",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0175.JPG",
    title: "Vista dalla scala",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0176.JPG",
    title: "Scalinata ingresso",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0177.JPG",
    title: "Ingresso",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0184.JPG",
    title: "Sala convegni",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0188.JPG",
    title: "Sala convegni",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0189.JPG",
    title: "Sala convegni",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0196.JPG",
    title: "Camera singola",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0199.JPG",
    title: "Camera doppia",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0204.JPG",
    title: "Bagno privato",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0209.JPG",
    title: "Camera tripla",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0210.JPG",
    title: "Bagno privato",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0211.JPG",
    title: "Vasca",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0230.JPG",
    title: "Corridoio camere",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0240.JPG",
    title: "Camera doppia",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0242.JPG",
    title: "Camera doppia",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0250.JPG",
    title: "Doccia",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0254.JPG",
    title: "Camera tripla",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0259.JPG",
    title: "Camera matrimoniale",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0271.JPG",
    title: "Scrittoio in camera",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0315.JPG",
    title: "Scale",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN1818.JPG",
    title: "Vista nord",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/lavanderia.JPG",
    title: "lavanderia",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/Hero1.jpg",
    title: "Vista del centro storico",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/sala1.JPG",
    title: "Sala intrattenimento",
  },
  {
    src: process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCF9184.jpg",
    title: "Parcheggio",
  },
];
