
import Map from "@/components/Map";
import Markers from "@/components/Markers";
import StoreBox from "@/components/StoreBox"
import { StoreType } from "@/interface/store";
import axios from "axios";

export default function Home({ stores }: { stores: StoreType[] }) {

  return (
    <>
      <Map />
      <Markers stores={stores} />
      <StoreBox />
    </>
  );
}

export async function getStaticProps() {
  try{
    const stores = await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
    )

    return {
      props: { stores : stores.data },
      revalidate: 60 * 60,
    };
  } catch(e){
    return {
      notFound: true,
    }
  }
}