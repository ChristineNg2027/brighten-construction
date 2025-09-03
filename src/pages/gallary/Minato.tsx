import ProjectPage from "../../component/ProjectPage";

export default function PageMinato() {
  return (
    <ProjectPage
      title="Minato Japanese Restaurant"
      subtitle="Warm wood tones and crisp lines for a relaxed dining experience."
      websiteUrl="https://minatoseattle.com/"
      location="Greater Seattle Area"
      scope="Restaurant TI • Interior build-out"
      services="Permitting support, framing, MEP coordination, finishes"
      status="Completed"
      heroImage="/minato/1.jpg"
      images={[
        "/minato/1.jpg",
        "/minato/2.jpg",
        "/minato/3.jpg",
        "/minato/4.jpg",
        "/minato/5.jpg",
        "/minato/6.jpg",
      ]}
      copy="We created an efficient kitchen–dining flow with durable finishes and a calm palette."
    />
  );
}