import ProjectPage from "../../component/ProjectPage";

export default function PageArashi() {
  return (
    <ProjectPage
      title="Arashi Ramen"
      subtitle="Warm wood tones and crisp lines for a relaxed dining experience."
      websiteUrl="https://www.arashiramen.com/"
      location="Southcenter"
      scope="Restaurant TI • Interior build-out"
      services="Permitting support, framing, MEP coordination, finishes"
      status="Completed"
      heroImage="/ramen/1.jpg"
      images={[
        "/ramen/1.jpg",
        "/ramen/2.jpg",
        "/ramen/3.jpg",
        "/ramen/4.jpg",
        "/ramen/5.jpg",
        "/ramen/6.jpg",
        "/ramen/7.jpg",
      ]}
      copy="We created an efficient kitchen–dining flow with durable finishes and a calm palette."
    />
  );
}