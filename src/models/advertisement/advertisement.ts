type AdvertisementTypes = "GROCERY" | "DELIVERY" | "INTERNET" | "NEWS";

export default interface Advertisement {
  id: string | null;
  types: AdvertisementTypes | null;
  contents: string | null;
  displayDate: string | null;
  startAt: string | null;
  endAt: string | null;
  limitPerDay: number | null;
}
