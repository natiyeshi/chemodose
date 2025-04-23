import { ICBlog } from "@/interfaces/blog.interface";
import { MetadataRoute } from "next";


export default async function sitemap() : Promise<MetadataRoute.Sitemap>{
  const URL = "https://chemodos.com"
    return [
        {
            url : `${URL}`,
        },
        {
            url : `${URL}/products`,
        },
        {
            url : `${URL}/about`,
        },
        {
            url : `${URL}/contact`,
        },
        {
            url : `${URL}/services`,
        },
        
    ]
}