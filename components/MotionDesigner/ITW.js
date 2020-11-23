import { useEffect } from "react";

const ITW = () => {
  useEffect(() => {
    import("lite-youtube-embed");
  }, []);
  return (
    <div className="px-8">
      <h2 className="pl-3 mb-5 text-4xl text-gray-900 font-display job-heading-itw job-heading">
        L’interview d’un Motion Designer
      </h2>
      <div className="flex space-x-5 product-designer-text">
        <p className="w-2/3 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim curabitur aliquet euismod risus volutpat
          aliquam leo neque. Mauris eleifend ullamcorper tortor, nulla purus morbi et posuere. At arcu sed hendrerit
          morbi nec dolor. Suspendisse eu elementum amet lorem cras egestas cras. Vestibulum eu, mauris non hac est arcu
          proin. Amet non, neque blandit posuere. Pretium ipsum sit consectetur accumsan tellus. Aliquam amet, massa est
          ornare semper dignissim. Non sem hendrerit varius lorem egestas et. Lorem neque dui ornare auctor enim arcu.
          Purus a amet, erat et integer est elementum urna. In elit eget mattis laoreet nibh in id cursus nam. Integer
          mauris convallis massa diam facilisis ut posuere. Sodales at auctor mauris, viverra scelerisque. Nunc eu nisl
          porta viverra. Gravida adipiscing at purus volutpat a, nec. Sed viverra ac, natoque duis dolor. Scelerisque
          scelerisque suspendisse.
        </p>
        <div className="w-1/3 ">
          <lite-youtube
            class="rounded-lg shadow-lg"
            videoId="2-g96TuTVSQ"
            playlabel="Interview Aymeric Delpeuch - MMI 2020"
          />
        </div>
      </div>
    </div>
  );
};

export default ITW;
