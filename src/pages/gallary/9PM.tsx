import ProjectPage from "../../component/ProjectPage";

export default function Page9PM() {
  return (
    <ProjectPage
      title="9PM Hair Salon"
      subtitle="Modern salon build‑out with clean lines and warmth."
      websiteUrl="https://www.9pmhairsalon.com/"
      location="Greater Seattle Area"
      scope="Commercial TI • Interior build‑out"
      services="Permitting support, framing, MEP coordination, finishes"
      status="Completed"
      heroImage="/9PM/1.jpg"
      images={["/9PM/1.jpg", "/9PM/2.jpg", "/9PM/3.jpg"]}
      copy={
        "For 9PM Hair Salon, our team delivered a warm, minimalist space that balances durability with comfort. The layout optimizes stylist circulation while keeping guest areas open and airy. Material choices emphasize easy maintenance and a refined, modern feel."
      }
    />
  );
}