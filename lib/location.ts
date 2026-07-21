const FALLBACK = {
  city: "Dehradun",
  region: "Uttarakhand",
  latitude: 30.33,
  longitude: 78.06,
  timezone: "Asia/Kolkata",
};

type UserLocation = {
  city: string;
  region: string;
  latitude: number;
  longitude: number;
  timezone: string;
};

export async function getLocation(): Promise<UserLocation> {
  try {
    const res = await fetch("https://ipapi.co/json/", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch location.");
    }

    const data = await res.json();

    return {
      city: (data.city ?? FALLBACK.city).toLowerCase(),
      region: (data.region ?? FALLBACK.region).toLowerCase(),
      latitude:
        typeof data.latitude === "number"
          ? data.latitude
          : FALLBACK.latitude,
      longitude:
        typeof data.longitude === "number"
          ? data.longitude
          : FALLBACK.longitude,
      timezone: data.timezone ?? FALLBACK.timezone,
    };
  } catch (error) {
    console.error("Location fetch failed:", error);

    return FALLBACK;
  }
}