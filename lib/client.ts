import { createClient, SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Define el tipo de cliente de Sanity
export const client: SanityClient = createClient({
  projectId: "hzg0o7q0",
  dataset: "production",
  apiVersion: "2023-04-02",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// Define el tipo de constructor de URL de imagen de Sanity
const builder: ImageUrlBuilder = imageUrlBuilder(client);

// Define el tipo de función de URL para la fuente de imagen de Sanity
export const urlFor = (source: SanityImageSource): ImageUrlBuilder => builder.image(source);

