import ProjectPage from "../../component/ProjectPage";

export default function PageFreshCuts() {
  return (
    <ProjectPage
      title="Fresh Cuts Hail Salon"
      subtitle="Modern salon build‑out with clean lines and warmth."
      websiteUrl="https://freshcutsalon.com/"
      location="Bellevue"
      scope="Commercial TI • Interior build‑out"
      services="Permitting support, framing, MEP coordination, finishes"
      status="Completed"
      heroImage="/barber/1.jpg"
      images={["/barber/1.jpg", "/barber/2.jpg", "/barber/3.jpg", "/barber/4.jpg", "/barber/5.jpg", "/barber/6.jpg"]}
      copy={
        "For 9PM Hair Salon, our team delivered a warm, minimalist space that balances durability with comfort. The layout optimizes stylist circulation while keeping guest areas open and airy. Material choices emphasize easy maintenance and a refined, modern feel."
      }
    />
  );
}