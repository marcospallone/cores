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