import ProjectPage from "../../component/ProjectPage";

export default function PageBloom() {
  return (
    <ProjectPage
      title="Bloom Nail Spa"
      subtitle="Modern salon build‑out with clean lines and warmth."
      websiteUrl="https://bloomnailspa.com/"
      location="Bellevue"
      scope="Commercial TI • Interior build‑out"
      services="Permitting support, framing, MEP coordination, finishes"
      status="Completed"
      heroImage="/nail/1.jpg"
      images={["/nail/1.jpg", "/nail/2.jpg", "/nail/3.jpg", "/nail/4.jpg"]}
      copy={
        "For 9PM Hair Salon, our team delivered a warm, minimalist space that balances durability with comfort. The layout optimizes stylist circulation while keeping guest areas open and airy. Material choices emphasize easy maintenance and a refined, modern feel."
      }
    />
  );
}