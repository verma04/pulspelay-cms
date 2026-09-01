import redirect from "nextjs-redirect";

const Redirect = redirect("https://github.com/pablopunk");

export default () => (
  <Redirect>
    <MyLayout>Redirecting to github!</MyLayout>
  </Redirect>
);
