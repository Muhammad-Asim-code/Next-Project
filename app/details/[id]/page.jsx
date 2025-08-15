import React from "react";
import Details from "../Details";
function DetailsPage({ params }) {
  return (
    <>
      <Details id={params.id} />
    </>
  );
}

export default DetailsPage;
