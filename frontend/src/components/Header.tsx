export default function Header(): JSX.Element {
  return (
    <>
      <div className="w-full flex justify-between">
        <div className="flex gap-5">
          <h1>LOGO</h1>
          <hr className="my-2"></hr>
          <div>
            <div>BreadCrumbs to Implement</div>
            <div>Current Directory</div>
          </div>
        </div>
        <div>Search Field | Profile |Sign In | Settings |</div>
      </div>
    </>
  );
}
