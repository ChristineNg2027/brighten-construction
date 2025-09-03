import ProjectPage from "../../component/ProjectPage";

export default function PageShabu() {
  return (
    <ProjectPage
      title="Shabu Shabu Kyoto"
      subtitle="Warm wood tones and crisp lines for a relaxed dining experience."
      websiteUrl="https://shabushabukyoto.net/"
      location="Bellevue"
      scope="Restaurant TI • Interior build-out"
      services="Permitting support, framing, MEP coordination, finishes"
      status="Completed"
      heroImage="/shabu/1.jpg"
      images={[
        "/shabu/1.jpg",
        "/shabu/2.jpg",
        "/shabu/3.jpg",
        "/shabu/4.jpg",
        "/shabu/5.jpg",
        "/shabu/6.jpg",
      ]}
      copy="We created an efficient kitchen–dining flow with durable finishes and a calm palette."
    />
  );
}