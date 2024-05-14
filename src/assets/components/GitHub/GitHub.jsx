import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function GitHub() {
  // const [data, setData] = useState([]) ;
  // useEffect(() => {
  //     fetch('https://api.github.com/users/AgDivyansh')
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  // }, [])
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col justify-center item-center">
      <div className="">
        GitHub followers fetching data with the help of api call
      </div>
      <div >
        Divyansh Agarwal GitHub followers: {data.followers}
      </div>
      <div class="flex justify-center items-center pt-12">
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </div>
  );
}

export default GitHub;

export const githubinfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/AgDivyansh");
  return response.json();
};
